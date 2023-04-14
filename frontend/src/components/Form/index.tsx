import styles from "./style.module.css";
import { TextField } from "@mui/material";
import { ButtonOne, ButtonTwo } from "../Buttons";
import {InputOne, InputTwo} from "../Input";

export const LoginForm = () => {
  return (
    <form className={styles.baseForm}>
      <h1 className={styles.mainTitle}>Login</h1>
      <div className={styles.inputsAreaOne}>
        <InputOne
          inputId="usuario"
          label="usuario"
          placeHolder="Digitar usuário"
        />
        <InputOne placeHolder={"Digitar senha"} inputId="senha" label="senha" />
      </div>
      <div className={styles.buttonsAreaOne}>
        <p className={`${styles.passwordWarning} body-2-500`}>Esqueci minha senha</p>
        <ButtonOne>Entrar</ButtonOne>
        <p className={`${styles.acountWarningOne} body-2-400`}>Ainda não possui conta</p>
        <ButtonTwo>Cadastrar</ButtonTwo>
      </div>
    </form>
  );
};

export const RegisterForm = () => {
  return (
    <form className={styles.baseForm}>
      <h1 className={styles.mainTitle}>Registro</h1>
      <p className="body-2-500">Infomações pessoais</p>
      <div className={styles.inputsAreaOne}>
        <InputOne
          inputId="nome"
          label="Nome"
          placeHolder="Ex: Samuel Leão"
        />
        <InputOne placeHolder={"Ex: samuel@kenzie.com.br"} inputId="email" label="Email" />
        <InputOne placeHolder={"000.000.000-00"} inputId="cpf" label="CPF" />
        <InputOne placeHolder={"Digitar senha"} inputId="celular" label="Celular" />
        <InputOne placeHolder={"(DDD) 90000-0000"} inputId="Descrição" label="Descrição" />
        <InputOne placeHolder={"00/00/00"} inputId="Data de nascimento" label="data nascimento" />
        <InputOne placeHolder={"Digitar descrição"} inputId="Descrição" label="Descrição" />
        <p className="body-2-500">Infomações de endereço</p>
        <InputOne placeHolder={"00000.000"} inputId="cep" label="CEP" />
        <div className={styles.inputsAreaTwo}>
        <InputTwo placeHolder={"Digitar Estado"} inputId="estado" label="Estado" />
        <InputTwo placeHolder={"Digitar cidade"} inputId="cidade" label="Cidade" />
        </div>
        <InputOne placeHolder={"Digitar rua"} inputId="rua" label="Rua" />
        <div className={styles.inputsAreaTwo}>
        <InputTwo placeHolder={"Digitar número"} inputId="número" label="Número" />
        <InputTwo placeHolder={"Ex: apart 307"} inputId="complemento" label="Complemento" />
        </div>
        <p className={`${styles.acountWarningTwo} body-2-500`}>Tipo de conta</p>
        <div className={styles.buttonsAreaTwo}>
        <ButtonOne>Comprador</ButtonOne>
        <ButtonTwo>Anunciante</ButtonTwo>
        </div>
        <InputOne placeHolder={"Digitar senha"} inputId="senha" label="Senha" />
        <InputOne placeHolder={"Digitar senha"} inputId="confirmar" label="Confirmar Senha" />
        <ButtonOne>Comprador</ButtonOne>
        
      </div>
    </form>
  );
}
