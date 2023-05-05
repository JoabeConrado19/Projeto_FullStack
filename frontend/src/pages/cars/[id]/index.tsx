import { useRouter } from "next/router";

import style from "@/styles/car_details_page/index.module.css";
import buttonStyle from "@/components/Buttons/styles.module.css";

import DetailContainerComponent from "@/components/DetailsContainer";
import { Button } from "@mui/material";

import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import api from "@/services/api";
import { ICar } from "@/interfaces/car";
import { announcementPage } from "@/context/AnnouncementPageContext";
import { destroyCookie, parseCookies } from "nookies";
import { parseJwt } from "@/utils/jwt";

export default function CarsDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [targerCarData, setTargetCarData] = useState<ICar>();
  const [commentInput, setCommentInput] = useState<string>();
  const [comments, setComments] = useState<any>([]);

  function handleCommentInputChange(event: any) {
    setCommentInput(event.target.value);
  }

  const { user } = useContext(announcementPage);

  useEffect(() => {

    const getAnnunc = async () => {
      try {
        const { data }: { data: any } = await api.get(`/cars/${id}`);

        setTargetCarData(data);
        setComments([...data.comments]);
      } catch {}
    };

    console.log(id);

    getAnnunc();
  }, [id]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data }: { data: any } = await api.get(`/cars/${id}`);

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
                <Button
                  color="primary"
                  variant="contained"
                  className={buttonStyle.fit_content_button}
                >
                  Comprar
                </Button>
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
                  <li>
                    <img
                      src={targerCarData?.imagesUrl}
                      width={2048}
                      height={1536}
                      alt="Car image"
                    />
                  </li>
                  <li>
                    <img
                      src={targerCarData?.imagesUrl}
                      width={2048}
                      height={1536}
                      alt="Car image"
                    />
                  </li>
                  <li>
                    <img
                      src={targerCarData?.imagesUrl}
                      width={2048}
                      height={1536}
                      alt="Car image"
                    />
                  </li>
                  <li>
                    <img
                      src={targerCarData?.imagesUrl}
                      width={2048}
                      height={1536}
                      alt="Car image"
                    />
                  </li>
                  <li>
                    <img
                      src={targerCarData?.imagesUrl}
                      width={2048}
                      height={1536}
                      alt="Car image"
                    />
                  </li>
                  <li>
                    <img
                      src={targerCarData?.imagesUrl}
                      width={2048}
                      height={1536}
                      alt="Car image"
                    />
                  </li>
                </ul>
              </DetailContainerComponent>
              <DetailContainerComponent
                customClassName={style.profile_container}
              >
                <div className={style.profile_pic}>
                </div>
                <p className="headline-6-600">{targerCarData?.user.name}</p>
                <span className="body-1-400">
                  {targerCarData?.user.description}
                </span>
                <Button
                  className={`
                                            ${buttonStyle.black_white_button} 
                                            ${buttonStyle.fit_content_button}
                                        `}
                  style={{
                    margin: "0 auto",
                  }}
                >
                  Ver todos os anúncios
                </Button>
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
                {
                  comments?.map((comment: any, index) => (
                    <li key={index}>
                      <div className={style.perfil_infos}>
                        <p className={style.comments_profile_pic}>JL</p>
                        <p className="body-2-500">{comment.user.name}</p>
                        <div className={style.gray_dot}></div>
                        <span className="body-2-400">há 3 dias</span>
                      </div>
                      <p className="body-2-400">{comment.description}</p>
                    </li>
                  ))
                }
              </ul>
            </DetailContainerComponent>
            <DetailContainerComponent>
              <div className={style.perfil_infos}>
                <p className={style.comments_profile_pic}>JL</p>
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
