import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
    email: yup.string().required("Informe um email.").email("Informe um email válido.")
})