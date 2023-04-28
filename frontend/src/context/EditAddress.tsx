import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import api from "../services/api";
import { IEditAdressSubmit } from "../schemas/editAdressSchema";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";

interface IProviderProps {
  children: ReactNode;
}

interface IEditAdressRegisterProviderData {
  editAdress: (data: IEditAdressSubmit) => void;
}

export const EditAdressProvider = ({ children }: IProviderProps) => {
  const router = useRouter();

  const editAdress = async (data: IEditAdressSubmit) => {
    console.log(data);
    // await api
    //   .patch("/users", data)
    //   .then((resp) => {
    //     console.log(resp.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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

export const EditAdressContext = createContext(
  {} as IEditAdressRegisterProviderData
);
