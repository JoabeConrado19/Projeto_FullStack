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

export default function EditCommentModal({
 closeModalFunc, comment, user

}: any) {
 const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

 const { register, handleSubmit } = useForm();

 const [newComment, setNewComment] = useState<string>("");


 

 const { setUser } = useContext(announcementPage);

 const editCommentRequest = async (data: any) => {

//   const { id } = userData;

  await api.patch(`/cars/comments/${comment.id}`, {
	"description": newComment
});

closeModalFunc((prevState:boolean) => {
    return !prevState;
   });

//   setUser(null);

//   closeModalFunc((prevState) => !prevState);
 };

 const deleteCommentRequest = async (data: any) => {


  await api.delete(`/cars/comments/${comment.id}`);

closeModalFunc((prevState:boolean) => {
    return !prevState;
   });

 };


 return (
  <>
   <ModalBase modalTitle="Editar Comentário" closeModal={closeModalFunc}>
    <form onSubmit={handleSubmit(editCommentRequest)}>
     <p className="headline-7-600">Escreva o seu comentário</p>
     
    

     <TextAreaInputComponent
      inputId="user_description"
      label="Comentário"
      register={register("description")}
      defaultValue={comment.description}
      onChange={(event) => {
        const value = event.target.value;
        setNewComment(value);
      }}
     />
     <div className={style.buttons_container}>
      <div className={style.delete_button_container}>
       <ButtonComponent
        type="button"
        className={buttonStyle.alert1_white_button}
        onClick={deleteCommentRequest}
       >
        Deletar comentário
       </ButtonComponent>
      </div>
      <div className={style.confirm_cancel_button_container}>
       <ButtonComponent
        onClick={() => {
         closeModalFunc((prevState:boolean) => {
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
   
  </>
 );
}
