import styled from "./styles.module.css";
import { IButton } from "@/interfaces/components/button";

export const ButtonComponent = ({ children, ...rest }: IButton) => {
  return (
    <button
      {...rest}
      className={` ${styled.button_base} ${
        rest.className ? rest.className : ""
      }`}
    >
      {children}
    </button>
  );
};
