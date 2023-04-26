import { Dispatch, SetStateAction } from "react";
import ModalBase from "../ModalBase";
import { InputOne, TextAreaInput } from "@/components/Input/modalInputs";
import { useForm } from "react-hook-form";

import { ButtonComponent } from "@/components/Buttons";
import buttonStyle from "@/components/Buttons/styles.module.css";
import { IUserData } from "@/interfaces/user";
import api from "@/services/api";

interface IEditUserInfosModal {
  closeModalFunc: Dispatch<SetStateAction<boolean>>;
  userData: IUserData;
}

export default function EditUserInfosModal({
  closeModalFunc,
  userData,
}: IEditUserInfosModal) {
  const { register, handleSubmit } = useForm();

  const editUserRequest = (data: any) => {
    const {
      address,
      cars,
      comments,
      accountType,
      createdAt,
      id,
      profileImage,
      ...filteredUserData
    } = userData;

    const updatedData = {
      ...filteredUserData,
      ...data,
    };

    api.patch(`/users/${id}`, data)

    location.reload()
  };

  return (
    <ModalBase modalTitle="Editar perfil" closeModal={closeModalFunc}>
      <form onSubmit={handleSubmit(editUserRequest)}>
        <p className="headline-7-600">Informações pessoais</p>
        <InputOne
          inputId="user_name"
          label="Nome"
          register={register("name")}
          defaultValue={userData.name}
        />
        <InputOne
          inputId="user_email"
          label="Email"
          register={register("email")}
          defaultValue={userData.email}
        />
        <InputOne
          inputId="user_cpf"
          label="CPF"
          register={register("cpf")}
          defaultValue={userData.cpf}
        />
        <InputOne
          inputId="user_phone"
          label="Celular"
          register={register("phone")}
          defaultValue={userData.phone}
        />
        <InputOne
          inputId="user_birthdate"
          label="Data de nascimento"
          register={register("birthdate")}
          defaultValue={userData.birthdate}
        />
        <TextAreaInput
          inputId="user_description"
          label="Descrição"
          register={register("description")}
          defaultValue={userData.description}
        />
        <div>
          <ButtonComponent
            onClick={() => {
              closeModalFunc((prevState) => {
                return !prevState;
              });
            }}
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
      </form>
    </ModalBase>
  );
}
