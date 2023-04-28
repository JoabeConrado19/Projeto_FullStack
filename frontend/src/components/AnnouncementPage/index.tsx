import style from "./style.module.css";
import { useContext, useState } from "react";
import CreateAnnouncementModal from "../Modals/CreateAnnouncementModal";
import { Button } from "@mui/material";
import { announcementPage } from "@/context/AnnouncementPageContext";

export default function AnnouncementPage() {
 const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
 const { userAnnouncements, user } = useContext(announcementPage);

 if(user){
   const nome = user.name
   const nomeSplit = nome.split(" ")
   var novoNome = nomeSplit[0][0] + nomeSplit[1][0]

 return (
  <>
   <div className={style.containerGeral}>
    <div className={style.backgroundBlue}></div>
    <div className={style.perfilUser}>
     <div className={style.imgPerfil} style={{backgroundColor : user?.color}}>{novoNome}</div>
     <div className={style.userData}>
      <h2>{user?.name}</h2>
      <span>{user?.accountType}</span>
     </div>
     <p>
      {user?.description}
     </p>
     <Button
      onClick={() => {
       setModalIsOpen((prevState) => !prevState);
      }}
     >
      Criar Anuncio
     </Button>
    </div>

    <div className={style.containerCards}>
     <ul className={style.ulContainer}>
      {userAnnouncements.map((car) => {
        const price = car.price.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
       return (
        <li key={car.id} className={style.liCard}>
         <div>
          <img className={style.imgCard} src={car.imagesUrl} alt="Carro" />
         </div>
         <div className={style.cardTextContainer}>
          <h3>{car.model}</h3>
          <p>
          {car.description}
          </p>
         </div>
         <div className={style.cardDataContainer}>
          <div className={style.badge}>
           <button>{car.miles} KM</button>
           <button>{car.year}</button>
          </div>
          <p>{price}</p>
         </div>
         <div className={style.divButtons}>
          <button>Editar</button>
          <button>Ver Detalhes</button>
         </div>
        </li>
       );
      })}
     </ul>
    </div>
    <div className={style.nextPrev}>
     <span>1 de 2</span>
     <a href="">Seguinte</a>
    </div>
   </div>
   {modalIsOpen ? (
    <CreateAnnouncementModal closeModalFunc={setModalIsOpen} />
   ) : null}
  </>
 );
   }
}
