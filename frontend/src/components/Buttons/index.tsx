import {
    ButtonHTMLAttributes
  } from "react";
import styled from "./styles.module.css"
interface IProps {
    children: string
} 
export const ButtonOne = ({children}:IProps ) => {
    return (
        <button className={styled.buttonConfirm}>{children}</button>
    )
}

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