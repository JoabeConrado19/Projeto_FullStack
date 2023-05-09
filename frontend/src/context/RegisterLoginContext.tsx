import { createContext, ReactNode, useState } from "react";
import api from "@/services/api";
import { ILoginSubmit, IRegisterSubmit } from "@/interfaces/user";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";

export interface IProviderProps {
 children: ReactNode;
}
interface IRegisterProviderData {
 registerUser: (data: IRegisterSubmit) => void;
 loginUser: (data: ILoginSubmit) => void;
 userType: string;
 setUserType: React.Dispatch<React.SetStateAction<string>>;
 sucessModal: boolean;
 setSucessModal: React.Dispatch<React.SetStateAction<boolean>>;
 loginError: boolean;
 setLoginError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as IRegisterProviderData);

export const RegisterUserProvider = ({ children }: IProviderProps) => {
 const router = useRouter();
 const [userType, setUserType] = useState<string>("Comprador");
 const [sucessModal, setSucessModal] = useState<boolean>(false);
 const [loginError, setLoginError] = useState<boolean>(false);

 const registerUser = async (data: IRegisterSubmit) => {
  const { passwordConfirmation, ...newBody } = data;
  newBody.accountType = userType;

  await api
   .post("/users", newBody)
   .then((resp) => {
    setSucessModal(true);
   })
   .catch((err) => {
    console.error(err);
   });
 };

 const loginUser = (data: ILoginSubmit) => {
  api
   .post("/login", data)
   .then((resp) => {
    setCookie(null, "tokenMotorsShop", resp.data.token, {
     maxAge: 60 * 30,
     path: "/",
    });
    const token = parseCookies().tokenMotorsShop;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    router.push("/");
   })
   .catch((err) => {
    setLoginError(true);
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
    setSucessModal,
    loginError,
    setLoginError,
   }}
  >
   {children}
  </UserContext.Provider>
 );
};
