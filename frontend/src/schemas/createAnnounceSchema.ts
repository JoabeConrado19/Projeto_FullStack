import { IImageUrl } from "@/interfaces/announcement";
import * as yup from "yup";
import { Schema } from "yup";

const imagesUrlSchema: Schema<IImageUrl> = yup.object().shape({
  url: yup.string().required("Insira um link"),
});

export const formCreateAnnounceSchema = yup.object({
  brandName: yup.string().required("Seleciona uma marca"),
  model: yup.string().required("Selecione um modelo"),
  year: yup.string().required("Selecione um ano"),
  fuelType: yup.string().required("Selecione o combustivel"),
  miles: yup.string().required("Informe a quilometragem"),
  color: yup.string().required("Informe a cor"),
  price: yup.string().required("Informe o preço"),
  description: yup.string().required("Informe uma descrição"),
  imagesUrl: yup.string().required("Informe um link para a imagem"),
  images: yup
    .array()
    .of(imagesUrlSchema)
    .required("Informe link para as imagens"),
});
