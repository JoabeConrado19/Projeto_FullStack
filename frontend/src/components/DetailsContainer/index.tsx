import React from "react"

import style from "./style.module.css"

interface IDetailContainerComponent {
    children: React.ReactNode
    containerPadding?: number
}

export default function DetailContainerComponent({
    children, 
    containerPadding = 16
}: IDetailContainerComponent) {
    return (
        <div 
            className={style.detail_container}
            style={{
                padding: `${containerPadding}px`
            }}
        >
            {children}
        </div>
    )
}