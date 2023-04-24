import api from "@/services/api";
import { IProviderProps } from "./RegisterContext";
import { createContext } from "react";

export const PageContext = createContext({} as IHomePageProviderData);

interface IHomePageProviderData {
 listAllAnnouncements: () => void;
}

export const HomePageProvider = ({ children }: IProviderProps) => {
 const listAllAnnouncements = async () => {
  await api
   .get("/cars")
   .then((res) => {
    console.log(res);
   })
   .catch((err) => {
    console.error(err);
   });
 };

 return (
  <PageContext.Provider
   value={{
    listAllAnnouncements,
   }}
  >
   {children}
  </PageContext.Provider>
 );
};