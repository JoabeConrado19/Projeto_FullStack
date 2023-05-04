import style from "./style.module.css";
import { useContext, useState } from "react";
import CreateAnnouncementModal from "../Modals/CreateAnnouncementModal";
import { Button } from "@mui/material";
import { announcementPage } from "@/context/AnnouncementPageContext";
<<<<<<< HEAD
import CardAnnouncement from "../AnnouncementCarCard";
=======
import EditAnnouncementModal from "../Modals/EditAnnouncementModal";
import { ButtonComponent } from "../Buttons";
import { ICar } from "@/interfaces/car";
>>>>>>> 72cc83d34844a51b166b6cc296f2513f8997c1b1

export default function AnnouncementPage() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [showCarEditModal, setShowCarEditModal] = useState<boolean>(false);
  const [targerCarData, setTargetCarData] = useState<ICar>();

  const { userAnnouncements, user } = useContext(announcementPage);

  if (user) {
    const nome = user.name;
    const nomeSplit = nome.split(" ");
    var novoNome = nomeSplit[0][0] + nomeSplit[1][0];
  }

  return (
    <>
      <div className={style.containerGeral}>
        <div className={style.backgroundBlue}></div>
        <div className={style.perfilUser}>
          <div
            className={style.imgPerfil}
            style={{ backgroundColor: user?.color }}
          >
            {novoNome!}
          </div>
          <div className={style.userData}>
            <h2>{user?.name}</h2>
            <span>{user?.accountType}</span>
          </div>
          <p>{user?.description}</p>
          <Button
            onClick={() => {
              setModalIsOpen((prevState) => !prevState);
            }}
          >
            Criar Anuncio
          </Button>
        </div>

        <div className={style.containerCards}>
          <ul className={style.ulContainer}>
            {userAnnouncements.map((car: ICar) => {
              const price = car.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              });
              return (
<<<<<<< HEAD
                <CardAnnouncement
                key={car.id}
                carModel={car.model}
                carDescription={car.description}
                carImg={car.imagesUrl}
                carMiles={car.miles}
                carYear={car.year}
                price={price}
                isActive={car.isActive}
                />
=======
                <li key={car.id} className={style.liCard}>
                  <div>
                    <img
                      className={style.imgCard}
                      src={car.imagesUrl}
                      alt="Carro"
                    />
                  </div>
                  <div className={style.cardTextContainer}>
                    <h3>{car.model}</h3>
                    <p>{car.description}</p>
                  </div>
                  <div className={style.cardDataContainer}>
                    <div className={style.badge}>
                      <button>{car.miles} KM</button>
                      <button>{car.year}</button>
                    </div>
                    <p>{price}</p>
                  </div>
                  <div className={style.divButtons}>
                    <ButtonComponent
                      onClick={() => {
                        setTargetCarData(car);

                        setShowCarEditModal(true);
                      }}
                    >
                      Editar
                    </ButtonComponent>
                    <ButtonComponent>Ver Detalhes</ButtonComponent>
                  </div>
                </li>
>>>>>>> 72cc83d34844a51b166b6cc296f2513f8997c1b1
              );
            })}
          </ul>
        </div>
        <div className={style.nextPrev}>
          <span>1 de 2</span>
          <a href="">Seguinte</a>
        </div>
      </div>
      {modalIsOpen ? (
        <CreateAnnouncementModal
          closeModalFunc={setModalIsOpen}
          userData={user!}
        />
      ) : null}
      {showCarEditModal ? (
        <EditAnnouncementModal
          carActualData={targerCarData!}
          closeModalFunc={setShowCarEditModal}
        />
      ) : null}
    </>
  );
}
