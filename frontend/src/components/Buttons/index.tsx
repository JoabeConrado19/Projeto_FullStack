import {
    ButtonHTMLAttributes
  } from "react";
import styled from "./styles.module.css"
import { useContext } from "react";

import { UserContext } from "@/context/RegisterLoginContext";
interface IProps {
  children: string;
  click?: string;
  buttonType?: any;
}
export const ButtonOne = ({ children, click, buttonType }: IProps) => {
  const { setUserType, userType,  } = useContext(UserContext);
  return (
    <button
      type={buttonType!}
      className={styled.buttonConfirm}>
      {children}
    </button>
  );
};

export const ButtonTwo = ({children}:IProps ) => {
    return (
        <button className={styled.registerButton}>{children}</button>
    )
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const ButtonComponent = ({children, ...rest}: IButton) => {
    return (
        <button {...rest} className={` ${styled.button_base} ${rest.className ? rest.className : ""}`}>{children}</button>
    )
}
