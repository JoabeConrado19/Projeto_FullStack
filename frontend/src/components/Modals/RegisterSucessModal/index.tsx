import styles from "./style.module.css";
import buttonStyle from "@/components/Buttons/styles.module.css";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/RegisterLoginContext";
import ModalBase from "../ModalBase";
import { ButtonComponent } from "@/components/Buttons";
const RegisterSucessModal = () => {
 const { setSucessModal } = useContext(UserContext);

 return (
  <ModalBase modalTitle="Sucesso" closeModal={setSucessModal}>
   <div className={styles.sucessModelDivTwo}>
    <strong className={`headline-7-500 ${styles.sucessModelTitle} `}>
     Sua conta foi criada com sucesso!
    </strong>
    <p className={`body-1-400 ${styles.sucessModelMesage} `}>
     Agora você poderá ver seus negócios crescendo em grande escala
    </p>
    <Link href={"/login"}>
     <ButtonComponent className={buttonStyle.brand1_white_button}>
      Ir para Login
     </ButtonComponent>
    </Link>
   </div>
  </ModalBase>
 );
};
export default RegisterSucessModal;
