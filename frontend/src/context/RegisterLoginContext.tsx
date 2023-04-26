import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import api from "../services/api";
import { IRegisterSubmit } from "../schemas/registerSchema";
import { ILoginSubmit } from "../schemas/loginSchema";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";

interface IProviderProps {
  children: ReactNode;
}

interface IRegisterProviderData {
  registerUser: (data: IRegisterSubmit) => void;
  loginUser: (data: ILoginSubmit) => void;
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
  sucessModal:boolean;
  setSucessModal:React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterUserProvider = ({ children }: IProviderProps) => {
  const router = useRouter();
  const [userType, setUserType] = useState<string>("Comprador");
  const [sucessModal, setSucessModal] = useState<boolean>(false)

  const registerUser = async (data: IRegisterSubmit) => {
    const { passwordConfirmation, ...newBody } = data;
    newBody.accountType = userType;
    newBody.profileImage = "pedddrof";
    await api
      .post("/users", newBody)
      .then((resp) => {
        setSucessModal(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = (data: ILoginSubmit) => {
    api
      .post("/login", data)
      .then((resp) => {
        setCookie(null, "token", resp.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
        const token = parseCookies().token;
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
        userType,
        setUserType,
        loginUser,
        registerUser,
        sucessModal,
        setSucessModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext({} as IRegisterProviderData);
