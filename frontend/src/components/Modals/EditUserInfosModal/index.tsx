import { useState, useContext } from "react";
import ModalBase from "../ModalBase";
import { InputComponent, TextAreaInputComponent } from "@/components/Input";
import buttonStyle from "@/components/Buttons/styles.module.css";
import style from "./style.module.css";
import { useForm } from "react-hook-form";

import { ButtonComponent } from "@/components/Buttons";
import api from "@/services/api";
import DeleteUserConfirmModal from "../DeleteUserConfirmModal";
import { IEditUserInfosModal } from "@/interfaces/components/modal";
import { announcementPage } from "@/context/AnnouncementPageContext";

export default function EditUserInfosModal({
 closeModalFunc,
 userData,
}: IEditUserInfosModal) {
 const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

 const { register, handleSubmit } = useForm();

 const { setUser } = useContext(announcementPage);

 const editUserRequest = async (data: any) => {
  const { id } = userData;

  await api.patch(`/users/${id}`, data);

  setUser(null);

  closeModalFunc((prevState) => !prevState);
 };

 return (
  <>
   <ModalBase modalTitle="Editar perfil" closeModal={closeModalFunc}>
    <form onSubmit={handleSubmit(editUserRequest)}>
     <p className="headline-7-600">Informações pessoais</p>
     <InputComponent
      inputId="user_name"
      label="Nome"
      register={register("name")}
      defaultValue={userData.name}
     />
     <InputComponent
      inputId="user_email"
      label="Email"
      register={register("email")}
      defaultValue={userData.email}
     />
     <InputComponent
      inputId="user_cpf"
      label="CPF"
      register={register("cpf")}
      defaultValue={userData.cpf}
     />
     <InputComponent
      inputId="user_phone"
      label="Celular"
      register={register("phone")}
      defaultValue={userData.phone}
     />
     <InputComponent
      inputId="user_birthdate"
      label="Data de nascimento"
      register={register("birthdate")}
      defaultValue={userData.birthdate}
     />
     <TextAreaInputComponent
      inputId="user_description"
      label="Descrição"
      register={register("description")}
      defaultValue={userData.description}
     />
     <div className={style.buttons_container}>
      <div className={style.delete_button_container}>
       <ButtonComponent
        type="button"
        className={buttonStyle.alert1_white_button}
        onClick={() => {
         setShowDeleteModal(true);
        }}
       >
        Deletar usuário
       </ButtonComponent>
      </div>
      <div className={style.confirm_cancel_button_container}>
       <ButtonComponent
        onClick={() => {
         closeModalFunc((prevState) => {
          return !prevState;
         });
        }}
        type="button"
       >
        Cancelar
       </ButtonComponent>
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
   {showDeleteModal ? (
    <DeleteUserConfirmModal
     closeModalFunc={setShowDeleteModal}
     userData={userData}
    />
   ) : null}
  </>
 );
}
