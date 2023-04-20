import styles from "./styled.module.css";



interface IProps {
  placeHolder: string;
  inputId: string;
  label: string;
  register:{name:string};
  type: string
}

export const InputOne = ({ placeHolder, inputId, label, register, type }: IProps) => {
  
  return (
    <div className={styles.inputDivOne}>
      <label className={`${styles.labelOne} input-label`} htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        placeholder={placeHolder}
        className={styles.inputOne}
        {...register}
        type={type}
      />
    </div>
  );
};

export const InputTwo = ({ placeHolder, inputId, label, register, type }: IProps) => {
  return (
    <div className={styles.inputDivOne}>
      <label className={`${styles.labelOne} input-label`} htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        placeholder={placeHolder}
        className={styles.inputTwo}
        {...register}
        type={type}
      />
    </div>
  );
};
