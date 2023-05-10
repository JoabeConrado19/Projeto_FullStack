import { RetrivePasswordForm } from "@/components/Form/passwordRetrieve";
import style from "@/styles/login_register_page/index.module.css";

const ResetPassword = () => {
 return (
  <>
   <div className={style.page_body}>
    <RetrivePasswordForm />
   </div>
  </>
 );
};
export default ResetPassword;
