import { ReactNode, useState } from "react";
import {
  DivInput,
  StyledInput,
  PasswordDiv,
  StyledPasswordInput,
  StyledSelectInput,
} from "./styled";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface iInputComponent {
  labelText: string;
  labelRefer: string;
  placeholder: string;
  type: string;
  registerValue: { name: string };
  errorMessage?: string | undefined;
  isDisabled?: boolean;
}

type iPasswordComponent = Omit<iInputComponent, "type">;

interface iSelectInputComponent {
  children: ReactNode;
  labelRefer: string;
  labelText: string;
  registerValue: { name: string };
}

export const InputComponent = ({
  labelText,
  labelRefer,
  placeholder,
  type,
  registerValue,
  errorMessage,
  isDisabled,
}: iInputComponent) => {
  return (
    <DivInput>
      <label htmlFor={labelRefer}>
        {labelText}
      </label>
      <StyledInput
        id={labelRefer}
        placeholder={placeholder}
        type={type}
        {...registerValue}
        className="font-regular-size"
        disabled={isDisabled}
      />
      {errorMessage && (
        <span>{errorMessage}</span>
      )}
    </DivInput>
  );
};

export const SelectInputComponent = ({
  labelText,
  labelRefer,
  registerValue,
}: iSelectInputComponent) => {
  return (
    <div>
      <label htmlFor={labelRefer}>
        {labelText}
      </label>
      <StyledSelectInput
        id={labelRefer}
        {...registerValue}
      >
        {labelText}
      </StyledSelectInput>
    </div>
  );
};

export const PasswordInputComponent = ({
  labelText,
  labelRefer,
  placeholder,
  registerValue,
  errorMessage,
}: iPasswordComponent) => {
  const [isSeeingPassword, setIsSeeingPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("password");

  const changeSeePasword = () => {
    setIsSeeingPassword(!isSeeingPassword);
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  return (
    <DivInput>
      <label htmlFor={labelRefer}>
        {labelText}
      </label>
      <PasswordDiv>
        <StyledPasswordInput
          id={labelRefer}
          placeholder={placeholder}
          type={inputType}
          {...registerValue}
        />
        <button
          type="button"
          className="see-password"
          onClick={changeSeePasword}
        >
          {isSeeingPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </PasswordDiv>
      <span>{errorMessage}</span>
    </DivInput>
  );
};
