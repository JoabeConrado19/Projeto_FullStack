import { ICarsData } from "@/interfaces/announcement";
import { IUserData } from "@/interfaces/user";
import api from "@/services/api";
import { parseJwt } from "@/utils/jwt";
import { NextRouter, useRouter } from "next/router";
import { destroyCookie, parseCookies } from "nookies";
import {
    Dispatch,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from "react";
import { IProviderProps } from "./RegisterLoginContext";
export const announcementPage = createContext({} as IAnnouncementProviderData);

interface IAnnouncementProviderData {
    userAnnouncements: [] | ICarsData[];
    user: IUserData | null;
    setUser: Dispatch<SetStateAction<IUserData | null>>;
    router: NextRouter;
    carUser: string;
    userCarData: IUserData | null;
}

export const AnnouncementPageProvider = ({ children }: IProviderProps) => {
    const [userAnnouncements, setUserAnnouncements] = useState([]);
    const [user, setUser] = useState<IUserData | null>(null);
    const [carUser, setCarUser] = useState<string>("");
    const [userCarData, setUserCarData] = useState<IUserData | null>(null);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const userToken = parseCookies().tokenMotorsShop;
            if (userToken) {
                try {
                    api.defaults.headers.common.Authorization = `Bearer ${userToken}`;

                    const tokenUserData = parseJwt(userToken);

                    const { data }: { data: any } = await api.get(
                        `/users/${tokenUserData.sub}`
                    );
                    setUser(data);
                } catch {
                    destroyCookie(undefined, "tokenMotorsShop");

                    router.push("/login");
                }
            }
        };

        const getAnnouncement = async () => {
            const userAnnouncement = router.query;
            try {
                const { data }: { data: any } = await api.get(
                    `/users/${userAnnouncement.id}`
                );
                setCarUser(data.id);
                setUserAnnouncements(data.cars);
                setUserCarData(data);
                console.log(data)
            } catch { }
        };

        getUser();
        getAnnouncement();
    }, [router, user]);

    return (
        <announcementPage.Provider
            value={{
                userAnnouncements,
                userCarData,
                user,
                setUser,
                router,
                carUser,
            }}
        >
            {children}
        </announcementPage.Provider>
    );
};
