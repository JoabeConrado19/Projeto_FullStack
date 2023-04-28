import { InputTwo, TextFieldOne, InputOne } from "@/components/Input";
import styles from "../login-register/style.module.css";
import formStyles from "./style.module.css";
import buttonStyle from "../../Buttons/styles.module.css";
import { ButtonOne, ButtonThree } from "@/components/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IEditAdressSubmit,
  formEditAdressSchema,
} from "@/schemas/editAdressSchema";
import { useContext } from "react";
import { EditAdressContext } from "@/context/EditAddress";
export const EditAdressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditAdressSubmit>({
    resolver: yupResolver(formEditAdressSchema),
  });
  const { editAdress } = useContext(EditAdressContext);


  return (
    <form className={formStyles.baseForm} onSubmit={handleSubmit(editAdress)}>
      <div className={formStyles.formAdressTitleDiv}>
      <h2 className={`headline-7-500 ${formStyles.titlesFont}`}>Editar endereço</h2>
      <button className={formStyles.exitButton} type="button">X</button>
      </div>
      <h3 className={`body-2-500 ${formStyles.AdressSubTitle}`}>Infomações de endereço</h3>
      
      <InputOne label="Senha" inputId="senha" type="password" placeHolder="Digitar senha"/>
      <div className={formStyles.buttonsAreaTwo}>
        <ButtonThree buttonType="button">Cancelar</ButtonThree>

        <button type="submit" className={buttonStyle.buttonConfirmThree}>
          Salvar alterações
        </button>
      </div>
    </form>
  );
};
