import style from '../../../styles/homepage/index.module.css'
export default function Header() {
  return (
    <header className={`${style.header}`}>
      <div className={style.w80pc}><img src='MotorsShop.png' /></div>
      <div className={style.w20pc}>
        <a className={style.button1}>Fazer login</a>
        <button className={style.button2}>Cadastrar</button>
      </div>
    </header>
  )
}
