import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";

import ModalBase from "../ModalBase";
import { Button, TextField } from "@mui/material";
import {
    AutocompleteElement,
  FormContainer,
  SelectElement,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";
import kenzieKars from "@/services/kenzieKars";
import { ICar, fuelType } from "@/utils/carData";

interface ICreateAnnouncementModal {
  closeModalFunc: Dispatch<SetStateAction<boolean>>;
}

export default function CreateAnnouncementModal({
  closeModalFunc,
}: ICreateAnnouncementModal) {
  const [brandsArr, setBrandsArr] = useState<[] | string[]>([]);
  const [modelOptions, setModelOptions] = useState<null | ICar[]>(null);
  const [carData, setCarData] = useState<null | ICar>(null)

  useEffect(() => {
    async function getKenzieKars() {
      const kars = await kenzieKars.get("/cars");

      const karsArr = Object.keys(kars.data);

      setBrandsArr(karsArr);
    }

    getKenzieKars();
  }, []);

  return (
    <ModalBase modalTitle="Criar anuncio" closeModal={closeModalFunc}>
      <FormContainer onSuccess={(data) => console.log(data)}>
        <SelectElement
          name="brand"
          label="Marca"
          options={brandsArr.map((value) => {
            return {
              id: value,
              label: value.charAt(0).toUpperCase() + value.slice(1),
            };
          })}
          onChange={async (value) => {
            const filterModels = await kenzieKars.get(`/cars?brand=${value}`);

            setModelOptions(filterModels.data);
          }}
          required
        />
        <SelectElement
          name="model"
          label="Modelo"
          disabled={modelOptions ? false : true}
          options={modelOptions?.map((value: any) => {
            const carName = value.name;

            return {
              id: carName,
              label: carName.charAt(0).toUpperCase() + carName.slice(1),
            };
          })}
          onChange={(carName) => {
            const carData = modelOptions?.find((car) => car.name === carName);

            setCarData(carData!)
          }}
          required
        />
        <SelectElement 
            name="year"
            label="Ano"
            disabled={carData ? false : true}
            options={[
                {
                    id: carData?.year,
                    label: carData?.year
                }
            ]}
            required
        />
        <SelectElement 
            name="fuel"
            label="Combustivel"
            disabled={carData ? false : true}
            options={[
                {
                    id: carData?.fuel,
                    label: fuelType[carData?.fuel]
                }
            ]}
            required
        />
        <Button type="submit">Cadastrar</Button>
      </FormContainer>
    </ModalBase>
  );
}
