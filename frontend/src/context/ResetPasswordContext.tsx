import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import api from "../services/api";
import { IPasswordReset } from "../interfaces/user";
import { useRouter } from "next/router";
interface IProviderProps {
  children: ReactNode;
}
interface IResetPasswordProviderData {
  resetPassword: (data: IPasswordReset) => void;
}
export const ResetPasswordProvider = ({ children }: IProviderProps) => {
  const router = useRouter();
  const resetPassword = async (data: IPasswordReset) => {
    const pid = router.query;

    const requestData = {
      password: data.password
    }
    
    await api
      .patch(`/users/resetPassword/${pid.id}`, requestData)
      .then((resp) => {
        router.push("/login")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ResetPasswordContext.Provider
      value={{
        resetPassword,
      }}
    >
      {children}
    </ResetPasswordContext.Provider>
  );
};
export const ResetPasswordContext = createContext(
  {} as IResetPasswordProviderData
);
