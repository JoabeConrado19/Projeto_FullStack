import { LoginForm, RegisterForm } from "@/components/Form";
import styles from "../components/Form/style.module.css";
import HeaderComponent from "../components/Header/index";
import FooterComponent from "@/components/Footer";
const LoginPage = () => {
  return (
    <>
      <HeaderComponent />
      <section className={styles.BackgroundOne}>
        <LoginForm />
        <FooterComponent styles={{
          width: "100%"
        }}/>
      </section>
    </>
  );
};

export default LoginPage;
