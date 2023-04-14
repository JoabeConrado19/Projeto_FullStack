import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
interface iSubmit {
 user: string
 password: string
}
    const formLoginSchema = yup.object().shape({
      email: yup.string().required("Nome obrigatorio").email(),
      password: yup.string().required("Senha obrigatória"),
    });
  
  