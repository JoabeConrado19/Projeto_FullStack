import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { IRegisterSubmit } from "../schemas/RegisterSchema";
import { ILoginSubmit } from "../schemas/LoginSchema";
import { useRouter } from "next/router";
export const UserContext = createContext({} as IRegisterProviderData);

interface IProviderProps {
  children: ReactNode;
}

interface IRegisterProviderData {
  registerUser: (data: IRegisterSubmit) => void;
  loginUser: (data: ILoginSubmit) => void;
}

export const RegisterUserProvider = ({ children }: IProviderProps) => {
  const router = useRouter();
  const registerUser = async (data: IRegisterSubmit) => {
    const { passwordConfirmation, ...newBody } = data;
    newBody.accountType = "Vendedor"
    console.log(newBody)
    await api
      .post("/users", newBody)
      .then((resp) => {
        console.log(resp.data)
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = (data: ILoginSubmit) => {
    api
      .post("/login", data)
      .then((resp) => {
        localStorage.setItem("Token", resp.data.token);
        const token = localStorage.getItem("Token");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
