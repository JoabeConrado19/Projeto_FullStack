import style from '../../../styles/homepage/index.module.css'
export default function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.text}>
        <h2>Motors Shop</h2>
        <p>A melhor plataforma de anúncios de carros do país</p>
      </div>
      <img src='car2.png' alt="Car banner"/>
    </div>
  )
}
