import React from "react";

import style from "./style.module.css";

interface IDetailContainerComponent {
 children: React.ReactNode;
 containerPadding?: string;
 customClassName?: string;
}

export default function DetailContainerComponent({
 children,
 containerPadding = "16px",
 customClassName,
}: IDetailContainerComponent) {
 return (
  <div
   className={
    customClassName
     ? `${style.detail_container} ${customClassName}`
     : style.detail_container
   }
   style={{
    padding: `${containerPadding}`,
   }}
  >
   {children}
  </div>
 );
}
