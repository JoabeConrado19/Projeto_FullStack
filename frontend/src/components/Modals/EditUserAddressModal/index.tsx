import { Dispatch, SetStateAction, useContext } from "react";
import ModalBase from "../ModalBase";
import { InputComponent } from "@/components/Input";
import buttonStyle from "@/components/Buttons/styles.module.css";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";

import { ButtonComponent } from "@/components/Buttons";
import { IUserData } from "@/interfaces/user";
import api from "@/services/api";

import {
 IEditAdressSubmit,
 formEditAdressSchema,
} from "@/schemas/editAdressSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseCookies } from "nookies";
import { parseJwt } from "@/utils/jwt";
import { announcementPage } from "@/context/AnnouncementPageContext";

interface IEditAddressInfosModal {
 closeModalFunc: Dispatch<SetStateAction<boolean>>;
 userData: IUserData;
}

export default function EditUserAddressModal({
 closeModalFunc,
 userData,
}: IEditAddressInfosModal) {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<IEditAdressSubmit>({
  resolver: yupResolver(formEditAdressSchema),
 });

 const { setUser } = useContext(announcementPage);

 const editAdress = async (data: IEditAdressSubmit) => {
  const token = parseCookies().tokenMotorsShop;
  const parseTokens = parseJwt(token);
  const treatedData = { address: { ...data } };
  api.defaults.headers.Authorization = `Bearer ${token}`;

  await api
   .patch(`/users/${parseTokens.sub}`, treatedData)
   .then((resp) => {
    setUser(null);

    closeModalFunc((prevState) => !prevState);
   })
   .catch((err) => {
    console.error(err);
   });
 };

 return (
  <>
   <ModalBase modalTitle="Editar endereço" closeModal={closeModalFunc}>
    <form onSubmit={handleSubmit(editAdress)}>
     <h3 className={`body-2-500`}>Infomações de endereço</h3>
     <InputComponent
      placeholder={"00000.000"}
      inputId="cep"
      label="CEP"
      type="text"
      register={register("cep")}
      defaultValue={userData.address.cep}
      errorMessage={errors.cep?.message}
     />
     <div className={styles.side_to_side_container}>
      <InputComponent
       placeholder={"Digitar Estado"}
       inputId="estado"
       label="Estado"
       type="text"
       register={register("state")}
       defaultValue={userData.address.state}
       errorMessage={errors.state?.message}
      />

      <InputComponent
       placeholder={"Digitar cidade"}
       inputId="cidade"
       label="Cidade"
       type="text"
       register={register("city")}
       defaultValue={userData.address.city}
       errorMessage={errors.city?.message}
      />
     </div>

     <InputComponent
      placeholder={"Digitar rua"}
      inputId="rua"
      label="Rua"
      type="text"
      register={register("street")}
      defaultValue={userData.address.street}
      errorMessage={errors.street?.message}
     />
     <div className={styles.side_to_side_container}>
      <InputComponent
       placeholder={"Digitar número"}
       inputId="número"
       label="Número"
       type="text"
       register={register("number")}
       defaultValue={userData.address.number}
       errorMessage={errors.number?.message}
      />
      <InputComponent
       placeholder={"Ex: apart 307"}
       inputId="complemento"
       label="Complemento"
       type="text"
       register={register("complement")}
       defaultValue={userData.address.complement}
       errorMessage={errors.complement?.message}
      />
     </div>
     <div className={styles.buttons_container}>
      <div
       className={styles.button_cancel_container}
       onClick={() => {
        closeModalFunc((prevState) => !prevState);
       }}
      >
       <ButtonComponent type="button">Cancelar</ButtonComponent>
      </div>

      <div className={styles.button_save_container}>
       <ButtonComponent
        type="submit"
        className={buttonStyle.brand1_white_button}
       >
        Salvar alterações
       </ButtonComponent>
      </div>
     </div>
    </form>
   </ModalBase>
  </>
 );
}
