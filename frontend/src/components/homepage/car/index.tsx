import style from '../../../styles/homepage/index.module.css'


export default function Announcement({announcement}:any) {
  const price = announcement.price.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
  const nome = announcement.user.name
  const nomeSplit = nome.split(" ")
  let novoNome = ""
  if (nomeSplit.length >= 1) {
    novoNome = nomeSplit[0][0].toUpperCase();
    if (nomeSplit.length >= 2) {
      novoNome += nomeSplit[1][0].toUpperCase();
    }
  }
  return (
    <li key={announcement.id}>
      <div className={style.cardImgContainer}>
        <img src={announcement.imagesUrl}/>
      </div>
      <div className={style.cardTextContainer}>
        <h3>{announcement.model}</h3>
        <p>{announcement.description}</p>
      </div>
      <div className={style.cardUserContainer}>
        <div className={style.circle} style={{backgroundColor : announcement.user.color}}>
          {novoNome}
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
    </li>
  )
}
