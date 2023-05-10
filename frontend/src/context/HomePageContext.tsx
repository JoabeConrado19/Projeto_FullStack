import api from "@/services/api";
import { createContext, useEffect, useState } from "react";
import { IProviderProps } from "./RegisterLoginContext";
import { IAnnouncementsData } from "@/interfaces/announcement";

export const PageContext = createContext({} as IHomePageProviderData);

interface IHomePageProviderData {
 announcements: [] | IAnnouncementsData[];
}

export const HomePageProvider = ({ children }: IProviderProps) => {
 const [announcements, setAnnouncements] = useState([]);

 useEffect(() => {
  const listAllAnnouncements = async () => {
   await api
    .get("/cars")
    .then((res) => {
     setAnnouncements(res.data);
    })
    .catch((err) => {
     console.error(err);
    });
  };
  listAllAnnouncements();
 }, []);

 return (
  <PageContext.Provider
   value={{
    announcements,
   }}
  >
   {children}
  </PageContext.Provider>
 );
};
