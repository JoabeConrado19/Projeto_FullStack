import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import kenzieKars from "@/services/kenzieKars";
import ModalBase from "../ModalBase";

import {
  InputComponent,
  SelectInputComponent,
  TextAreaInputComponent,
} from "@/components/Input";
import { fuelType } from "@/utils/carData";
import { ICar, ICarRequest, IKenzieKar } from "@/interfaces/car";

import { formCreateAnnounceSchema } from "@/schemas/createAnnounceSchema";

import style from "./style.module.css";
import buttonStyle from "@/components/Buttons/styles.module.css";
import { ButtonComponent } from "@/components/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";

interface ICreateAnnouncementModal {
  closeModalFunc: Dispatch<SetStateAction<boolean>>;
}

export default function CreateAnnouncementModal({
  closeModalFunc,
}: ICreateAnnouncementModal) {
  const [brandsArr, setBrandsArr] = useState<[] | string[]>([]);
  const [modelOptions, setModelOptions] = useState<any>(null);

  const [carData, setCarData] = useState<Partial<ICar> | ICar>({
    fuelType: 1,
  });

  const [inputList, setInputList] = useState<[] | (typeof InputComponent)[]>(
    []
  );

  useEffect(() => {
    async function getKenzieKars() {
      const kars = await kenzieKars.get("/cars");

      const karsArr = Object.keys(kars.data);

      setBrandsArr(karsArr);
    }

    getKenzieKars();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formCreateAnnounceSchema),
  });

  const createCarFunc = (data: any) => {
    let { carPriceChart, ...filteredData } = data as ICarRequest;

    filteredData.price = Number(data.price);
    filteredData.isActive = true;

    const dataFIPEPrice = Object;

    console.log(filteredData);
  };

  return (
    <ModalBase modalTitle="Criar anuncio" closeModal={closeModalFunc}>
      <form
        onSubmit={handleSubmit(createCarFunc)}
        className={style.form_container}
      >
        <SelectInputComponent
          inputId="car-brand"
          label="Marca"
          register={register("brand.brandName")}
          placeholder="Teste"
          options={brandsArr.map((value) => {
            return {
              id: value,
              label: value.charAt(0).toUpperCase() + value.slice(1),
            };
          })}
          onChange={async (event) => {
            const value = event.target.value;

            const filterModels = await kenzieKars.get(`/cars?brand=${value}`);

            setModelOptions(filterModels.data);
          }}
          errorMessage={errors.brand && errors.brand.brandName.message}
        />
        <SelectInputComponent
          disabled={modelOptions ? false : true}
          inputId="car-model"
          label="Modelo"
          register={register("model")}
          options={modelOptions?.map((value: any) => {
            const carName = value.name;

            return {
              id: carName,
              label: carName.charAt(0).toUpperCase() + carName.slice(1),
            };
          })}
          onChange={(event) => {
            const carName = event.target.value;

            const carData = modelOptions?.find(
              (car: IKenzieKar) => car.name === carName
            );

            setCarData(carData);

            setValue("year", carData.year);
            setValue("fuelType", fuelType[carData?.fuel]);
            setValue("carPriceChart", carData.value);
          }}
          errorMessage={errors.model && errors.model.message}
        />
        <div>
          <InputComponent
            inputId="car-year"
            label="Ano"
            value={carData?.year}
            register={register("year")}
            readOnly
            placeholder="2017"
            errorMessage={errors.model && errors.model.message}
          />
          <InputComponent
            inputId="car-fuel"
            label="Combustivel"
            value={fuelType[carData?.fuel]}
            register={register("fuelType")}
            readOnly
            placeholder="Híbrido"
            errorMessage={errors.model && errors.model.message}
          />
          <InputComponent
            inputId="car-miles"
            label="Quilometragem"
            register={register("miles")}
            type="number"
            placeholder="30.000"
            errorMessage={errors.miles && errors.miles.message}
          />
          <InputComponent
            inputId="car-color"
            label="Cor"
            register={register("color")}
            type="text"
            placeholder="Branco"
            errorMessage={errors.color && errors.color.message}
          />
        </div>
        <InputComponent
          inputId="car-FIPE"
          label="Preço tabela FIPE"
          register={register("carPriceChart")}
          placeholder="R$ 70.000,00"
          value={carData.price?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          readOnly
          errorMessage={errors.model && errors.model.message}
        />
        <InputComponent
          inputId="price"
          label="Preço"
          register={register("price")}
          type="number"
          min="0.00"
          step="0.01"
          placeholder="R$ 57.000,00"
          errorMessage={errors.price && errors.price.message}
        />
        <TextAreaInputComponent
          inputId="description"
          label="Descrição"
          register={register("description")}
          placeholder="Escreva a descrição aqui"
          errorMessage={errors.description && errors.description.message}
        />
        <div>
          <InputComponent
            inputId="main-image"
            label="Imagem da capa"
            register={register("imagesUrl")}
            type="text"
            placeholder="Insira link da imagem aqui"
            errorMessage={
              errors.imagesUrl && "Insira o link da imagem principal"
            }
          />
          <InputComponent
            inputId="1-car-image"
            label="1° imagem da galeria"
            register={register("images_url.0.url")}
            type="text"
            placeholder="Insira link da imagem aqui"
            errorMessage={
              errors.images_url && "Insira todos os links das imagens"
            }
          />
          <InputComponent
            inputId="2-car-image"
            label="2° Imagem da galeria"
            register={register("images_url.1.url")}
            type="text"
            placeholder="Insira link da imagem aqui"
          />
          {inputList?.map((value, index) => {
            return (
              <div
                key={`${index + 3}-car-image`}
                className={style.link_input_container}
              >
                <InputComponent
                  inputId={`${index + 3}-car-image`}
                  label={`${index + 3}° Imagem da galeria`}
                  register={register(`images_url.${index + 2}.url`)}
                  type="text"
                  placeholder="Insira link da imagem aqui"
                />
              </div>
            );
          })}
          <div className={style.add_input_container}>
            <ButtonComponent
              type="button"
              onClick={() => {
                if (inputList.length < 4) {
                  return setInputList([...inputList, InputComponent]);
                }

                return "";
              }}
              className={`${buttonStyle.brand3_bran1_button}`}
            >
              Adicionar campo para imagem da galeria
            </ButtonComponent>
          </div>
        </div>
        <div className={style.button_confirm_cancel_container}>
          <ButtonComponent
            type="button"
            onClick={() => {
              closeModalFunc((prevState) => !prevState);
            }}
            className={`${buttonStyle.gray_black_button}`}
          >
            Cancelar
          </ButtonComponent>
          <ButtonComponent
            type="submit"
            className={`${buttonStyle.brand1_white_button}`}
            onClick={() => {
              console.log(errors);
            }}
          >
            Criar anuncio
          </ButtonComponent>
        </div>
      </form>
    </ModalBase>
  );
}
