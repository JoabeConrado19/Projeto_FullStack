import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { IRegisterSubmit } from "../schemas/RegisterSchema";
import { ILoginSubmit } from "../schemas/LoginSchema";
import { useRouter } from "next/router";
import { setCookie, parseCookies} from 'nookies'


export interface IProviderProps {
  children: ReactNode;
}

interface IRegisterProviderData {
  registerUser: (data: IRegisterSubmit) => void;
  loginUser: (data: ILoginSubmit) => void;
  userType: string | null;
  setUserType: React.Dispatch<React.SetStateAction<string | null>>;
}

export const RegisterUserProvider = ({ children }: IProviderProps) => {
  const router = useRouter();
  const [userType, setUserType] = useState<string | null>(null);

  // useEffect(() => {
  //   const token = parseCookies().token;
  //   if (token) {
  //     api.defaults.headers.Authorization = `Bearer ${token}`;
  //   } else {
  //     router.push("/login");
  //   }
  // }, []);


   const registerUser = async (data: IRegisterSubmit) => {
    const { passwordConfirmation, ...newBody } = data;
    newBody.accountType = "Vendedor";
    newBody.profileImage = "pedddrof";
    await api
      .post("/users", newBody)
      .then((resp) => {
        console.log(resp.data);
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
      setCookie(null, "token", resp.data.token, {maxAge: 60*30, path: "/"})
        const token =  parseCookies().token
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext({} as IRegisterProviderData);