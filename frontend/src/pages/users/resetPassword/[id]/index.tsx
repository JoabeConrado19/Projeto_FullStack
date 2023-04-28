import FooterComponent from "@/components/Footer";
import { RetrivePasswordForm } from "@/components/Form/passwordRetrieve";
import HeaderComponent from "@/components/Header";
import style from "@/styles/login_register_page/index.module.css";
const ResetPassword = () => {
  return (
    <>
      <HeaderComponent />
      <div className={style.page_body}>
      <RetrivePasswordForm/>
      </div>
      <FooterComponent />
    </>
  );
};
export default ResetPassword;