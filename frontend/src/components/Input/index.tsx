import styles from "./styled.module.css";


interface IProps {
  placeHolder: string;
  inputId: string;
  label: string;
}

export const InputOne = ({ placeHolder, inputId, label }: IProps) => {
  return (
    <div className={styles.inputDivOne}>
      <label className={`${styles.labelOne} input-label`} htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        placeholder={placeHolder}
        className={styles.inputOne}
      />
    </div>
  );
};

export const InputTwo = ({ placeHolder, inputId, label }: IProps) => {
  return (
    <div className={styles.inputDivOne}>
      <label className={`${styles.labelOne} input-label`} htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        placeholder={placeHolder}
        className={styles.inputTwo}
      />
    </div>
  );
};
