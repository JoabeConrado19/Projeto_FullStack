import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import api from "../services/api";
import { IEditUserSubmit } from "../schemas/editProfileSchema";
import { ILoginSubmit } from "../schemas/loginSchema";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";

interface IProviderProps {
  children: ReactNode;
}

interface IEditDeleteProviderData {
  editUser: (data: IEditUserSubmit) => void;
}

export const EditDeleteUserProvider = ({ children }: IProviderProps) => {
  const router = useRouter();

  const editUser = async (data: IEditUserSubmit) => {
    data.profileImage = "pedddrof";
    await api
      .patch("/users", data)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
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

export const EditDeleteUserContext = createContext({} as IEditDeleteProviderData);
