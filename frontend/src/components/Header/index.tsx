import style from "./style.module.css";
import buttonStyle from "@/components/Buttons/styles.module.css"

import { Button } from "@mui/material";

import LogoComponent from "../Logo";
import { useEffect, useState } from "react";
import api from "@/services/api";
import Link from "next/link";
import { parseCookies, destroyCookie } from "nookies";
import { parseJwt } from "@/utils/jwt";
import EditUserInfosModal from "../Modals/EditUserInfosModal";

import { IUserData } from "@/interfaces/user";
import { ButtonComponent } from "../Buttons";
import { useRouter } from "next/router";

export default function HeaderComponent() {
  const [userData, setUserData] = useState<null | IUserData>(null);

  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const userToken = parseCookies().tokenMotorsShop;

      if (userToken) {
        api.defaults.headers.common.Authorization = `Bearer ${userToken}`;

        const tokenUserData = parseJwt(userToken);

        const { data }: { data: IUserData } = await api.get(
          `/users/${tokenUserData.sub}`
        );

        setUserData(data);
      }
    };

    getUser();
  }, []);

  return (
    <header className={style.page_header}>
      <LogoComponent />
      <div className={style.page_header_buttons}>
        {userData ? (
          <div className={style.profileContainer}>
            <div className={style.profileImageContainer}>
              <p>
                {userData.name.split(" ").reduce((acc, act) => {
                  acc += act[0].toLocaleUpperCase();

                  return acc;
                }, "")}
              </p>
            </div>
            <p>{userData.name}</p>
            <ul className={style.hidden_menu}>
              <li>
                <ButtonComponent
                  onClick={() => {
                    setShowEditModal(true);
                  }}
                  className={buttonStyle.hidden_menu_buttons}
                >
                  Editar usuário
                </ButtonComponent>
              </li>
              <li>
                <ButtonComponent className={buttonStyle.hidden_menu_buttons}>
                  Editar endereço
                </ButtonComponent>
              </li>
              {userData.accountType === "Anunciante" ? (
                <li>
                  <a href="/announcement">
                    <ButtonComponent className={buttonStyle.hidden_menu_buttons}>Meus anúncios</ButtonComponent>
                  </a>
                </li>
              ) : null}
              <li>
                <ButtonComponent
                  className={buttonStyle.hidden_menu_buttons}
                  onClick={() => {
                    destroyCookie(undefined, "tokenMotorsShop");

                    router.push("/login");
                  }}
                >
                  Sair
                </ButtonComponent>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Button>
              <Link href="/login">Fazer login</Link>
            </Button>
            <Button variant="outlined">
              <Link href="/register">Cadastrar</Link>
            </Button>
          </>
        )}
      </div>

      {showEditModal ? (
        <EditUserInfosModal
          closeModalFunc={setShowEditModal}
          userData={userData!}
        />
      ) : null}
    </header>
  );
}
