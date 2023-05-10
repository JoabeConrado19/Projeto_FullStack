import { useRouter } from "next/router";
import React from "react";
import style from "@/styles/car_details_page/index.module.css";
import buttonStyle from "@/components/Buttons/styles.module.css";
import DetailContainerComponent from "@/components/DetailsContainer";
import { Button } from "@mui/material";
<<<<<<< HEAD
import Image from "next/image";
=======

>>>>>>> b8602793ee17a7d1f01e5038aa42f270a38e53f1
import { useEffect, useState, useContext } from "react";
import api from "@/services/api";
import { ICar, IImages } from "@/interfaces/car";
import { announcementPage } from "@/context/AnnouncementPageContext";
import { parseCookies } from "nookies";
import { parseJwt } from "@/utils/jwt";
import moment from "moment";
import "moment/locale/pt-br";

export default function CarsDetailPage() {
<<<<<<< HEAD
  moment.locale("pt-br");
  const now = moment();
=======
>>>>>>> b8602793ee17a7d1f01e5038aa42f270a38e53f1
  const router = useRouter();
  const id = router.query.id;
  if (!id) {
    return <div>Carregando...</div>;
  }
  const [targerCarData, setTargetCarData] = useState<ICar>();
  const [commentInput, setCommentInput] = useState<string>();
  const [comments, setComments] = useState<any>([]);

  function handleCommentInputChange(event: any) {
    setCommentInput(event.target.value);
  }

  const { user } = useContext(announcementPage);

  useEffect(() => {
    console.log(id);

    const getAnnunc = async () => {
<<<<<<< HEAD
      try {
        const { data }: { data: any } = await api.get(`/cars/${id}`);

        setTargetCarData(data);
        setComments([...data.comments]);
      } catch {}
    };

    getAnnunc();
  }, []);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data }: { data: any } = await api.get(`/cars/${id}`);
=======
      try {
        const { data }: { data: any } = await api.get(`/cars/${id}`);
        console.log(data);
        setTargetCarData(data);
        setComments([...data.comments]);
      } catch {}
    };
    getAnnunc();
  }, [id]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data }: { data: any } = await api.get(`/cars/${id}`);
