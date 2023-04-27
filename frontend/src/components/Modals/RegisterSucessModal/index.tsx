import styles from "./style.module.css"
import buttonStyle from "../../Buttons/styles.module.css"
import Link from "next/link"
import { useContext } from "react";
import { UserContext } from "@/context/RegisterLoginContext";
const RegisterSucessModal = () => {
    const { setSucessModal } = useContext(UserContext);
    return (
        <div className={styles.sucessModal}>
          <div className={styles.sucessModelDivOne}>
            <h3 className={`headline-7-500 ${styles.sucessModelTitle} `}>
              Sucesso!
            </h3>
            <button className={styles.exitButton} onClick={() => setSucessModal(false)}>x</button>
          </div>
          <div className={styles.sucessModelDivTwo}>
            <strong className={`headline-7-500 ${styles.sucessModelTitle} `}>
              Sua conta foi criada com sucesso!
            </strong>
            <p className={`body-1-400 ${styles.sucessModelMesage} `}>
              Agora você poderá ver seus negócios crescendo em grande escala
            </p>
            <Link  href={"login"} className={buttonStyle.buttonConfirmFour}>
              Ir para Login
            </Link>
          </div>
        </div>
    )
}
export default RegisterSucessModal