import Image from "next/image";
import style from "./style.module.css"
import cars from "../../assets/carImages/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
import perfil from "../../assets/carImages/download.jpeg"

export default function AnnouncementPage() {
 return (<div className={style.containerGeral}>  
    <div className={style.backgroundBlue}>

    </div>
    <div className={style.perfilUser}>
        <Image className={style.imgPerfil} src={perfil} alt="img user"/>
        <div className={style.userData}>
            <h2>Nome</h2>
            <span>Anunciante</span>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
        <button>Criar Anuncio</button>
    </div>

  <div className={style.containerCards}>
    <ul className={style.ulContainer}>

   <li className={style.liCard}>
    <div>
     <Image className={style.imgCard} src={cars} alt='Carro'/>
    </div>
    <div className={style.cardTextContainer}>
     <h3>Porsche - 718</h3>
     <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem...
     </p>
    </div>
    <div className={style.cardDataContainer}>
     <div className={style.badge}>
      <button>0 KM</button>
      <button>2019</button>
     </div>
     <p>R$ 00.000,00</p>
    </div>
    <div className={style.divButtons}>
      <button>Editar</button>
      <button>Ver Detalhes</button>
    </div>
   </li>
   
    </ul>
  </div>
  <div className={style.nextPrev}>
      <span>1 de 2</span>
      <a href="">Seguinte</a>
    </div>
 </div>
 
 );
}
