import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

import kenzieKars from "@/services/kenzieKars";
import ModalBase from "../ModalBase";

import {
  InputOne,
  SelectInput,
  TextAreaInput,
} from "@/components/Input/modalInputs";
import { fuelType } from "@/utils/carData";
import { ICar } from "@/interfaces/car";

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
    fuel: 1,
  });

  const [inputList, setInputList] = useState<[] | typeof InputOne[]>([]);

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
    resolver: yupResolver(formCreateAnnounceSchema)
  });

  const createCarFunc = (data: any) => {
    data.price = Number(data.price);

    console.log(data);
  };

  return (
    <ModalBase modalTitle="Criar anuncio" closeModal={closeModalFunc}>
      <form
        onSubmit={handleSubmit(createCarFunc)}
        className={style.form_container}
      >
        <SelectInput
          inputId="car-brand"
          label="Marca"
          register={register("brand")}
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
          errorMessage={errors.brand && errors.brand.message}
        />
        <SelectInput
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
              (car: ICar) => car.name === carName
            );

            setCarData(carData);

            setValue("year", carData.year);
            setValue("fuelType", carData.fuel);
            setValue("carPriceChart", carData.value);
          }}
          errorMessage={errors.model && errors.model.message}
        />
        <div>
          <InputOne
            inputId="car-year"
            label="Ano"
            value={carData?.year}
            register={register("year")}
            readOnly
            placeholder="2017"
            errorMessage={errors.model && errors.model.message}
          />
          <InputOne
            inputId="car-fuel"
            label="Combustivel"
            value={fuelType[carData?.fuel]}
            register={register("fuelType")}
            readOnly
            placeholder="Híbrido"
            errorMessage={errors.model && errors.model.message}
          />
          <InputOne
            inputId="car-miles"
            label="Quilometragem"
            register={register("miles")}
            type="number"
            placeholder="30.000"
            errorMessage={errors.miles && errors.miles.message}
          />
          <InputOne
            inputId="car-color"
            label="Cor"
            register={register("color")}
            type="text"
            placeholder="Branco"
            errorMessage={errors.color && errors.color.message}
          />
        </div>
        <InputOne
          inputId="car-FIPE"
          label="Preço tabela FIPE"
          register={register("carPriceChart")}
          placeholder="R$ 70.000,00"
          value={carData.value?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          readOnly
          errorMessage={errors.model && errors.model.message}
        />
        <InputOne
          inputId="price"
          label="Preço"
          register={register("price")}
          type="number"
          min="0.00"
          step="0.01"
          placeholder="R$ 57.000,00"
          errorMessage={errors.price && errors.price.message}
        />
        <TextAreaInput
          inputId="description"
          label="Descrição"
          register={register("description")}
          placeholder="Escreva a descrição aqui"
          errorMessage={errors.description && errors.description.message}
        />
        <div>
          <InputOne
            inputId="main-image"
            label="Imagem da capa"
            register={register("images_url.0.url")}
            type="text" 
            placeholder="Insira link da imagem aqui"
            errorMessage={errors.images_url && "Insira todos os links das imagens"}
          />
          <InputOne
            inputId="1-car-image"
            label="1° imagem da galeria"
            register={register("images_url.1.url")}
            type="text"
            placeholder="Insira link da imagem aqui"
          />
          <InputOne
            inputId="2-car-image"
            label="2° Imagem da galeria"
            register={register("images_url.2.url")}
            type="text"
            placeholder="Insira link da imagem aqui"
          />
          {inputList?.map((value, index) => {
            return (
              <div
                key={`${index + 3}-car-image`}
                className={style.linkInputContainer}
              >
                <InputOne
                  inputId={`${index + 3}-car-image`}
                  label={`${index + 3}° Imagem da galeria`}
                  register={register(`images_url.${index + 3}.url`)}
                  type="text"
                  placeholder="Insira link da imagem aqui"
                />
                {/* <Button
                  onClick={() => {
                    setInputList((prevState) => {
                      const newList = [...prevState];

                      newList.pop();

                      return newList;
                    });
                  }}
                >
                  X
                </Button> */}
              </div>
            );
          })}
          <ButtonComponent
            type="button"
            onClick={() => {
              if (inputList.length < 4) {
                return setInputList([...inputList, InputOne]);
              }

              return "";
            }}
            className={`${buttonStyle.brand3_bran1_button}`}
          >
            Adicionar campo para imagem da galeria
          </ButtonComponent>
        </div>
        <div className={style.buttonConfirmCancelContainer}>
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
          >
            Criar anuncio
          </ButtonComponent>
        </div>
      </form>
    </ModalBase>
  );
}
