import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./styled.module.css";

interface IProps {
  placeHolder: string;
  inputId: string;
  label: string;
}

export const InputOne = ({ placeHolder, inputId, label }: IProps) => {
  return (
    <div className={styles.inputDivOne}>
      <label htmlFor={inputId}>{label}</label>
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
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        placeholder={placeHolder}
        className={styles.inputTwo}
      />
    </div>
  );
};
