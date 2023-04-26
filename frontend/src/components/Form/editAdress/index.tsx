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
      <button className={formStyles.exitButton}>X</button>
      <InputOne
        placeHolder={"00000.000"}
        inputId="cep"
        label="CEP"
        type="text"
        register={register("cep")}
      />
      <p className={styles.errorMessage}>{errors.cep?.message}</p>
      <div className={styles.inputsAreaTwo}>
        <InputTwo
          placeHolder={"Digitar Estado"}
          inputId="estado"
          label="Estado"
          type="text"
          register={register("state")}
        />

        <InputTwo
          placeHolder={"Digitar cidade"}
          inputId="cidade"
          label="Cidade"
          type="text"
          register={register("city")}
        />
      </div>
      <p className={styles.errorMessage}>{errors.state?.message}</p>
      <p className={styles.errorMessage}>{errors.city?.message}</p>
      <InputOne
        placeHolder={"Digitar rua"}
        inputId="rua"
        label="Rua"
        type="text"
        register={register("street")}
      />
      <p className={styles.errorMessage}>{errors.street?.message}</p>
      <div className={styles.inputsAreaTwo}>
        <InputTwo
          placeHolder={"Digitar número"}
          inputId="número"
          label="Número"
          type="text"
          register={register("number")}
        />
        <InputTwo
          placeHolder={"Ex: apart 307"}
          inputId="complemento"
          label="Complemento"
          type="text"
          register={register("complement")}
        />
      </div>
      <p className={styles.errorMessage}>{errors.complement?.message}</p>
      <p className={styles.errorMessage}>{errors.number?.message}</p>
      <div className={formStyles.buttonsAreaTwo}>
        <ButtonThree buttonType="button">Cancelar</ButtonThree>

        <button type="submit" className={buttonStyle.buttonConfirmThree}>
          Salvar alterações
        </button>
      </div>
    </form>
  );
};
