import { useContext } from "react";
import styled from "./styles.module.css";
import { UserContext } from "@/context/RegisterLoginContext";
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
      className={styled.buttonGray}
    >
      {children}
    </button>
  );
};