import * as yup from "yup";
export interface IEditUserSubmit {
  id?: string;
  name: string;
  email: string;
  cpf: number;
  phone: number;
  birthdate: string;
  description: string;
  profileImage: string;
}
export const formEditUserSchema = yup.object().shape({
  name: yup.string().required("nome obrigatório"),
  email: yup
    .string()
    .required("email obrigatório")
    .email("tem que ser um email válido"),
  cpf: yup
    .string()
    .required("cpf obrigatório")
    .matches(
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
      "insira um cpf válido"
    ),
  phone: yup
    .string()
    .required("celular obrigatório")
    .matches(
      /^(1[1-9]|2[12478]|3([1-5]|[7-8])|4[1-9]|5(1|[3-5])|6[1-9]|7[134579]|8[1-9]|9[1-9])9[0-9]{8}$/,
      "insira um telefone válido"
    ),
  birthdate: yup
    .string()
    .required("data de nascimento obrigatória")
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      "coloque uma data válida"
    ),
  description: yup.string().required("descrição obrigatória"),
});
