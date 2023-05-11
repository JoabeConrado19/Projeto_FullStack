import { siteInfos } from "@/utils/siteInfos";
import Link from "next/link";
import style from "./style.module.css";

interface ILogoComponent {
    logoColor?: string;
    secondNameColor?: string;
}

export default function LogoComponent({
    logoColor = "black",
    secondNameColor = "var(--brand-1)",
}: ILogoComponent) {
    return (
        <Link style={{ textDecoration: "none" }} href={"/"}>
            <div
                className={style.page_logo}
                style={{
                    color: logoColor,
                }}
            >
                <p className={style.page_logo_firstName}>{siteInfos.firstLogoName} </p>
                <p
                    className={style.page_logo_secondName}
                    style={{
                        color: secondNameColor,
                    }}
                >
                    {siteInfos.secondLogoName}
                </p>
            </div>
        </Link>
    );
}
