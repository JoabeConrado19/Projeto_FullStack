import ModalBase from "../ModalBase";
import { ButtonComponent } from "@/components/Buttons";
import buttonStyle from "@/components/Buttons/styles.module.css";
import style from "./style.module.css";
import api from "@/services/api";
import { useRouter } from "next/router";

import { destroyCookie } from "nookies";
import { IDeleteUserConfirmModal } from "@/interfaces/components/modal";

export default function DeleteUserConfirmModal({
 userData,
 closeModalFunc,
}: IDeleteUserConfirmModal) {
 const router = useRouter();

 return (
  <ModalBase
   modalTitle={`Deletar ${userData.name}`}
   closeModal={closeModalFunc}
   style={{
    backgroundColor: "#0000006b",
   }}
  >
   <p className="body-2-500">
    Tem certeza que deseja deletar o usuário {userData.name}?
   </p>
   <p className="body-2-500">
    Esta ação não poderá ser desfeita e todos os dados serão apagados.
   </p>
   <div className={style.button_container}>
    <ButtonComponent
     className={buttonStyle.alert1_alert3_button}
     onClick={async () => {
      await api.delete(`/users/${userData.id}`);

      destroyCookie(undefined, "tokenMotorsShop");

      closeModalFunc((prevState) => !prevState);

      router.push("/login");
     }}
    >
     Deletar Usuário
    </ButtonComponent>
   </div>
  </ModalBase>
 );
}
