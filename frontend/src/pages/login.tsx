import { LoginForm } from "@/components/Form/login-register";
import styles from "../components/Form/login-register/style.module.css";
import HeaderComponent from "../components/Header/index";
import FooterComponent from "@/components/Footer";
const LoginPage = () => {
  return (
    <>
      <HeaderComponent />
      <section className={styles.BackgroundOne}>
        <LoginForm />
        <FooterComponent
          styles={{
            width: "100%",
          }}
        />
      </section>
    </>
  );
};

export default LoginPage;
