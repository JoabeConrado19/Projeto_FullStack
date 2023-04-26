import { createContext, useEffect, useState } from "react";
import { IProviderProps } from "./RegisterLoginContext";
import { parseCookies } from "nookies";
import api from "@/services/api";
import { ICarsData } from "@/Types/announcement";
export const announcementPage = createContext({} as IAnnouncementProviderData)

interface IAnnouncementProviderData{
    userAnnouncements: [] | ICarsData[]
}


export const AnnouncementPageProvider = ({children}: IProviderProps) =>{
    const [userAnnouncements, setUserAnnouncements] = useState([])
    

    const parseJwt = (token: string) =>{
        try{
            return JSON.parse(atob(token.split(".")[1]));
        }catch(e){
            return null
        }
    }

    useEffect(() =>{
        const getUser = async () =>{
            const userToken = parseCookies().token
  
            if(userToken){

                api.defaults.headers.common.Authorization = `Bearer ${userToken}`

                const tokenUserData = parseJwt(userToken)

                const { data }: { data:any } = await api.get(
                    `/users/${tokenUserData.sub}`
                );

                setUserAnnouncements(data.cars)
            }
        }
        getUser()
    },[])
                
    console.log(userAnnouncements)
    
    return(
        <announcementPage.Provider
        value={{
            userAnnouncements
        }}
        >
            {children}
        </announcementPage.Provider>
    )
}