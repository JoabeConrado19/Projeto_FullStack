import {LoginForm, RegisterForm} from "@/components/Form";
import styles from "../components/Form/style.module.css";

const LoginPage = () => {
  return (
    <section className={styles.loginBackground}>
      <LoginForm />
      <RegisterForm/>
    </section>
  );
};

export default LoginPage;
