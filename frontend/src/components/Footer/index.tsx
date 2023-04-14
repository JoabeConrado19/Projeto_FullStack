import { Button } from "@mui/material"
import style from "./style.module.css"

// import { siteInfos } from "@/utils/siteInfos"
import LogoComponent from "../Logo"

export default function FooterComponent() {
    return (
        <footer className={style.page_footer}>
            <LogoComponent 
                logoColor="var(--whiteFixed)" 
                secondNameColor="var(--whiteFixed)"
            />
            {/* <span>{siteInfos.copyright}</span> */}
            <Button 
                className={style.footer_button}
            >
                <span
                    style={{
                        fontSize: "2rem",
                        color: "var(--brand-4)"
                    }}
                >^</span>
            </Button>
        </footer>
    )
}