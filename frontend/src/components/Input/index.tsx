import styles from "./styled.module.css";


interface IProps {
  placeHolder: string;
  inputId: string;
  label: string;
  register:{name:string}
}

export const InputOne = ({ placeHolder, inputId, label, register }: IProps) => {
  
  return (
    <div className={styles.inputDivOne}>
      <label className={`${styles.labelOne} input-label`} htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        placeholder={placeHolder}
        className={styles.inputOne}
        {...register}
      />
    </div>
  );
};

export const InputTwo = ({ placeHolder, inputId, label, register }: IProps) => {
  return (
    <div className={styles.inputDivOne}>
      <label className={`${styles.labelOne} input-label`} htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        placeholder={placeHolder}
        className={styles.inputTwo}
        {...register}
      />
    </div>
  );
};
