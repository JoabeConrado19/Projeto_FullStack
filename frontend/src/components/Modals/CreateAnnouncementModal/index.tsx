import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

import kenzieKars from "@/services/kenzieKars";
import ModalBase from "../ModalBase";

import { InputOne, SelectInput, TextAreaInput } from "@/components/Input/modalInputs";
import { ICar, fuelType } from "@/utils/carData";
import style from "./style.module.css"

interface ICreateAnnouncementModal {
  closeModalFunc: Dispatch<SetStateAction<boolean>>;
}

export default function CreateAnnouncementModal({
  closeModalFunc,
}: ICreateAnnouncementModal) {
  const [brandsArr, setBrandsArr] = useState<[] | string[]>([]);
  const [modelOptions, setModelOptions] = useState<any>(null);

  const [carData, setCarData] = useState<null | ICar>(null);

  const [inputList, setInputList] = useState<[] | typeof InputOne[]>([])

  useEffect(() => {
    async function getKenzieKars() {
      const kars = await kenzieKars.get("/cars");

      const karsArr = Object.keys(kars.data);

      setBrandsArr(karsArr);
    }

    getKenzieKars();
  }, []);

  const { register, handleSubmit } = useForm();

  const createCarFunc = (data) => {
    console.log(data);
  };

  return (
    <ModalBase modalTitle="Criar anuncio" closeModal={closeModalFunc}>
      <form onSubmit={handleSubmit(createCarFunc)}>
        <SelectInput
          inputId="car-brand"
          label="Marca"
          register={register}
          registerkey="brand"
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
          required
        />
        <SelectInput
          disabled={modelOptions ? false : true}
          inputId="car-model"
          label="Modelo"
          register={register}
          registerkey="model"
          options={modelOptions?.map((value: any) => {
            const carName = value.name;

            return {
              id: carName,
              label: carName.charAt(0).toUpperCase() + carName.slice(1),
            };
          })}
          onInput={(event) => {            
            const carName = event.target.value;

            const carData = modelOptions?.find(
              (car: ICar) => car.name === carName
            );            

            setCarData(carData);
          }}
          required
        />
        <div>
          <InputOne
            inputId="car-year"
            label="Ano"
            value={carData?.year}
            register={register}
            registerkey="year"
            readOnly
            required
            placeholder="2017"
          />
          <InputOne
            inputId="car-fuel"
            label="Combustivel"
            defaultValue={fuelType[carData?.fuel]}
            register={register}
            registerkey="fuelType"
            readOnly
            required
            placeholder="Híbrido"
          />
          <InputOne
            inputId="car-miles"
            label="Quilometragem"
            register={register}
            registerkey="miles"
            required
            type="number"
            placeholder="37021,31"
          />
          <InputOne
            inputId="car-color"
            label="Cor"
            register={register}
            registerkey="color"
            required
            type="text"
            placeholder="Branco"
          />
        </div>
        <InputOne
          inputId="car-FIPE"
          label="Preço tabela FIPE"
          register={register}
          registerkey="carPriceChart"
          defaultValue={
            carData
              ? `${carData?.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}`
              : ""
          }
          disabled
        />
        <InputOne
          inputId="price"
          label="Preço"
          register={register}
          registerkey="price"
          type="number"
          min="0.00"
          step="0.01"
          datatype="currency"
          required
          placeholder="R$ 57.000,00"
        />
        <TextAreaInput
          inputId="description"
          label="Descrição"
          register={register}
          registerkey="description"
          placeholder="Escreva a descrição aqui"
        />
        <div>
          <InputOne
            inputId="main-image"
            label="Imagem da capa"
            register={register}
            registerkey="mainImage"
            type="text"
            placeholder="Insira link da imagem aqui"
            required
          />
          <InputOne
            inputId="1-car-image"
            label="1° imagem da galeria"
            register={register}
            registerkey="`1-car-image`"
            type="text"
            placeholder="Insira link da imagem aqui"
            required
          />
          <InputOne
            inputId="2-car-image"
            label="2° Imagem da galeria"
            register={register}
            registerkey="`2-car-image`"
            type="text"
            placeholder="Insira link da imagem aqui"
            required
          />
          {inputList?.map((value, index) => {
            return (
                <div key={`${index+3}-car-image`} className={style.linkInputContainer}>
                  <InputOne
                    inputId={`${index+3}-car-image`}
                    label={`${index+3}° Imagem da galeria`}
                    register={register}
                    registerkey={`${index+3}-car-image`}
                    type="text"
                    placeholder="Insira link da imagem aqui"
                    required
                  />
                  <Button
                    onClick={() => {
                      setInputList((prevState) => {
                        const newList = [...prevState]

                        newList.pop()

                        return newList
                      })
                    }}
                  >X</Button>
                </div>
            )
          })}
          <Button variant="contained"
            onClick={() => (
              setInputList([...inputList, InputOne])
            )}
          >Adicionar mais imagens</Button>
        </div>
        <div>
          <Button
            type="button"
            onClick={() => {
              closeModalFunc((prevState) => !prevState);
            }}
          >
            Cancelar
          </Button>
          <Button type="submit">Confirmar</Button>
        </div>
      </form>
    </ModalBase>
  );
}
