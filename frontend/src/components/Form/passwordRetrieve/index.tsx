import formStyles from "./style.module.css";
import { ButtonComponent } from "../../Buttons/index";
import ButtonStyles from "../../Buttons/styles.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { IPasswordReset } from "@/interfaces/user";
import { ResetPasswordContext } from "@/context/ResetPasswordContext";
import { passwordResetSchema } from "@/schemas/forgotPasswordSchema";
import { InputComponent } from "@/components/Input";

export const RetrivePasswordForm = () => {
 const { resetPassword } = useContext(ResetPasswordContext);
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<IPasswordReset>({
  resolver: yupResolver(passwordResetSchema),
 });

 return (
  <form className={formStyles.baseForm} onSubmit={handleSubmit(resetPassword)}>
   <div className={formStyles.formAdressTitleDiv}>
    <h2 className={`headline-7-500 ${formStyles.titlesFont}`}>
     Recuperar Senha
    </h2>
   </div>
   <h3 className={`body-2-500 ${formStyles.AdressSubTitle}`}>
    Insira sua nova senha!
   </h3>
   <InputComponent
    label="Senha"
    inputId="senha"
    placeholder="Digitar senha"
    register={register("password")}
    type="password"
   />
   <p className={formStyles.errorMessage}>{errors.password?.message}</p>
   <InputComponent
    placeholder="Confirmar senha"
    inputId="confirmar"
    label="Confirmar Senha"
    type="password"
    register={register("passwordConfirmation")}
   />
   <p className={formStyles.errorMessage}>
    {errors.passwordConfirmation?.message}
   </p>
   <div className={formStyles.buttonsAreaTwo}>
    <div>
     <ButtonComponent type="button">Cancelar</ButtonComponent>
    </div>
    <div>
     <ButtonComponent className={ButtonStyles.brand1_white_button}>
      Salvar alterações
     </ButtonComponent>
    </div>
   </div>
  </form>
 );
};
