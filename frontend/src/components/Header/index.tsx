import { Button } from "@mui/material";

import LogoComponent from "../Logo";
import style from "./style.module.css"

export default function HeaderComponent() {
    return (
        <header
            className={style.page_header}
        >
            <LogoComponent />
            <div className={style.page_header_buttons}>
                <Button>
                    Fazer login
                </Button>
                <Button
                    variant="outlined"
                >
                    Cadastrar
                </Button>
            </div>
        </header>
    )
}