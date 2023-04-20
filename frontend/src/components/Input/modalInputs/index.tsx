import {
  SelectHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import styles from "./styled.module.css";
import { UseFormRegister } from "react-hook-form";

interface IInputElement extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string;
  label: string;
  register: UseFormRegister<any>;
  registerkey: string;
}

export const InputOne = ({
  inputId,
  label,
  register,
  registerkey,
  ...rest
}: IInputElement) => {
  return (
    <div className={styles.inputContainer}>
      <label className={`${styles.label} input-label`} htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={`${styles.input}  input-placeholder`}
        {...register(registerkey)}
        {...rest}
      />
    </div>
  );
};

export const InputTwo = ({
  inputId,
  label,
  register,
  registerkey,
  ...rest
}: IInputElement) => {
  return (
    <div className={styles.inputContainer}>
      <label className={`${styles.label} input-label`} htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={`${styles.input} input-placeholder`}
        {...register}
      />
    </div>
  );
};

interface ISelectInput extends SelectHTMLAttributes<HTMLSelectElement> {
  inputId: string;
  label: string;
  register: UseFormRegister<any>;
  registerkey: string;
  options: any;
}

export const SelectInput = ({
  inputId,
  label,
  options,
  register,
  registerkey,
  ...rest
}: ISelectInput) => {
  return (
    <div className={styles.inputContainer}>
      <label className={`${styles.label} input-label`} htmlFor={inputId}>
        {label}
      </label>
      <select
        id={inputId}
        {...register(registerkey)}
        {...rest}
        className={`${styles.inputOne} ${styles.selectInput} input-placeholder`}
      >
        {
          <>
            <option value="" disabled selected>
              Selecione uma opção
            </option>
            {options?.map((elem: { id: string; label: string }) => {
              return (
                <>
                  <option key={elem.id} value={elem.id}>
                    {elem.label}
                  </option>
                </>
              );
            })}
          </>
        }
      </select>
    </div>
  );
};

interface ITextAreaInput extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputId: string;
  label: string;
  register: UseFormRegister<any>;
  registerkey: string;
}

export const TextAreaInput = ({
  inputId,
  label,
  register,
  registerkey,
  ...rest
}: ITextAreaInput) => {
  return (
    <div className={styles.inputContainer}>
      <label className={`${styles.label} input-label`} htmlFor={inputId}>
        {label}
      </label>
      <textarea
        id={inputId}
        {...register(registerkey)}
        {...rest}
        className={`${styles.inputOne} ${styles.textArea} input-placeholder`}
      ></textarea>
    </div>
  );
};
