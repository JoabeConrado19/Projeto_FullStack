import styles from "@/styles/homepage/index.module.css";
export default function Hero() {
 return (
  <div className={styles.hero}>
   <div className={styles.text}>
    <h2>Motors Shop</h2>
    <p>A melhor plataforma de anúncios de carros do país</p>
   </div>
   <img src="car2.png" alt="Car banner" />
  </div>
 );
}
