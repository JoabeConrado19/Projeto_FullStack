import { LoginForm, RegisterForm } from "@/components/Form";
import styles from "../components/Form/style.module.css";
import HeaderComponent from "../components/Header/index";
const LoginPage = () => {
  return (
    <>
      <HeaderComponent />
      <section className={styles.BackgroundOne}>
        <LoginForm />
      </section>
    </>
  );
};

export default LoginPage;