>>>>>>> b8602793ee17a7d1f01e5038aa42f270a38e53f1

        setComments([...data.comments]);
      } catch {}
    };
    getComments();
  }, [comments]);

  return (
    <>
      <div className={style.page}>
        <div className={style.main_content}>
          <div className={style.wrap_container}>
            <div className={style.page_first_section}>
              <DetailContainerComponent>
                <img
                  src={targerCarData?.imagesUrl}
                  alt="Car image"
                  className={style.mainCarImage}
                />
              </DetailContainerComponent>
              <DetailContainerComponent containerPadding="24px">
                <h1 className={`headline-6-600 ${style.carName}`}>
                  {targerCarData?.model}
                </h1>
                <div className={style.car_price_and_details}>
                  <ul className={style.car_details_list}>
                    <li className="body-2-500">{targerCarData?.year}</li>
                    <li className="body-2-500">{targerCarData?.miles} KM</li>
                  </ul>
                  <span className="body-1-600">R$ {targerCarData?.price}</span>
                </div>
                <a
                  color="primary"
                  className={`${buttonStyle.fit_content_button} ${buttonStyle.buyerButton}`}
                  href={`https://wa.me/55${targerCarData?.user.phone}?text=Tenho%20interesse%20em%20comprar%20seu%20carro%20${targerCarData?.model}.`}
                >
                  Comprar
                </a>
              </DetailContainerComponent>
              <DetailContainerComponent>
                <p className="headline-6-600">Descrição</p>
                <p className="body-1-400">{targerCarData?.description}</p>
              </DetailContainerComponent>
            </div>
            <div className={style.page_second_section}>
              <DetailContainerComponent containerPadding="32px">
                <p className="headline-6-600">Fotos</p>
                <ul className={style.car_images_list}>
                  {targerCarData?.imagesUrl &&
                    targerCarData.images.map(
                      (image: IImages, index: number) => (
                        <li>
                          <img src={image.url} alt="Car image" />
                        </li>
                      )
                    )}
                </ul>
              </DetailContainerComponent>
              <DetailContainerComponent
                customClassName={style.profile_container}
              >
                <div
                  className={style.profile_pic}
                  style={{ backgroundColor: targerCarData?.user.color }}
                >
                  {targerCarData?.user.name
                    .split(" ", 2)
                    .map((name: string) => name.charAt(0))
                    .join("")}
                </div>
                <p className="headline-6-600">{targerCarData?.user.name}</p>
                <span className="body-1-400">
                  {targerCarData?.user.description}
                </span>
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    backgroundColor: "black",
                    padding: "10px 12px",
                    width: "206px",
                    borderRadius: "4px",
                    margin: "0 auto",
                  }}
                  href={`${router.basePath}/announcement/${targerCarData?.userId}`}
                >
                  Ver todos os anuncios
                </a>
              </DetailContainerComponent>
            </div>
          </div>
          <div className={style.page_third_section}>
            <DetailContainerComponent
              containerPadding="32px 24px"
              customClassName={style.commentary_section}
            >
              <p className="headline-6-600">Comentários</p>
              <ul className={style.commentary_list}>
                {comments ? (
                  comments.map((comment: any) => {
                    moment.locale("pt-br");
                    const date = moment(comment.createdAt);

                    return (
                      <li>
                        <div className={style.perfil_infos}>
                          <p
                            className={style.comments_profile_pic}
                            style={{ backgroundColor: comment.user.color }}
                          >
                            {comment.user.name
                              .split(" ", 2)
                              .map((name: string) => name.charAt(0))
                              .join("")}
                          </p>
                          <p className="body-2-500">{comment.user.name}</p>
                          <div className={style.gray_dot}></div>
                          <span className="body-2-400">
                            <p>
                              {moment(comment.createdAt)
                                .locale("pt-br")
                                .fromNow()}
                            </p>
                          </span>
                        </div>
                        <p className="body-2-400">{comment.description}</p>
                      </li>
                    );
                  })
                ) : (
                  <p></p>
                )}
              </ul>
            </DetailContainerComponent>
            <DetailContainerComponent>
              <div className={style.perfil_infos}>
                <p
                  className={style.comments_profile_pic}
                  style={{ backgroundColor: user?.color }}
                >
                  {user?.name
                    .split(" ", 2)
                    .map((name: string) => name.charAt(0))
                    .join("")}
                </p>
                <p className="body-2-500">{user?.name}</p>
              </div>
              <div className={style.comment_textarea}>
                <textarea
                  placeholder="Esse carro é muito bom, recomendo muito para o dia a dia!"
                  className="body-1-400"
                  rows={3}
                  onChange={handleCommentInputChange}
                  value={commentInput}
                ></textarea>
                <Button
                  variant="contained"
                  onClick={() => {
                    const getUser = async () => {
                      const userToken = parseCookies().tokenMotorsShop;
                      if (userToken) {
                        try {
                          api.defaults.headers.common.Authorization = `Bearer ${userToken}`;

                          const tokenUserData = parseJwt(userToken);

                          const { data }: { data: any } = await api.post(
                            `/cars/${id}/comments/${tokenUserData.sub}`,
                            { description: commentInput }
                          );

                          const { data2 }: { data2: any } = await api.get(
                            `/cars/${id}`
                          );

                          setComments(data2.comments);

                          // setComments((prevComments :any) => [{}, ...prevComments]);

                          // setUserAnnouncements(data.cars);
                          // setUser(data);
                        } catch {
                          // destroyCookie(undefined, "tokenMotorsShop");
                          // router.push("/login");
                        }
                      }
                    };

                    getUser();
                  }}
                >
                  Comentar
                </Button>
              </div>
            </DetailContainerComponent>
          </div>
        </div>
      </div>
    </>
  );
}
