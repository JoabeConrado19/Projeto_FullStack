import styles from "./style.module.css";
import { TextField } from "@mui/material";
import { ButtonOne, ButtonTwo } from "../Buttons";
import { InputOne } from "../Input/modalInputs";
import {
  IRegisterSubmit,
  formRegisterSchema,
} from "../../schemas/RegisterSchema";
import { ILoginSubmit, formLoginSchema } from "../../schemas/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "@/context/RegisterContext";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginSubmit>({
    resolver: yupResolver(formLoginSchema),
  });

  return (
    <form className={styles.baseForm}>
      <h1 className="headline-5-500">Login</h1>
      <div className={styles.inputsAreaOne}>
        <InputOne
          inputId="usuario"
          label="Usuário"
          placeholder="Digitar usuário"
          register={register("email")}
          errorMessage={errors.email && errors.email.message}
        />
        <InputOne
          inputId="senha"
          label="Senha"
          placeholder={"Digitar senha"}
          register={register("password")}
          errorMessage={errors.password && errors.password.message}
        />
      </div>
      <div className={styles.buttonsAreaOne}>
        <p className={`${styles.passwordWarning} body-2-500`}>
          Esqueci minha senha
        </p>
        <ButtonOne>Entrar</ButtonOne>
        <p className={`${styles.acountWarningOne} body-2-400`}>
          Ainda não possui conta
        </p>
        <ButtonTwo>Cadastrar</ButtonTwo>
      </div>
    </form>
  );
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterSubmit>({
    resolver: yupResolver(formRegisterSchema),
  });

  const { registerUser } = useContext(UserContext);

  return (
    <form className={styles.baseForm} onSubmit={handleSubmit(registerUser)}>
      <h1 className="headline-5-500">Registro</h1>
      <p className="body-2-500">Infomações pessoais</p>
      <div className={styles.inputsAreaOne}>
        <InputOne
          inputId="nome"
          label="Nome"
          placeHolder="Ex: Samuel Leão"
          register={register("name")}
        />
        <p className={styles.errorMessage}>{errors.name?.message}</p>
        <InputOne
          placeHolder={"Ex: samuel@kenzie.com.br"}
          inputId="email"
          label="Email"
          register={register("email")}
        />
        <p className={styles.errorMessage}>{errors.email?.message}</p>
        <InputOne
          placeHolder={"Ex: 02896500510"}
          inputId="cpf"
          label="CPF"
          register={register("cpf")}
        />
        <p className={styles.errorMessage}>{errors.cpf?.message}</p>
        <InputOne
          placeHolder={"(DDD) 90000-0000"}
          inputId="celular"
          label="Celular"
          register={register("phone")}
        />
        <p className={styles.errorMessage}>{errors.phone?.message}</p>
        <InputOne
          placeHolder={"00/00/00"}
          inputId="Data de nascimento"
          label="data nascimento"
          register={register("date")}
        />
        <p className={styles.errorMessage}>{errors.date?.message}</p>
        <InputOne
          placeHolder={"Digitar descrição"}
          inputId="Descrição"
          label="Descrição"
          register={register("description")}
        />
        <p className={styles.errorMessage}>{errors.description?.message}</p>
        <p className="body-2-500">Infomações de endereço</p>
        <InputOne
          placeHolder={"00000.000"}
          inputId="cep"
          label="CEP"
          register={register("cep")}
        />
        <p className={styles.errorMessage}>{errors.cep?.message}</p>
        <div className={styles.inputsAreaTwo}>
          <InputTwo
            placeHolder={"Digitar Estado"}
            inputId="estado"
            label="Estado"
            register={register("state")}
          />
          <p className={styles.errorMessage}>{errors.state?.message}</p>
          <InputTwo
            placeHolder={"Digitar cidade"}
            inputId="cidade"
            label="Cidade"
            register={register("city")}
          />
          <p className={styles.errorMessage}>{errors.city?.message}</p>
        </div>
        <InputOne
          placeHolder={"Digitar rua"}
          inputId="rua"
          label="Rua"
          register={register("street")}
        />
        <p className={styles.errorMessage}>{errors.street?.message}</p>
        <div className={styles.inputsAreaTwo}>
          <InputTwo
            placeHolder={"Digitar número"}
            inputId="número"
            label="Número"
            register={register("number")}
          />
          <p className={styles.errorMessage}>{errors.number?.message}</p>
          <InputTwo
            placeHolder={"Ex: apart 307"}
            inputId="complemento"
            label="Complemento"
            register={register("complement")}
          />
          <p className={styles.errorMessage}>{errors.complement?.message}</p>
        </div>
        <p className={`${styles.acountWarningTwo} body-2-500`}>Tipo de conta</p>
        <div className={styles.buttonsAreaTwo}>
          <ButtonOne>Comprador</ButtonOne>
          <ButtonTwo>Anunciante</ButtonTwo>
        </div>
        <InputOne
          placeholder={"Digitar senha"}
          inputId="senha"
          label="Senha"
          register={register("password")}
        />
        <p className={styles.errorMessage}>{errors.password?.message}</p>
        <InputOne
          placeholder={"Digitar senha"}
          inputId="confirmar"
          label="Confirmar Senha"
          register={register("passwordConfirmation")}
        />
        <p className={styles.errorMessage}>
          {errors.passwordConfirmation?.message}
        </p>
        <ButtonOne>Finalizar cadastro</ButtonOne>
      </div>
    </form>
  );
};
