import { Button } from "@mui/material"

import style from "./style.module.css"
import buttonStyle from "@/styles/buttons.module.css"

import { Dispatch, ReactNode, SetStateAction } from "react"

interface IModalBase {
    children: ReactNode
    modalTitle: string
    closeModal: Dispatch<SetStateAction<boolean>>
}

export default function ModalBase({
    children,
    modalTitle,
    closeModal
}: IModalBase) {


    return (
        <div className={style.modal_background}>
            <div className={style.modal_container}>
                <div className={style.modal_header}>
                    <p className="headline-7-500">{modalTitle}</p>
                    <Button
                        onClick={() => {
                            closeModal((prevState) => !prevState)
                        }}
                        className={buttonStyle.modal_header_button}
                        disableRipple={true}
                    >X</Button>
                </div>
                <div className={style.modal_body}>
                    {children}
                </div>
            </div>
        </div>
    )
}