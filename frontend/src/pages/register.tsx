import { RegisterForm } from "@/components/Form/login-register";
import styles from "../components/Form/login-register/style.module.css";
import HeaderComponent from "../components/Header/index";
import FooterComponent from "@/components/Footer";
import RegisterSucessModal from "@/components/Modals/RegisterSucessModal";
import modalStyles from "../components/Modals/RegisterSucessModal/style.module.css"
import { UserContext } from "@/context/RegisterLoginContext";
import { useContext } from "react";

const RegisterPage = () => {
  const { sucessModal } = useContext(UserContext);

  return (
    <>
      <HeaderComponent />
      <section className={styles.BackgroundOne}>
        <RegisterForm />
        <FooterComponent
          styles={{
            width: "100%",
          }}
        />
      </section>
      {sucessModal?(<section className={modalStyles.backGroundDark}>
      <RegisterSucessModal/>
      </section>): null}
    </>
  );
};

export default RegisterPage;
