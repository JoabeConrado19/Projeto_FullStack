import * as yup from "yup";

interface ICreateAnnounceSchema {
    brand: string
    model: string
    year: string
    fuelType: string
    miles: string
    color: string
    price: number
    description: string
    images_url: string[]
}

interface IImageUrl {
    url: string
}

const imagesUrlSchema = yup.object().shape({
    url: yup.string().required("Insira um link")
})

export const formCreateAnnounceSchema = yup.object().shape({
    brand: yup.string().required("Seleciona uma marca"),
    model: yup.string().required("Seleciona um modelo"),
    year: yup.string().required("Seleciona um ano"),
    fuelType: yup.string().required("Seleciona o combustivel"),
    miles: yup.string().required("Informe a quilometragem"),
    color: yup.string().required("Informe a cor"),
    price: yup.string().required("Informe o preço"),
    description: yup.string().required("Informe uma descrição"),
    images_url: yup.array().of(imagesUrlSchema)
})