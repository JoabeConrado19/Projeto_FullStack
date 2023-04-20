import styles from "./style.module.css";
import { ButtonOne, ButtonTwo } from "../Buttons";
import { InputOne, InputTwo, TextFieldOne } from "../Input";
import {
  IRegisterSubmit,
  formRegisterSchema,
} from "../../schemas/RegisterSchema";
import { ILoginSubmit, formLoginSchema } from "../../schemas/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "@/context/RegisterLoginContext";
import Link from "next/link";
import buttonStyle from "../Buttons/styles.module.css"


export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginSubmit>({
    resolver: yupResolver(formLoginSchema),
  });

  const { loginUser } = useContext(UserContext);
  return (
    <form className={styles.baseForm} onSubmit={handleSubmit(loginUser)}>
      <h1 className={`headline-5-500 ${styles.title}`}>Login</h1>
      <div className={styles.inputsAreaOne}>
        <InputOne
          inputId="usuario"
          label="usuario"
          placeHolder="Digitar usuário"
          register={register("email")}
          type="email"
        />
        <p className={styles.errorMessage}>{errors.email?.message}</p>
        <InputOne
          placeHolder={"Digitar senha"}
          inputId="senha"
          label="senha"
          register={register("password")}
          type="password"
        />
        <p className={styles.errorMessage}>{errors.password?.message}</p>
      </div>
      <div className={styles.buttonsAreaOne}>
        <p className={`${styles.passwordWarning} body-2-500`}>
          Esqueci minha senha
        </p>
        <ButtonOne buttonType={"submit"}>Entrar</ButtonOne>
        <p className={`${styles.acountWarningOne} body-2-400`}>
          Ainda não possui conta
        </p>
        <Link className={styles.link} href={"register"}>
        <ButtonTwo buttonType={"button"}>Cadastrar</ButtonTwo>
        </Link>
        
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

  const { registerUser, setUserType, userType } = useContext(UserContext);

  return (
    <form className={styles.baseForm} onSubmit={handleSubmit(registerUser)}>
      <h1 className={`headline-5-500 ${styles.title}`}>Cadastro</h1>
      <p className={`body-2-500 ${styles.subTitle}`}>Infomações pessoais</p>
      <div className={styles.inputsAreaOne}>
        <InputOne
          inputId="nome"
          label="Nome"
          placeHolder="Ex: Samuel Leão"
          register={register("name")}
          type="text"
        />
        <p className={styles.errorMessage}>{errors.name?.message}</p>
        <InputOne
          placeHolder={"Ex: samuel@kenzie.com.br"}
          inputId="email"
          label="Email"
          register={register("email")}
          type="text"
        />
        <p className={styles.errorMessage}>{errors.email?.message}</p>
        <InputOne
          placeHolder={"Ex: 000.000.000-00"}
          inputId="cpf"
          label="CPF"
          register={register("cpf")}
          type="text"
        />
        <p className={styles.errorMessage}>{errors.cpf?.message}</p>
        <InputOne
          placeHolder={"(DDD) 90000-0000"}
          inputId="celular"
          label="Celular"
          register={register("phone")}
          type="text"
        />
        <p className={styles.errorMessage}>{errors.phone?.message}</p>
        <InputOne
          placeHolder={"00/00/00"}
          inputId="Data de nascimento"
          label="Data nascimento"
          register={register("birthdate")}
          type="text"
        />
        <p className={styles.errorMessage}>{errors.birthdate?.message}</p>
        <InputOne
          placeHolder={"Digitar descrição"}
          inputId="Descrição"
          label="Descrição"
          register={register("description")}
          type="text"
        />

         
        <p className={styles.errorMessage}>{errors.description?.message}</p>
        <p className="body-2-500">Infomações de endereço</p>
        <InputOne
          placeHolder={"00000.000"}
          inputId="cep"
          label="CEP"
          register={register("address.cep")}
          type="text"
        />
        <p className={styles.errorMessage}>{errors.address?.cep?.message}</p>
        <div className={styles.inputsAreaTwo}>
          <InputTwo
            placeHolder={"Digitar Estado"}
            inputId="estado"
            label="Estado"
            register={register("address.state")}
            type="text"
          />
          
          <InputTwo
            placeHolder={"Digitar cidade"}
            inputId="cidade"
            label="Cidade"
            register={register("address.city")}
            type="text"
          />
        </div>
        <p className={styles.errorMessage}>
            {errors.address?.state?.message}
          </p>
          <p className={styles.errorMessage}>{errors.address?.city?.message}</p>
        <InputOne
          placeHolder={"Digitar rua"}
          inputId="rua"
          label="Rua"
          register={register("address.street")}
          type="text"
        />
        <p className={styles.errorMessage}>{errors.address?.street?.message}</p>
        <div className={styles.inputsAreaTwo}>
          <InputTwo
            placeHolder={"Digitar número"}
            inputId="número"
            label="Número"
            register={register("address.number")}
            type="text"
          />
          <InputTwo
            placeHolder={"Ex: apart 307"}
            inputId="complemento"
            label="Complemento"
            register={register("address.complement")}
            type="text"
          />
          <p className={styles.errorMessage}>
            {errors.address?.complement?.message}
          </p>
        </div>
        <p className={styles.errorMessage}>
            {errors.address?.number?.message}
          </p>
        <p className={`${styles.acountWarningTwo} body-2-500`}>Tipo de conta</p>
        <div className={styles.buttonsAreaTwo}>
          <button type="button"onClick={() => {setUserType("Comprador")}} className={buttonStyle.registerButton}>
            Comprador
          </button>
          <button type="button"onClick={() => {setUserType("Anunciante")}} className={buttonStyle.registerButton}>
            Anunciante
          </button>
        </div>
        <p className={styles.errorMessage}>{errors.accountType?.message}</p>
        <InputOne
          placeHolder={"Digitar senha"}
          inputId="senha"
          label="Senha"
          register={register("password")}
          type="password"
        />
        <p className={styles.errorMessage}>{errors.password?.message}</p>
        <InputOne
          placeHolder={"Digitar senha"}
          inputId="confirmar"
          label="Confirmar Senha"
          register={register("passwordConfirmation")}
          type="password"
        />
        <p className={styles.errorMessage}>
          {errors.passwordConfirmation?.message}
        </p>
        <ButtonOne buttonType={"submit"}>Finalizar cadastro</ButtonOne>
      </div>
    </form>
  );
};
