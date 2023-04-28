
import styled from "./styles.module.css"
import { useContext } from "react";

import { UserContext } from "@/context/RegisterLoginContext";
import { IButton } from "@/interfaces/components/button";
interface IProps {
  children: string;
  click?: string;
  buttonType?: any;
  classStyle?: string
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

export const ButtonTwo = ({ children, click, buttonType }: IProps) => {
  const { setUserType, userType } = useContext(UserContext);
  return (
    <button
      type={buttonType!}
      className={styled.registerButton}
    >
      {children}
    </button>
  );
};



export const ButtonThree = ({ children, click, buttonType,  }: IProps) => {
  return (
    <button
      type={buttonType!}
      className={`button-medium-text ${styled.buttonGray}`}
    >
      {children}
    </button>
  );
};


export const ButtonComponent = ({children, ...rest}: IButton) => {
  return (
      <button {...rest} className={` ${styled.button_base} ${rest.className ? rest.className : ""}`}>{children}</button>
  )
}