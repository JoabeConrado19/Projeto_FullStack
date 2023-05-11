import style from "./style.module.css";
import buttonStyle from "@/components/Buttons/styles.module.css";

import LogoComponent from "../Logo";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import EditUserInfosModal from "../Modals/EditUserInfosModal";

import { ButtonComponent } from "../Buttons";
import EditUserAddressModal from "../Modals/EditUserAddressModal";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { announcementPage } from "@/context/AnnouncementPageContext";
import { destroyCookie } from "nookies";

export default function HeaderComponent() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);

  const { user } = useContext(announcementPage);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setShowMobileMenu(true);
      } else {
        setShowMobileMenu(false);
      }
    });
  }, [user]);

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
          {user ? (
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
                    style={{ backgroundColor: `${user.color}` }}
                  >
                    <p>
                      {user.name.split(" ").reduce((acc, act) => {
                        if (acc.length >= 2) {
                          return acc;
                        }

                        return (acc += act[0].toLocaleUpperCase());
                      }, "")}
                    </p>
                  </div>
                  <p>{user.name}</p>
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
                      setShowMenu((prevState) => !prevState);
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
                      setShowMenu((prevState) => !prevState);
                    }}
                  >
                    Editar endereço
                  </ButtonComponent>
                </li>
                {user.accountType === "Anunciante" ? (
                  <li>
                    <Link href={`/announcement/${user.id}`}>
                      <ButtonComponent
                        className={buttonStyle.hidden_menu_buttons}
                        onClick={() => {
                          setShowMenu((prevState) => !prevState);
                        }}
                      >
                        Meus anúncios
                      </ButtonComponent>
                    </Link>
                  </li>
                ) : null}
                <li>
                  <ButtonComponent
                    className={buttonStyle.hidden_menu_buttons}
                    onClick={() => {
                      destroyCookie(undefined, "tokenMotorsShop");
                      setShowMenu((prevState) => !prevState);

                      location.assign("/login");
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
                <ButtonComponent
                  className={buttonStyle.none_black_button}
                >
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
          userData={user!}
        />
      ) : null}
      {showAddressModal ? (
        <EditUserAddressModal
          closeModalFunc={setShowAddressModal}
          userData={user!}
        />
      ) : null}
    </header>
  );
}
