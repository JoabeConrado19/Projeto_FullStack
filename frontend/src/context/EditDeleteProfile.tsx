import { createContext, ReactNode } from "react";
import api from "../services/api";
import { IEditUserSubmit } from "../schemas/editProfileSchema";
interface IProviderProps {
 children: ReactNode;
}

interface IEditDeleteProviderData {
 editUser: (data: IEditUserSubmit) => void;
}

export const EditDeleteUserProvider = ({ children }: IProviderProps) => {
 const editUser = async (data: IEditUserSubmit) => {
  await api
   .patch("/users", data)
   .then((resp) => {})
   .catch((err) => {
    console.error(err);
   });
 };

 return (
  <EditDeleteUserContext.Provider
   value={{
    editUser,
   }}
  >
   {children}
  </EditDeleteUserContext.Provider>
 );
};

export const EditDeleteUserContext = createContext(
 {} as IEditDeleteProviderData
);
