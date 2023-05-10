import { Button } from "@mui/material";
import style from "./style.module.css";

import { siteInfos } from "@/utils/siteInfos";
import LogoComponent from "../Logo";

interface IFooterComponent {
 styles?: any;
}

export default function FooterComponent({ styles }: IFooterComponent) {
 return (
  <footer className={style.page_footer} style={styles}>
   <LogoComponent
    logoColor="var(--whiteFixed)"
    secondNameColor="var(--whiteFixed)"
   />
   <span>{siteInfos.copyright}</span>
   <Button
    className={style.footer_button}
    onClick={() => {
     document.body.scrollIntoView();
    }}
   >
    <span
     style={{
      fontSize: "2rem",
      color: "var(--brand-4)",
     }}
    >
     ^
    </span>
   </Button>
  </footer>
 );
}
