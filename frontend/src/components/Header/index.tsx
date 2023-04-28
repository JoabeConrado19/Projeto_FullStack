import style from "./style.module.css";
import buttonStyle from "@/components/Buttons/styles.module.css";

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
import EditUserAddressModal from "../Modals/EditUserAddressModal";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function HeaderComponent() {
  const [userData, setUserData] = useState<null | IUserData>(null);

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);

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

    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setShowMobileMenu(true);
      } else {
        setShowMobileMenu(false);
      }
    });
  }, []);

  return (
    <header className={style.page_header}>
      <LogoComponent />

      <div className={style.mobile_menu_button}>
        <ButtonComponent
          onClick={() => {
            setShowMobileMenu((prevState) => !prevState);
          }}
          className={`${buttonStyle.no_style_button}`}
        >
          {showMobileMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
        </ButtonComponent>
      </div>
      <div
        className={style.page_header_menu}
        style={{
          display: `${showMobileMenu ? "none" : "flex"}`,
        }}
      >
        <ul className={style.mobile_menu}>
          <li>
            <Link href="/">
              <ButtonComponent className={`${buttonStyle.no_style_button}`}>
                Carros
              </ButtonComponent>
            </Link>
          </li>
          <li>
            <Link href="/">
              <ButtonComponent className={`${buttonStyle.no_style_button}`}>
                Motos
              </ButtonComponent>
            </Link>
          </li>
          <li>
            <Link href="/">
              <ButtonComponent className={`${buttonStyle.no_style_button}`}>
                Leilão
              </ButtonComponent>
            </Link>
          </li>
        </ul>
        <div className={style.page_header_buttons}>
          {userData ? (
            <div className={style.profile_container}>
              <ButtonComponent
                className={buttonStyle.no_style_button}
                onClick={() => {
                  setShowMenu((prevState) => !prevState);
                }}
              >
                <div className={style.profile_infos}>
                  <div
                    className={style.profile_image_container}
                    style={{ backgroundColor: `${userData.color}` }}
                  >
                    <p>
                      {userData.name.split(" ").reduce((acc, act) => {
                        acc += act[0].toLocaleUpperCase();

                        return acc;
                      }, "")}
                    </p>
                  </div>
                  <p>{userData.name}</p>
                </div>
              </ButtonComponent>
              <ul
                className={style.hidden_menu}
                style={{
                  display: `${showMenu ? "unset" : "none"}`,
                }}
              >
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
                  <ButtonComponent
                    className={buttonStyle.hidden_menu_buttons}
                    onClick={() => {
                      setShowAddressModal((prevState) => !prevState);
                    }}
                  >
                    Editar endereço
                  </ButtonComponent>
                </li>
                {userData.accountType === "Anunciante" ? (
                  <li>
                    <a href="/announcement">
                      <ButtonComponent
                        className={buttonStyle.hidden_menu_buttons}
                      >
                        Meus anúncios
                      </ButtonComponent>
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
              <Link href="/login">
                <ButtonComponent
                  className={buttonStyle.no_style_button}
                  style={{ color: "var(--brand-1)" }}
                >
                  Fazer login
                </ButtonComponent>
              </Link>
              <Link href="/register">
                <ButtonComponent className={buttonStyle.none_black_button}>
                  Cadastrar
                </ButtonComponent>
              </Link>
            </>
          )}
        </div>
      </div>
      {showEditModal ? (
        <EditUserInfosModal
          closeModalFunc={setShowEditModal}
          userData={userData!}
        />
      ) : null}
      {showAddressModal ? (
        <EditUserAddressModal
          closeModalFunc={setShowAddressModal}
          userData={userData!}
        />
      ) : null}
    </header>
  );
}
