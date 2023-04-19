import * as yup from "yup";
export interface IRegisterSubmit {
  name: string;
  email: string;
  cpf: number;
  celphone: number;
  date: string;
  description: string;
  cep: number;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
  password: string;
  passwordConfirmation: string;
}
export const formRegisterSchema = yup.object().shape({
  name: yup.string().required("obrigatorio"),
  email: yup
    .string()
    .required("obrigatorio")
    .email("tem que ser um email válido"),
  cpf: yup.string().required("obrigatorio"),
  celphone: yup.string().required("obrigatorio"),
  date: yup.string().required("obrigatorio"),
  description: yup.string().required("obrigatorio"),
  cep: yup.string().required("obrigtório"),
  state: yup.string().required("obrigtório"),
  city: yup.string().required("obrigtório"),
  street: yup.string().required("obrigtório"),
  number: yup.number().required("obrigatorio"),
  complement: yup.string(),
  password: yup.string().required("obrigtório"),
  passwordConfirmation: yup
    .string()
    .required("obrigtório")
    .oneOf([yup.ref("password")], "as senhas devem ser as mesmas"),
});
