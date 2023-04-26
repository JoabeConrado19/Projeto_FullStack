import { InputOne, TextFieldOne } from "@/components/Input";
import styles from "../login-register/style.module.css";
import formStyles from "./style.module.css";
import buttonStyle from "../../Buttons/styles.module.css";
import { ButtonThree } from "@/components/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  IEditUserSubmit,
  formEditUserSchema,
} from "@/schemas/editProfileSchema";
import { useContext } from "react";
import { EditDeleteUserContext } from "@/context/EditDeleteProfile";
export const EditUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUserSubmit>({
    resolver: yupResolver(formEditUserSchema),
  });

  const { editUser } = useContext(EditDeleteUserContext);
  return (
    <form className={formStyles.baseForm} onSubmit={handleSubmit(editUser)}>
      <h3 className={`headline-7-500 ${styles.title}`}>Editar Perfil</h3>
      <p className={`body-2-500 ${styles.subTitle}`}>Informações pessoais</p>
      <InputOne
        inputId="nome"
        label="Nome"
        placeHolder="Ex: Samuel Leão"
        type="text"
        register={register("name")}
      />
      <p className={styles.errorMessage}>{errors.name?.message}</p>
      <InputOne
        placeHolder={"Ex: samuel@kenzie.com.br"}
        inputId="email"
        label="Email"
        type="text"
        register={register("email")}
      />
      <p className={styles.errorMessage}>{errors.email?.message}</p>

      <InputOne
        placeHolder={"Ex: 000.000.000-00"}
        inputId="cpf"
        label="CPF"
        type="text"
        register={register("cpf")}
      />
      <p className={styles.errorMessage}>{errors.cpf?.message}</p>
      <InputOne
        placeHolder={"(DDD) 90000-0000"}
        inputId="celular"
        label="Celular"
        type="text"
        register={register("phone")}
      />
      <p className={styles.errorMessage}>{errors.phone?.message}</p>
      <InputOne
        placeHolder={"00/00/00"}
        inputId="Data de nascimento"
        label="Data nascimento"
        type="text"
        register={register("birthdate")}
      />
      <p className={styles.errorMessage}>{errors.birthdate?.message}</p>
      <TextFieldOne
        placeHolder={"Digitar descrição"}
        inputId="Descrição"
        label="Descrição"
        type="text"
        register={register("description")}
      />
      <p className={styles.errorMessage}>{errors.description?.message}</p>
      <div className={formStyles.buttonsAreaTwo}>
        <button type="button" className={buttonStyle.buttonConfirmTwo}>
          Cancelar
        </button>

        <button type="button" className={buttonStyle.buttonDelete}>
          Excluir Perfil
        </button>

        <ButtonThree buttonType="submit">Salvar Alterações</ButtonThree>
      </div>
    </form>
  );
};
