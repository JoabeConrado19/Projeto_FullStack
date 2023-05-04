import { RegisterForm } from "@/components/Form/login-register";
import style from "@/styles/login_register_page/index.module.css";
import RegisterSucessModal from "@/components/Modals/RegisterSucessModal";
import { UserContext } from "@/context/RegisterLoginContext";
import { useContext } from "react";

const RegisterPage = () => {
  const { sucessModal } = useContext(UserContext);

  return (
    <>
      <div className={style.page_body}>
        <RegisterForm />
      </div>
      {sucessModal ? <RegisterSucessModal /> : null}
    </>
  );
};

export default RegisterPage;
