import type { AppProps } from "next/app";
import "../styles/resetStyles.css"
import "../styles/globalStyles.css"
import { ThemeProvider } from "@emotion/react";

import theme from "@/styles/customMaterialUIThemes";

export default function App({ Component, pageProps }: AppProps) {
 return (
  <ThemeProvider theme={theme}>
   <Component {...pageProps} />
  </ThemeProvider>
 );
}