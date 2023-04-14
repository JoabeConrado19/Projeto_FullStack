import type { AppProps } from "next/app";
import styles from '../styles/resetStyles.module.css';
import '../styles/resetStyles.css';
import '../styles/globalStyles.css'


export default function App({ Component, pageProps }: AppProps) {
 return (
  <>
   <Component {...pageProps} />
  </>
 );
}