import { useRouter } from "next/router";
import style from "../../../styles/homepage/index.module.css";

export default function Announcement({ announcement }: any) {
 const price = announcement.price.toLocaleString("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
 });

 const route = useRouter();

 const profilePic = (userName: string) => {
  const userNameArr: string[] = userName.split(" ");

  if (userNameArr.length === 1) {
   return userNameArr[0][0].toUpperCase();
  }

  return userNameArr[0][0].toUpperCase() + userNameArr.pop()![0].toUpperCase();
 };

 return (
  <li key={announcement.id}>
   <a href={`${route.basePath}/cars/${announcement.id}`}>
    <div className={style.cardImgContainer}>
     <span style={{display: announcement.isPromotional ? 'flex' : 'none'}}>$</span>
     <img src={announcement.imagesUrl} />
    </div>
    <div className={style.cardTextContainer}>
     <h3>{announcement.model}</h3>
     <p>{announcement.description}</p>
    </div>
    <div className={style.cardUserContainer}>
     <div
      className={style.circle}
      style={{ backgroundColor: announcement.user.color }}
     >
      {profilePic(announcement.user.name)}
     </div>
     <p>{announcement.user.name}</p>
    </div>
    <div className={style.cardDataContainer}>
     <div className={style.badge}>
      <button>{announcement.miles} KM</button>
      <button>{announcement.year}</button>
     </div>
     <p>R$ {price}</p>
    </div>
   </a>
  </li>
 );
}
