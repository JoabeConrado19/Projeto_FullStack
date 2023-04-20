import { RegisterForm } from "@/components/Form";
import styles from "../components/Form/style.module.css";
import HeaderComponent from "../components/Header/index";
import FooterComponent from "@/components/Footer";

const RegisterPage = () => {
  return (
    <>
      <HeaderComponent />
      <section className={styles.BackgroundOne}>
        <RegisterForm />
      </section>
      <FooterComponent className={styles.footerLoginRegister}/>
    </>
  );
};

export default RegisterPage;
