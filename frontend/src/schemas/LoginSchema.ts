import * as yup from "yup";
export const formLoginSchema = yup.object().shape({
  email: yup.string().required("Nome obrigatorio").email(),
  password: yup.string().required("Senha obrigatória"),
});
