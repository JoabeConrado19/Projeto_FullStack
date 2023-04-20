import { Button } from "@mui/material";

import LogoComponent from "../Logo";
import style from "./style.module.css"
import { useEffect, useState } from "react";
import api from "@/services/api";
import Link from "next/link";

interface IUserData {
    id: string
    name: string
    email: string
    description: string
    profileImage: string
    accountType: string
}

export default function HeaderComponent() {
    const [userData, setUserData] = useState<null | IUserData>(null)

    useEffect(() => {
        const getUser = async () => {
            const userToken = localStorage.getItem("kenzie-kars|token")

            if (userToken) {
                api.defaults.headers.common.Authorization = `Bearer ${userToken}`

                // const userInfos: IUserData = await api.get("/user")

                setUserData({
                    name: "teste",
                    accountType: "",
                    description: "",
                    email: "",
                    id: "",
                    profileImage: ""
                })
            }
        }

        getUser()
    }, [])

    return (
        <header
            className={style.page_header}
        >
            <LogoComponent />
            <div className={style.page_header_buttons}>
                {userData ? 
                    <div className={style.profileContainer}>  
                        <div className={style.profileImageContainer}>
                            <p>SL</p>
                        </div>
                        <p>{userData.name}</p>
                    </div>
                :
                    <>
                        <Button>
                            <Link href="/login">Fazer login</Link>
                        </Button>
                        <Button
                            variant="outlined"
                        >
                        <Link href="/register">Cadastrar</Link>
                        </Button>
                    </>               
                }
            </div>
        </header>
    )
}