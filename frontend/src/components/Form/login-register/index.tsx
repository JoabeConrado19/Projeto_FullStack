import Link from "next/link";

import { formRegisterSchema } from "../../../schemas/RegisterSchema";
import { formLoginSchema } from "../../../schemas/LoginSchema";
import { ILoginSubmit, IRegisterSubmit } from "@/interfaces/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "@/context/RegisterLoginContext";

import styles from "./style.module.css";

import { ButtonComponent } from "@/components/Buttons";
import buttonStyle from "@/components/Buttons/styles.module.css";
import { InputComponent, TextAreaInputComponent } from "@/components/Input";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal";
import LoginErrorModal from "@/components/Modals/LoginError";

export const LoginForm = () => {
 const [showForgotPassModal, setShowForgotPassModal] = useState<boolean>(false);

 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<ILoginSubmit>({
  resolver: yupResolver(formLoginSchema),
 });

 const { loginUser, loginError, setLoginError } = useContext(UserContext);

 return (
  <>
   <form className={styles.base_form} onSubmit={handleSubmit(loginUser)}>
    <h2 className={`headline-5-500 ${styles.title}`}>Login</h2>
    <div>
     <InputComponent
      inputId="user_email"
      label="Email"
      placeholder="Digitar email"
      register={register("email")}
      type="email"
      errorMessage={errors.email?.message}
     />
     <InputComponent
      placeholder={"Digitar senha"}
      inputId="user_password"
      label="Senha"
      register={register("password")}
      type="password"
      errorMessage={errors.password?.message}
     />
    </div>
    <div>
     <button
      type="button"
      className={`body-2-500 ${buttonStyle.no_style_button} ${styles.forgot_password}`}
      onClick={() => {
       setShowForgotPassModal((prevState) => !prevState);
      }}
     >
      Esqueci minha senha
     </button>
     <ButtonComponent
      type={"submit"}
      className={buttonStyle.brand1_white_button}
     >
      Entrar
     </ButtonComponent>
     <p className={`${styles.centered_text} body-2-400`}>
      Ainda não possui conta?
     </p>
     <Link className={styles.link} href={"/register"}>
      <ButtonComponent type={"button"}>Cadastrar</ButtonComponent>
     </Link>
    </div>
   </form>
   {showForgotPassModal ? (
    <ForgotPasswordModal closeModalFunc={setShowForgotPassModal} />
   ) : null}
   {loginError ? <LoginErrorModal /> : null}
  </>
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
  <>
   <form className={styles.base_form} onSubmit={handleSubmit(registerUser)}>
    <h2 className={`headline-5-500 ${styles.title}`}>Cadastro</h2>
    <p className={`body-1-600`}>Infomações pessoais</p>
    <div className={styles.inputs_area_one}>
     <InputComponent
      inputId="nome"
      label="Nome"
      placeholder="Ex: Samuel Leão"
      register={register("name")}
      type="text"
      errorMessage={errors.name?.message}
     />
     <InputComponent
      inputId="email"
      label="Email"
      placeholder={"Ex: samuel@kenzie.com.br"}
      register={register("email")}
      type="text"
      errorMessage={errors.email?.message}
     />
     <InputComponent
      inputId="cpf"
      label="CPF"
      placeholder={"Ex: 000.000.000-00"}
      register={register("cpf")}
      type="text"
      errorMessage={errors.cpf?.message}
     />
     <InputComponent
      inputId="celular"
      label="Celular"
      placeholder={"(DDD) 90000-0000"}
      register={register("phone")}
      type="text"
      errorMessage={errors.phone?.message}
     />
     <InputComponent
      inputId="Data de nascimento"
      label="Data nascimento"
      placeholder={"00/00/00"}
      register={register("birthdate")}
      type="text"
      errorMessage={errors.birthdate?.message}
     />
     <TextAreaInputComponent
      inputId="Descrição"
      label="Descrição"
      placeholder={"Digitar descrição"}
      register={register("description")}
      errorMessage={errors.description?.message}
     />
     <p className="body-1-600">Infomações de endereço</p>
     <InputComponent
      inputId="cep"
      label="CEP"
      placeholder={"00000.000"}
      register={register("address.cep")}
      type="text"
      errorMessage={errors.address?.cep?.message}
     />
     <div className={styles.inputsAreaTwo}>
      <InputComponent
       inputId="estado"
       label="Estado"
       placeholder={"Digitar Estado"}
       register={register("address.state")}
       type="text"
       errorMessage={errors.address?.state?.message}
      />
      <InputComponent
       inputId="cidade"
       label="Cidade"
       placeholder={"Digitar cidade"}
       register={register("address.city")}
       type="text"
       errorMessage={errors.address?.city?.message}
      />
     </div>
     <InputComponent
      inputId="rua"
      label="Rua"
      placeholder={"Digitar rua"}
      register={register("address.street")}
      type="text"
      errorMessage={errors.address?.street?.message}
     />
     <div className={styles.inputs_area_two}>
      <InputComponent
       inputId="número"
       label="Número"
       placeholder={"Digitar número"}
       register={register("address.number")}
       type="text"
       errorMessage={errors.address?.number?.message}
      />
      <InputComponent
       inputId="complemento"
       label="Complemento"
       placeholder={"Ex: apart 307"}
       register={register("address.complement")}
       type="text"
       errorMessage={errors.address?.complement?.message}
      />
     </div>
     <p className={`body-1-600`}>Tipo de conta</p>
     <div className={styles.buttons_area_two}>
      <ButtonComponent
       type="button"
       onClick={() => {
        setUserType("Comprador");
       }}
       className={`${
        userType === "Comprador" ? buttonStyle.brand1_white_button : ""
       }`}
      >
       Comprador
      </ButtonComponent>
      <ButtonComponent
       type="button"
       onClick={() => {
        setUserType("Anunciante");
       }}
       className={`${
        userType === "Anunciante" ? buttonStyle.brand1_white_button : ""
       }`}
      >
       Anunciante
      </ButtonComponent>
     </div>
     <InputComponent
      inputId="senha"
      label="Senha"
      placeholder={"Digitar senha"}
      register={register("password")}
      type="password"
      errorMessage={errors.password?.message}
     />
     <InputComponent
      inputId="confirmar"
      label="Confirmar Senha"
      placeholder={"Digitar senha"}
      register={register("passwordConfirmation")}
      type="password"
      errorMessage={errors.passwordConfirmation?.message}
     />
     <ButtonComponent
      type={"submit"}
      className={buttonStyle.brand1_white_button}
     >
      Finalizar cadastro
     </ButtonComponent>
    </div>
   </form>
  </>
 );
};
