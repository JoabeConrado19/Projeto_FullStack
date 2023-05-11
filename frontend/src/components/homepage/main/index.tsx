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
import { ButtonComponent, FilterButtonComponent } from "@/components/Buttons";
import { InputComponent } from "@/components/Input";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";
import { announcementPage } from "@/context/AnnouncementPageContext";

import EmptyCard from "@/components/EmptyCard";

export default function MainHome() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [filtered, setFiltered] = useState<ICar[] | null>(null);

  const [avaliableBrands, setAvaliableBrands] = useState<string[]>([]);
  const [avaliableColors, setAvaliableColors] = useState<string[]>([]);
  const [avaliableModels, setAvaliableModels] = useState<string[]>([]);
  const [avaliableYears, setAvaliableYears] = useState<string[]>([]);
  const [avaliableFuelTypes, setAvaliableFuelTypes] = useState<
    string[] | number[]
  >([]);

  const [requestString, setRequestString] = useState<string | null>(null);

  const { announcements }: AnnouncementsList = useContext(PageContext);
  const { user }: any = useContext(announcementPage);
  const route = useRouter();
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

      setAvaliableBrands(karsArr);
    };

    getKenzieKars();
  }, []);

  useEffect(() => {
    const getCarsFromApi = async () => {
      const { data }: { data: ICar[] } = await api.get(
        `/cars?${requestString}`
      );

      setFiltered(data);

      const avaliableOptions = data.reduce(
        (
          acc: {
            colors: string[];
            models: string[];
            years: string[];
            fuelTypes: string[];
          },
          act
        ) => {
          if (!acc.colors.includes(act.color)) {
            acc.colors.push(act.color);
          }

          if (!acc.models.includes(act.model)) {
            acc.models.push(act.model);
          }

          if (!acc.years.includes(act.year)) {
            acc.years.push(act.year);
          }

          if (!acc.fuelTypes.includes(act.fuelType as string)) {
            acc.fuelTypes.push(act.fuelType as string);
          }

          return acc;
        },
        {
          colors: [],
          models: [],
          years: [],
          fuelTypes: [],
        }
      );

      setAvaliableColors(avaliableOptions.colors);
      setAvaliableModels(avaliableOptions.models);
      setAvaliableYears(avaliableOptions.years);
      setAvaliableFuelTypes(avaliableOptions.fuelTypes);
    };

    getCarsFromApi();
  }, [requestString]);

  const { register, handleSubmit } = useForm();

  const priceFilter = (data: any) => {
    const { priceMin, priceMax } = data as {
      priceMin: string;
      priceMax: string;
    };

    if (
      requestString?.includes(`priceMin`) ||
      requestString?.includes(`priceMax`)
    ) {
      return setRequestString(() => {
        let prevStateArr = requestString?.split("&");

        prevStateArr = prevStateArr?.filter(
          (elem) => !elem.includes(`priceMin`) && !elem.includes(`priceMax`)
        ) as string[];

        const newRequestString = prevStateArr?.join("&");

        return `${newRequestString}&priceMin=${priceMin}&priceMax=${priceMax}`;
      });
    }

    return setRequestString(
      `${requestString}&priceMin=${priceMin}&priceMax=${priceMax}`
    );
  };

  const milesFilter = (data: any) => {
    const { kmMin, kmMax } = data as { kmMin: string; kmMax: string };

    if (requestString?.includes(`kmMin`) || requestString?.includes(`kmMax`)) {
      return setRequestString(() => {
        let prevStateArr = requestString?.split("&");

        prevStateArr = prevStateArr?.filter(
          (elem) => !elem.includes(`kmMin`) && !elem.includes(`kmMax`)
        ) as string[];

        const newRequestString = prevStateArr?.join("&");

        return `${newRequestString}&kmMin=${kmMin}&kmMax=${kmMax}`;
      });
    }

    return setRequestString(`${requestString}&kmMin=${kmMin}&kmMax=${kmMax}`);
  };

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
                <div className={style.filters_header}>
                  <h2>Filtros</h2>
                  <ul>
                    <li>
                      <button
                        className={buttonStyle.button_base}
                        onClick={() => {
                          setRequestString(null);
                        }}
                      >
                        Limpar filtros
                      </button>
                    </li>
                    {requestString
                      ?.split("&")
                      .slice(1)
                      .filter((elem) => {
                        if (!elem.includes("Max")) {
                          return !elem.includes("Min");
                        }
                      })
                      .map((stringFragment, index) => {
                        const splitedArr = stringFragment.split("=");

                        return (
                          <>
                            <li key={index}>
                              <button
                                className={buttonStyle.button_base}
                                onClick={() => {
                                  setRequestString((prevState) => {
                                    const newString = prevState
                                      ?.split("&")
                                      .filter(
                                        (strFragment: string) =>
                                          !strFragment.includes(splitedArr[0])
                                      );

                                    return newString?.join("&")!;
                                  });
                                }}
                              >
                                <div className={style.clear_filter_button}>
                                  <span>x</span>
                                </div>
                                <p>{`${splitedArr[1]}`}</p>
                              </button>
                            </li>
                          </>
                        );
                      })}
                  </ul>
                </div>
              </div>

              <div className={style.modalSection}>
                <h2>Marca</h2>
                <ul>
                  {avaliableBrands?.map((brand, index) => {
                    return (
                      <li key={index}>
                        <FilterButtonComponent
                          filterName="brand"
                          optionName={brand}
                          requestString={requestString}
                          setRequestString={setRequestString}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Modelo</h2>
                <ul>
                  {avaliableModels?.map((model, index) => {
                    return (
                      <li key={index}>
                        <FilterButtonComponent
                          filterName="model"
                          optionName={model}
                          requestString={requestString}
                          setRequestString={setRequestString}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Cor</h2>
                <ul>
                  {avaliableColors?.map((color, index) => {
                    return (
                      <li key={index}>
                        <FilterButtonComponent
                          filterName="color"
                          optionName={color}
                          requestString={requestString}
                          setRequestString={setRequestString}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Ano</h2>
                <ul>
                  {avaliableYears?.map((year, index) => {
                    return (
                      <li key={index}>
                        <FilterButtonComponent
                          filterName="year"
                          optionName={year}
                          requestString={requestString}
                          setRequestString={setRequestString}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Combustível</h2>
                <ul>
                  {avaliableFuelTypes?.map((fuelType, index) => {
                    return (
                      <li key={index}>
                        <FilterButtonComponent
                          filterName="fuelType"
                          optionName={fuelType as string}
                          requestString={requestString}
                          setRequestString={setRequestString}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={style.modalBtns}>
                <h2>Km</h2>
                <form onSubmit={handleSubmit(priceFilter)}>
                  <InputComponent
                    inputId="min-price"
                    label="Mínima"
                    register={register("priceMin")}
                  />
                  <InputComponent
                    inputId="max-price"
                    label="Máxima"
                    register={register("priceMax")}
                  />
                  <ButtonComponent type="submit">Filtrar</ButtonComponent>
                </form>
              </div>

              <div className={style.modalBtns}>
                <h2>Preço</h2>
                <form onSubmit={handleSubmit(milesFilter)}>
                  <InputComponent
                    inputId="min-km"
                    label="Mínima"
                    register={register("kmMin")}
                  />
                  <InputComponent
                    inputId="max-km"
                    label="Máxima"
                    register={register("kmMax")}
                  />
                  <ButtonComponent type="submit">Filtrar</ButtonComponent>
                </form>
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
          <div className={style.filters_header}>
            <h2>Filtros</h2>
            <ul>
              <li>
                <button
                  className={buttonStyle.button_base}
                  onClick={() => {
                    setRequestString(null);
                  }}
                >
                  Limpar filtros
                </button>
              </li>
              {requestString
                ?.split("&")
                .slice(1)
                .filter((elem) => {
                  if (!elem.includes("Max")) {
                    return !elem.includes("Min");
                  }
                })
                .map((stringFragment, index) => {
                  const splitedArr = stringFragment.split("=");

                  return (
                    <>
                      <li key={index}>
                        <button
                          className={buttonStyle.button_base}
                          onClick={() => {
                            setRequestString((prevState) => {
                              const newString = prevState
                                ?.split("&")
                                .filter(
                                  (strFragment: string) =>
                                    !strFragment.includes(splitedArr[0])
                                );

                              return newString?.join("&")!;
                            });
                          }}
                        >
                          <div className={style.clear_filter_button}>
                            <span>x</span>
                          </div>
                          <p>{`${splitedArr[1]}`}</p>
                        </button>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>

          <div className={style.list}>
            <h2>Marca</h2>
            <ul>
              {avaliableBrands?.map((brand, index) => {
                return (
                  <li key={index}>
                    <FilterButtonComponent
                      filterName="brand"
                      optionName={brand}
                      requestString={requestString}
                      setRequestString={setRequestString}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={style.list}>
            <h2>Modelo</h2>
            <ul>
              {avaliableModels?.map((model, index) => {
                return (
                  <li key={index}>
                    <FilterButtonComponent
                      filterName="model"
                      optionName={model}
                      requestString={requestString}
                      setRequestString={setRequestString}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={style.list}>
            <h2>Cor</h2>
            <ul>
              {avaliableColors?.map((color, index) => {
                return (
                  <li key={index}>
                    <FilterButtonComponent
                      filterName="color"
                      optionName={color}
                      requestString={requestString}
                      setRequestString={setRequestString}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={style.list}>
            <h2>Ano</h2>
            <ul>
              {avaliableYears?.map((year, index) => {
                return (
                  <li key={index}>
                    <FilterButtonComponent
                      filterName="year"
                      optionName={year}
                      requestString={requestString}
                      setRequestString={setRequestString}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={style.list}>
            <h2>Combustível</h2>
            <ul>
              {avaliableFuelTypes?.map((fuelType, index) => {
                return (
                  <li key={index}>
                    <FilterButtonComponent
                      filterName="fuelType"
                      optionName={fuelType as string}
                      requestString={requestString}
                      setRequestString={setRequestString}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={style.asideButtons}>
            <h2>Km</h2>
            <form onSubmit={handleSubmit(priceFilter)}>
              <InputComponent
                inputId="min-price"
                label="Mínima"
                register={register("priceMin")}
              />
              <InputComponent
                inputId="max-price"
                label="Máxima"
                register={register("priceMax")}
              />
              <ButtonComponent type="submit">Filtrar</ButtonComponent>
            </form>
          </div>

          <div className={style.asideButtons}>
            <h2>Preço</h2>
            <form onSubmit={handleSubmit(milesFilter)}>
              <InputComponent
                inputId="min-km"
                label="Mínima"
                register={register("kmMin")}
              />
              <InputComponent
                inputId="max-km"
                label="Máxima"
                register={register("kmMax")}
              />
              <ButtonComponent type="submit">Filtrar</ButtonComponent>
            </form>
          </div>
        </div>

        <ul className={style.rightContainer}>
          {filtered?.length ? (
            filtered?.map((announcement: any) => (
              <Announcement key={announcement.id} announcement={announcement} />
            ))
          ) : !filtered?.length && user?.accountType == "Vendedor" ? (
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <h2
                style={{ margin: "0 auto", fontSize: "1.5rem", width: "100%", textAlign: 'center' }}
              >
                Sem anuncios no momento clique{" "}
                <a
                  style={{ textDecoration: "underline", color: "blue" }}
                  href={`${route.basePath}/announcement/${user?.id}`}
                >
                  aqui
                </a>{" "}
                para criar um anuncio
              </h2>
              <EmptyCard />
            </div>
          ) : (
            <div style={{display: 'flex', flexDirection: 'column',  gap: '1.5rem'}}>
              <h2
                style={{ margin: "0 auto", fontSize: "1.5rem", width: "100%", textAlign: 'center' }}
              >
                Sem anuncios no momento! espere até que algum <u>Vendedor</u>{" "}
                publique!
              </h2>
              <EmptyCard />
            </div>
          )}
        </ul>

        <div className={style.filtersBtn}>
          <button onClick={handleOpen}>Filtros</button>
        </div>
      </div>
        {filtered?.length ? (
          <div className={style.nextPrev}>
            <span>1 de 2</span>
            <a href="">Seguinte {">"}</a>
          </div>
        ) : null}
    </>
  );
}
