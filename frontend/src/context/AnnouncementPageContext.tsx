import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { IProviderProps } from "./RegisterLoginContext";
import { destroyCookie, parseCookies } from "nookies";
import api from "@/services/api";
import { ICarsData } from "@/interfaces/announcement";
import { IUserData } from "@/interfaces/user";
import { NextRouter, useRouter } from "next/router";
import { parseJwt } from "@/utils/jwt";
export const announcementPage = createContext({} as IAnnouncementProviderData);

interface IAnnouncementProviderData {
  userAnnouncements: [] | ICarsData[];
  user: IUserData | null;
  setUser: Dispatch<SetStateAction<IUserData | null>>;
  router: NextRouter;
}

export const AnnouncementPageProvider = ({ children }: IProviderProps) => {
  const [userAnnouncements, setUserAnnouncements] = useState([]);
  const [user, setUser] = useState<IUserData | null>(null);

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

          setUserAnnouncements(data.cars);
          setUser(data);
        } catch {
          destroyCookie(undefined, "tokenMotorsShop");

          router.push("/login");
        }
      }
    };

    getUser();
  }, [user, router]);

  return (
    <announcementPage.Provider
      value={{
        userAnnouncements,
        user,
        setUser,
        router
      }}
    >
      {children}
    </announcementPage.Provider>
  );
};
