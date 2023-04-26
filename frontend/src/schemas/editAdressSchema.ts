import * as yup from "yup";
export interface IEditAdressSubmit {
    cep: number;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
}

export const formEditAdressSchema = yup.object().shape({
  cep: yup
    .string()
    .required("endereço obrigatório")
    .matches(/\d{5}-\d{3}/, "tem que ser um cep valido"),
  state: yup.string().required("estado obrigatório"),
  city: yup.string().required("cidade obrigatória"),
  street: yup.string().required("rua obrigatória"),
  number: yup
    .number()
    .typeError("Por favor, informe um número válido")
    .required("numero obrigatório")
    .max(99999999, "deve ter no maximo 8 caracters"),
  complement: yup.string(),
});
