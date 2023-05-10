import {
 SelectHTMLAttributes,
 InputHTMLAttributes,
 TextareaHTMLAttributes,
} from "react";
import styles from "./styled.module.css";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface IInputElement extends InputHTMLAttributes<HTMLInputElement> {
 inputId: string;
 label: string;
 register: any;
 errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const InputComponent = ({
 inputId,
 label,
 register,
 errorMessage,
 ...rest
}: IInputElement) => {
 return (
  <div className={styles.input_container}>
   <label className={`${styles.label} input-label`} htmlFor={inputId}>
    {label}
   </label>
   <input
    id={inputId}
    className={`${styles.input}  input-placeholder`}
    {...register}
    {...rest}
   />
   {errorMessage && (
    <span className={`${styles.error_message} body-2-500`}>
     {errorMessage as React.ReactNode}
    </span>
   )}
  </div>
 );
};

interface ISelectInput extends SelectHTMLAttributes<HTMLSelectElement> {
 inputId: string;
 label: string;
 register: any;
 options: any;
 errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const SelectInputComponent = ({
 inputId,
 label,
 options,
 register,
 errorMessage,
 ...rest
}: ISelectInput) => {
 return (
  <div className={styles.input_container}>
   <label className={`${styles.label} input-label`} htmlFor={inputId}>
    {label}
   </label>
   <select
    id={inputId}
    {...register}
    {...rest}
    className={`${styles.input} ${styles.selectInput} input-placeholder`}
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
   {errorMessage && (
    <span className={`${styles.error_message} body-2-500`}>
     {errorMessage as React.ReactNode}
    </span>
   )}
  </div>
 );
};

interface ITextAreaInput extends TextareaHTMLAttributes<HTMLTextAreaElement> {
 inputId: string;
 label: string;
 register: any;
 errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const TextAreaInputComponent = ({
 inputId,
 label,
 register,
 errorMessage,
 ...rest
}: ITextAreaInput) => {
 return (
  <div className={styles.input_container}>
   <label className={`${styles.label} input-label`} htmlFor={inputId}>
    {label}
   </label>
   <textarea
    id={inputId}
    {...register}
    {...rest}
    className={`${styles.input} ${styles.textArea} input-placeholder`}
   ></textarea>
   {errorMessage && (
    <span className={`${styles.error_message} body-2-500`}>
     {errorMessage as React.ReactNode}
    </span>
   )}
  </div>
 );
};
