import { Dispatch, SetStateAction } from "react";
import style from "./style.module.css";
import { ICar } from "@/interfaces/car";
import Link from "next/link";

interface ICardAnnouncementProps {
 carImg: string;
 carModel: string;
 carDescription: string;
 carMiles: string;
 carYear: string;
 price: string;
 user: boolean;
 isActive: boolean;
 setShowCarEditModal: Dispatch<SetStateAction<boolean>>;
 setTargetCarData: Dispatch<SetStateAction<ICar | undefined>>;
 car: ICar;
}

export default function CardAnnouncement({
 carImg,
 carModel,
 carDescription,
 carMiles,
 carYear,
 price,
 isActive,
 user,
 setShowCarEditModal,
 setTargetCarData,
 car,
}: ICardAnnouncementProps) {
 return (
  <li>
   <div className={style.cardImgContainer}>
    {isActive ? (
     <span style={{ background: "#4529E6" }}>Ativo</span>
    ) : (
     <span style={{ background: "#ADB5BD" }}>Inativo</span>
    )}
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
    <p>
     {car.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
    </p>
   </div>
   <div
    className={style.divButtons}
    style={{ display: user ? "flex" : "none" }}
   >
    <button
     onClick={() => {
      setShowCarEditModal((prevState) => !prevState);
      setTargetCarData(car);
     }}
    >
     Editar
    </button>
    
    <Link href={`/cars/${car.id}`}>
    <button>Ver Detalhes</button>
    </Link>
   </div>
  </li>
 );
}
