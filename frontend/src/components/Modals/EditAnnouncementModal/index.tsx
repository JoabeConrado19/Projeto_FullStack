import { useState, useEffect, useContext } from "react";
import { IEditAnnouncementModal } from "@/interfaces/components/modal";
import { useForm } from "react-hook-form";
import ModalBase from "../ModalBase";
import {
 InputComponent,
 SelectInputComponent,
 TextAreaInputComponent,
} from "@/components/Input";
import kenzieKars from "@/services/kenzieKars";

import styles from "./styles.module.css";
import createModalStyles from "../CreateAnnouncementModal/style.module.css";
import buttonStyles from "@/components/Buttons/styles.module.css";

import { ButtonComponent } from "@/components/Buttons";
import { ICar, ICarRequest, IKenzieKar } from "@/interfaces/car";
import api from "@/services/api";
import { fuelType } from "@/utils/carData";
import { announcementPage } from "@/context/AnnouncementPageContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { formCreateAnnounceSchema } from "@/schemas/createAnnounceSchema";

export default function EditAnnouncementModal({
 closeModalFunc,
 carActualData,
}: IEditAnnouncementModal) {
 const {
  register,
  handleSubmit,
  formState: { errors },
  setValue,
 } = useForm({
  resolver: yupResolver(formCreateAnnounceSchema),
 });

 const [brandsArr, setBrandsArr] = useState<[] | string[]>([]);
 const [modelOptions, setModelOptions] = useState<any>(null);
 const [isActive, setIsActive] = useState<boolean>(true);

 const [carData, setCarData] = useState<Partial<IKenzieKar> | IKenzieKar>({
  fuel: 1,
 });

 const [inputList, setInputList] = useState<[] | (typeof InputComponent)[]>([]);

 const { setUser } = useContext(announcementPage);

 useEffect(() => {
  async function getKenzieKars() {
   const kars = await kenzieKars.get("/cars");

   const karsArr = Object.keys(kars.data);

   setBrandsArr(karsArr);
  }

  setValue("isActive", true);

  getKenzieKars();
 }, []);

 const updateCarFunc = async (data: any) => {
  let { carPriceChart, ...filteredData } = data as ICarRequest;

  filteredData.miles = Math.trunc(data.miles);
  filteredData.price = Math.trunc(data.price);
  filteredData.isActive = true;

  const promotionalPrice = carPriceChart - carPriceChart * 0.05;

  if (filteredData.price <= promotionalPrice) {
   filteredData.isPromotional = true;
  }

  const returnedData = await api
   .patch(`/cars/${carActualData.id}`, filteredData)
   .then(() => {
    closeModalFunc((prevState) => !prevState);
   });
 };

 return (
  <ModalBase modalTitle="Editar anúncio" closeModal={closeModalFunc}>
   <form
    onSubmit={handleSubmit(updateCarFunc)}
    className={createModalStyles.form_container}
   >
    <SelectInputComponent
     inputId="car-brand"
     label="Marca"
     register={register("brandName")}
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
      setValue("fuelType", fuelType[carData.fuel - 1]);
      setValue("carPriceChart", carData.value);
     }}
     errorMessage={errors.model && errors.model.message}
    />

    <div className={createModalStyles.side_to_side_container}>
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
      value={fuelType[carData.fuel! - 1]}
      register={register("fuelType")}
      readOnly
      placeholder="Híbrido"
      errorMessage={errors.model && errors.model.message}
     />
    </div>
    <div className={createModalStyles.side_to_side_container}>
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
    <div className={createModalStyles.side_to_side_container}>
     <InputComponent
      inputId="car-FIPE"
      label="Preço tabela FIPE"
      register={register("carPriceChart")}
      placeholder="R$ 70.000,00"
      value={carData?.value?.toLocaleString("pt-BR", {
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
    </div>
    <TextAreaInputComponent
     inputId="description"
     label="Descrição"
     register={register("description")}
     placeholder="Escreva a descrição aqui"
     errorMessage={errors.description && errors.description.message}
    />
    <div>
     <p className="body-2-500">Publicado</p>
     <div className={createModalStyles.side_to_side_container}>
      <ButtonComponent
       onClick={() => {
        setValue("isActive", true);

        setIsActive(true);
       }}
       className={`${isActive ? buttonStyles.brand1_white_button : ""}`}
       type="button"
      >
       Sim
      </ButtonComponent>
      <ButtonComponent
       onClick={() => {
        setValue("isActive", false);

        setIsActive(false);
       }}
       className={`${isActive ? "" : buttonStyles.brand1_white_button}`}
       type="button"
      >
       Não
      </ButtonComponent>
     </div>
    </div>
    <div>
     <InputComponent
      inputId="main-image"
      label="Imagem da capa"
      register={register("imagesUrl")}
      type="text"
      placeholder="Insira link da imagem aqui"
      errorMessage={errors.imagesUrl && "Insira o link da imagem principal"}
     />
     <InputComponent
      inputId="1-car-image"
      label="1° imagem da galeria"
      register={register("images.0.url")}
      type="text"
      placeholder="Insira link da imagem aqui"
      errorMessage={errors.images_url && "Insira todos os links das imagens"}
     />
     <InputComponent
      inputId="2-car-image"
      label="2° Imagem da galeria"
      register={register("images.1.url")}
      type="text"
      placeholder="Insira link da imagem aqui"
     />
     {inputList?.map((value, index) => {
      return (
       <div
        key={`${index + 3}-car-image`}
        className={createModalStyles.link_input_container}
       >
        <InputComponent
         inputId={`${index + 3}-car-image`}
         label={`${index + 3}° Imagem da galeria`}
         register={register(`images.${index + 2}.url`)}
         type="text"
         placeholder="Insira link da imagem aqui"
        />
       </div>
      );
     })}
     <div className={createModalStyles.add_input_container}>
      <ButtonComponent
       type="button"
       onClick={() => {
        if (inputList.length < 4) {
         return setInputList([...inputList, InputComponent]);
        }

        return "";
       }}
       className={`${buttonStyles.brand3_bran1_button}`}
      >
       Adicionar campo para imagem da galeria
      </ButtonComponent>
     </div>
    </div>
    <div className={styles.button_exclude_save_container}>
     <div>
      <ButtonComponent
       type="button"
       onClick={async () => {
        await api.delete(`/cars/${carActualData.id}`);

        setUser(null);

        closeModalFunc((prevState) => !prevState);
       }}
       className={`${buttonStyles.gray_black_button}`}
      >
       Excluir anuncio
      </ButtonComponent>
     </div>
     <div>
      <ButtonComponent
       type="submit"
       className={`${buttonStyles.brand1_white_button}`}
       onClick={() => {}}
      >
       Atualizar
      </ButtonComponent>
     </div>
    </div>
   </form>
  </ModalBase>
 );
}
