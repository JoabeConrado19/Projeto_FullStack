import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .required("Informe um email.")
    .email("Informe um email válido."),
});

export const passwordResetSchema = yup.object().shape({
  password: yup.string().required("Senha obrigatória"),
  passwordConfirmation: yup
    .string()
    .required("confirmação obrigatória")
    .oneOf([yup.ref("password")], "as senhas devem ser as mesmas"),
});
