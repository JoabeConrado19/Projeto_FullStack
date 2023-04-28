import { LoginForm } from "@/components/Form/login-register";
import HeaderComponent from "@/components/Header/index";
import FooterComponent from "@/components/Footer";

import style from "@/styles/login_register_page/index.module.css";

const LoginPage = () => {
  return (
    <>
      <HeaderComponent />
      <div className={style.page_body}>
        <LoginForm />
      </div>
      <FooterComponent />
    </>
  );
};

export default LoginPage;
