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
