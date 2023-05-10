import { Dispatch, SetStateAction } from "react";
import ModalBase from "../ModalBase";
import { useForm } from "react-hook-form";
import { InputComponent } from "@/components/Input";
import { ButtonComponent } from "@/components/Buttons";
import buttonStyle from "@/components/Buttons/styles.module.css";
import styles from "./styles.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "@/schemas/forgotPasswordSchema";
import api from "@/services/api";

interface IForgotPasswordModal {
 closeModalFunc: Dispatch<SetStateAction<boolean>>;
}

export default function ForgotPasswordModal({
 closeModalFunc,
}: IForgotPasswordModal) {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  resolver: yupResolver(forgotPasswordSchema),
 });

 const forgotPasswordRequest = async (data: any) => {
  await api.post("/users/resetPassword", data).then((res) => {
   closeModalFunc((prevState) => !prevState);
  });
 };

 return (
  <ModalBase modalTitle="Esqueceu sua senha?" closeModal={closeModalFunc}>
   <div className={styles.modal_body}>
    <p className="body-2-500">
     Caso tenha esquecido sua senha, preencha o campo abaixo e verifique sua
     caixa de entrada do email para redefinir sua senha
    </p>
    <form
     onSubmit={handleSubmit(forgotPasswordRequest)}
     className={styles.form_container}
    >
     <InputComponent
      inputId="user_email"
      label="Email"
      placeholder="Insira seu email aqui"
      register={register("email")}
      errorMessage={errors.email?.message}
     />
     <div className={styles.button_container}>
      <ButtonComponent
       type="submit"
       className={buttonStyle.brand1_white_button}
      >
       Recuperar senha
      </ButtonComponent>
     </div>
    </form>
   </div>
  </ModalBase>
 );
}
