import * as yup from "yup";
import {Schema} from "yup"

interface ICreateAnnounceSchema {
    brand: string
    model: string
    year: string
    fuelType: string
    miles: string
    color: string
    price: string
    description: string
    images_url: IImageUrl[]
}

interface IImageUrl {
    url: string
}

const imagesUrlSchema: Schema<IImageUrl> = yup.object().shape({
    url: yup.string().required("Insira um link")
})

export const formCreateAnnounceSchema = yup.object({
    brand: yup.string().required("Seleciona uma marca"),
    model: yup.string().required("Selecione um modelo"),
    year: yup.string().required("Selecione um ano"),
    fuelType: yup.string().required("Selecione o combustivel"),
    miles: yup.string().required("Informe a quilometragem"),
    color: yup.string().required("Informe a cor"),
    price: yup.string().required("Informe o preço"),
    description: yup.string().required("Informe uma descrição"),
    images_url: yup.array().of(imagesUrlSchema).required("Informe link para as imagens")
})