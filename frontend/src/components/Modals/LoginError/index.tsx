import styles from "./style.module.css";
import buttonStyle from "@/components/Buttons/styles.module.css";
import { useContext } from "react";
import { UserContext } from "@/context/RegisterLoginContext";
import ModalBase from "../ModalBase";
import { ButtonComponent } from "@/components/Buttons";

export default function LoginErrorModal() {
 const { setLoginError } = useContext(UserContext);

 return (
  <ModalBase modalTitle="Login error" closeModal={setLoginError}>
   <p>Email ou senha errado</p>
   <div className={styles.login_error_modal}>
    <ButtonComponent
     className={buttonStyle.brand1_white_button}
     onClick={() => {
      setLoginError((prevState) => !prevState);
     }}
    >
     Ok
    </ButtonComponent>
   </div>
  </ModalBase>
 );
}
