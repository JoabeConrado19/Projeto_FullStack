import { LoginForm } from "@/components/Form/login-register";

import style from "@/styles/login_register_page/index.module.css";

const LoginPage = () => {
  return (
    <>
      <div className={style.page_body}>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
