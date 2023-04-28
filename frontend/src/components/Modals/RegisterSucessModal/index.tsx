import styles from "./style.module.css";
import buttonStyle from "../../Buttons/styles.module.css";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/RegisterLoginContext";
import ModalBase from "../ModalBase";
const RegisterSucessModal = () => {
  const { setSucessModal } = useContext(UserContext);


  return (
    <ModalBase modalTitle="Sucesso" closeModal={setSucessModal} >
      
        <div className={styles.sucessModelDivOne}>
          {/* <h3 className={`headline-7-500 ${styles.sucessModelTitle} `}>
            Sucesso!
          </h3> */}
        </div>
        <div className={styles.sucessModelDivTwo}>
          <strong className={`headline-7-500 ${styles.sucessModelTitle} `}>
            Sua conta foi criada com sucesso!
          </strong>
          <p className={`body-1-400 ${styles.sucessModelMesage} `}>
            Agora você poderá ver seus negócios crescendo em grande escala
          </p>
          <Link href={"login"} className={buttonStyle.buttonConfirmFour}>
            Ir para Login
          </Link>
      </div>
    </ModalBase>
  );
};
export default RegisterSucessModal;
