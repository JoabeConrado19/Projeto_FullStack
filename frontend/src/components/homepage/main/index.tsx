import { PageContext } from "@/context/HomePageContext";
import style from "@/styles/homepage/index.module.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import { useContext, useEffect, useState } from "react";
import { AnnouncementsList } from "@/interfaces/announcement";

import kenzieKars from "@/services/kenzieKars";

import buttonStyle from "@/components/Buttons/styles.module.css";
import Announcement from "../car";
import api from "@/services/api";
import { ICar } from "@/interfaces/car";

export default function MainHome() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [possibleBrands, setPossibleBrands] = useState<string[] | []>([]);
  const [filtered, setFiltered] = useState<ICar[] | null>(null);

  const [requestString, setRequestString] = useState<string>(``);

  const { announcements }: AnnouncementsList = useContext(PageContext);

  const styleModal = {
    position: "absolute" as "absolute",
    top: "0%",
    left: "0%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    const getKenzieKars = async () => {
      const kars = await kenzieKars.get("/cars");

      const karsArr = Object.keys(kars.data);

      setPossibleBrands(karsArr);
    };

    getKenzieKars();
  }, []);

  useEffect(() => {
    const getCarsFromApi = async () => {
      const { data } = await api.get(`/cars?${requestString}`);

      setFiltered(data);
    };

    getCarsFromApi();
  }, [requestString]);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <Box sx={styleModal}>
            <div className={style.modalFilter}>
              <div className={style.modalClose}>
                <p>Filtro</p>
                <span onClick={handleClose}>X</span>
              </div>

              <div className={style.modalSection}>
                <h2>Marca</h2>
                <ul>
                  <li>
                    <button className={buttonStyle.no_style_button}>
                      General Motors
                    </button>
                  </li>
                  {possibleBrands?.map((brand, index) => {
                    return (
                      <li key={index}>
                        <button className={buttonStyle.no_style_button}>
                          {brand[0].toUpperCase() + brand.slice(1)}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Modelo</h2>
                <ul>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.model === "Civic"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Civic
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.model === "Corolla"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Corolla
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.model === "Cruze"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Cruze
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.model === "Fit"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Fit
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.model === "Gol"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Gol
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.model === "Ka"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Ka
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.model === "Onix"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Onix
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.model === "Porsche"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Porsche 718
                    </a>
                  </li>
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Cor</h2>
                <ul>{}</ul>
              </div>

              <div className={style.modalSection}>
                <h2>Ano</h2>
                <ul>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.year === "2022"
                        );
                        setFiltered(filter);
                      }}
                    >
                      2022
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.year === "2021"
                        );
                        setFiltered(filter);
                      }}
                    >
                      2021
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.year === "2018"
                        );
                        setFiltered(filter);
                      }}
                    >
                      2018
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.year === "2015"
                        );
                        setFiltered(filter);
                      }}
                    >
                      2015
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.year === "2013"
                        );
                        setFiltered(filter);
                      }}
                    >
                      2013
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.year === "2012"
                        );
                        setFiltered(filter);
                      }}
                    >
                      2012
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.year === "2010"
                        );
                        setFiltered(filter);
                      }}
                    >
                      2010
                    </a>
                  </li>
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Combustível</h2>
                <ul>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.fuelType === "Diesel"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Diesel
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.fuelType === "Etanol"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Etanol
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.fuelType === "Gasolina"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Gasolina
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const filter: any = announcements.filter(
                          (item) => item.fuelType === "Flex"
                        );
                        setFiltered(filter);
                      }}
                    >
                      Flex
                    </a>
                  </li>
                </ul>
              </div>

              <div className={style.modalBtns}>
                <h2>Km</h2>
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const filter: any = announcements.filter(
                        (item) => item.miles === "Poucas"
                      );
                      setFiltered(filter);
                    }}
                  >
                    Mínima
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const filter: any = announcements.filter(
                        (item) => item.miles === "Muitas"
                      );
                      setFiltered(filter);
                    }}
                  >
                    Máxima
                  </button>
                </div>
              </div>

              <div className={style.modalBtns}>
                <h2>Preço</h2>
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const filter: any = announcements
                        .slice()
                        .sort((a, b) => a.price - b.price);
                      setFiltered(filter);
                    }}
                  >
                    Mínima
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const filter: any = announcements
                        .slice()
                        .sort((a, b) => b.price - a.price);
                      setFiltered(filter);
                    }}
                  >
                    Máxima
                  </button>
                </div>
              </div>
              <div className={style.modalBottom}>
                <button>Ver anúncios</button>
              </div>
            </div>
          </Box>
        </Slide>
      </Modal>

      <div className={style.mainContainer}>
        <div className={style.leftContainer}>
          <div className={style.list}>
            <h2>Marca</h2>
            <ul>
              <li>
                <button
                  className={buttonStyle.no_style_button}
                  onClick={() => {
                    setRequestString("");
                  }}
                >
                  General Motors
                </button>
              </li>
              {possibleBrands?.map((brand, index) => {
                return (
                  <li key={index}>
                    <button
                      className={buttonStyle.no_style_button}
                      onClick={() => {
                        if (requestString.includes("brand")) {
                          return setRequestString((prevState) => {
                            let prevStateArr = prevState.split("&");

                            prevStateArr = prevStateArr.filter(
                              (elem) => !elem.includes("brand")
                            );

                            prevState = prevStateArr.join("&");

                            return `${prevState}brand=${brand}&`;
                          });
                        }

                        return setRequestString(
                          (prevState) => `${prevState}brand=${brand}&`
                        );
                      }}
                    >
                      {brand[0].toUpperCase() + brand.slice(1)}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={style.list}>
            <h2>Modelo</h2>
            <ul>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.model === "Civic"
                    );
                    setFiltered(filter);
                  }}
                >
                  Civic
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.model === "Corolla"
                    );
                    setFiltered(filter);
                  }}
                >
                  Corolla
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.model === "Cruze"
                    );
                    setFiltered(filter);
                  }}
                >
                  Cruze
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.model === "Fit"
                    );
                    setFiltered(filter);
                  }}
                >
                  Fit
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.model === "Gol"
                    );
                    setFiltered(filter);
                  }}
                >
                  Gol
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.model === "Ka"
                    );
                    setFiltered(filter);
                  }}
                >
                  Ka
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.model === "Onix"
                    );
                    setFiltered(filter);
                  }}
                >
                  Onix
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.model === "Porsche"
                    );
                    setFiltered(filter);
                  }}
                >
                  Porsche 718
                </a>
              </li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Cor</h2>
            <ul>
              {filtered?.map((car, index) => {                
                return (
                  <li key={index}>
                    <button className={buttonStyle.no_style_button}>{car.color}</button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={style.list}>
            <h2>Ano</h2>
            <ul>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.year === "2022"
                    );
                    setFiltered(filter);
                  }}
                >
                  2022
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.year === "2021"
                    );
                    setFiltered(filter);
                  }}
                >
                  2021
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.year === "2018"
                    );
                    setFiltered(filter);
                  }}
                >
                  2018
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.year === "2015"
                    );
                    setFiltered(filter);
                  }}
                >
                  2015
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.year === "2013"
                    );
                    setFiltered(filter);
                  }}
                >
                  2013
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.year === "2012"
                    );
                    setFiltered(filter);
                  }}
                >
                  2012
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.year === "2010"
                    );
                    setFiltered(filter);
                  }}
                >
                  2010
                </a>
              </li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Combustível</h2>
            <ul>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.fuelType === "Diesel"
                    );
                    setFiltered(filter);
                  }}
                >
                  Diesel
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.fuelType === "Etanol"
                    );
                    setFiltered(filter);
                  }}
                >
                  Etanol
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.fuelType === "Gasolina"
                    );
                    setFiltered(filter);
                  }}
                >
                  Gasolina
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    const filter: any = announcements.filter(
                      (item) => item.fuelType === "Flex"
                    );
                    setFiltered(filter);
                  }}
                >
                  Flex
                </a>
              </li>
            </ul>
          </div>

          <div className={style.asideButtons}>
            <h2>Km</h2>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const filter: any = announcements.filter(
                    (item) => item.miles === "Poucas"
                  );
                  setFiltered(filter);
                }}
              >
                Mínima
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const filter: any = announcements.filter(
                    (item) => item.miles === "Muitas"
                  );
                  setFiltered(filter);
                }}
              >
                Máxima
              </button>
            </div>
          </div>

          <div className={style.asideButtons}>
            <h2>Preço</h2>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const filter: any = announcements
                    .slice()
                    .sort((a, b) => a.price - b.price);
                  setFiltered(filter);
                }}
              >
                Mínima
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const filter: any = announcements
                    .slice()
                    .sort((a, b) => b.price - a.price);
                  setFiltered(filter);
                }}
              >
                Máxima
              </button>
            </div>
          </div>
        </div>
        <ul className={style.rightContainer}>
          {filtered?.map((announcement: any) => (
            <Announcement key={announcement.id} announcement={announcement} />
          ))}
        </ul>
      </div>

      <div className={style.filtersBtn}>
        <button onClick={handleOpen}>Filtros</button>
      </div>

      <div className={style.nextPrev}>
        <span>1 de 2</span>
        <a href="">Seguinte {">"}</a>
      </div>
    </>
  );
}
