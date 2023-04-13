import styles from "./style.module.css";
import { TextField } from "@mui/material";
import { ButtonOne, ButtonTwo } from "../Buttons";
import {InputOne} from "../Input";

export const LoginForm = () => {
  return (
    <form className={styles.baseForm}>
      <h1 className={styles.mainTitle}>Login</h1>
      <div className={styles.inputsArea}>
        <InputOne
          inputId="usuario"
          label="usuario"
          placeHolder="Digitar usuário"
        />
        <InputOne placeHolder={"Digitar senha"} inputId="senha" label="senha" />
      </div>
      <div className={styles.buttonsArea}>
        <p className={styles.passwordWarning}>Esqueci minha senha</p>
        <ButtonOne>Entrar</ButtonOne>
        <p>Ainda não possui conta</p>
        <ButtonTwo>Cadastrar</ButtonTwo>
      </div>
    </form>
  );
};

export const RegisterForm = () => {
  return (
    <form className={styles.baseForm}>
      <h1 className={styles.mainTitle}>Registro</h1>
      <div className={styles.inputsArea}>
        <InputOne
          inputId="Nome"
          label="Nome"
          placeHolder="Digitar usuário"
        />
        <InputOne placeHolder={"Digitar senha"} inputId="Email" label="Email" />
        <InputOne placeHolder={"Digitar senha"} inputId="CPF" label="CPF" />
        <InputOne placeHolder={"Digitar senha"} inputId="Celular" label="Celular" />
        <InputOne placeHolder={"Digitar senha"} inputId="Data de nascimento" label="Data de nascimento" />
        <InputOne placeHolder={"Digitar senha"} inputId="Descrição" label="Descrição" />
        <ButtonOne>Comprador</ButtonOne>
        <ButtonTwo>Anunciante</ButtonTwo>
        Butt
      </div>
    </form>
  );
}
