import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import api from "../services/api";
import { IEditAdressSubmit } from "../schemas/editAdressSchema";
import { ILoginSubmit } from "../interfaces/user";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import { parseJwt } from "@/utils/jwt";

interface IProviderProps {
  children: ReactNode;
}

interface IEditAdressRegisterProviderData {
  editAdress: (data: IEditAdressSubmit) => void;
}

export const EditAdressProvider = ({ children }: IProviderProps) => {

  const editAdress = async (data: IEditAdressSubmit) => {
    
    const token = parseCookies().tokenMotorsShop;
    const parseTokens = parseJwt(token);
    const treatedData = {address: {...data}};
    api.defaults.headers.Authorization = `Bearer ${token}`; 
    
    await api
      .patch(`/users/${parseTokens.sub}`, treatedData)
      .then((resp) => {
        console.log(resp.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <EditAdressContext.Provider
      value={{
        editAdress,
      }}
    >
      {children}
    </EditAdressContext.Provider>
  );
};

export const EditAdressContext = createContext( {} as IEditAdressRegisterProviderData);
