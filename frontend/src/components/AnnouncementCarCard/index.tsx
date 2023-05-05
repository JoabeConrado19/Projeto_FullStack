import style from "./style.module.css";

interface ICardAnnouncementProps{
    carImg: string,
    carModel: string,
    carDescription: string,
    carMiles: string,
    carYear: string,
    price: string,
    isActive: boolean
}

export default function CardAnnouncement({
 carImg,
 carModel,
 carDescription,
 carMiles,
 carYear,
 price,
 isActive
}: ICardAnnouncementProps) {
    
 return (
  <li>
   <div className={style.cardImgContainer}>
    {
     isActive ? <span style={{background: '#4529E6' }}>Ativo</span> : <span style={{ background: '#ADB5BD'}}>Inativo</span>
    }
    <img src={carImg} alt="Carro" />
   </div>
   <div className={style.cardTextContainer}>
    <h3>{carModel}</h3>
    <p>{carDescription}</p>
   </div>
   <div className={style.cardDataContainer}>
    <div className={style.badge}>
     <button>{carMiles} KM</button>
     <button>{carYear}</button>
    </div>
    <p>{price}</p>
   </div>
   <div className={style.divButtons}>
    <button>Editar</button>
    <button>Ver Detalhes</button>
   </div>
  </li>
 );
}
