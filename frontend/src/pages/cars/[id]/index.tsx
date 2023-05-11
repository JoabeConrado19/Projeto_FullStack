import buttonStyle from "@/components/Buttons/styles.module.css";
import DetailContainerComponent from "@/components/DetailsContainer";
import EditCommentModal from "@/components/Modals/EditCommentModal";
import { announcementPage } from "@/context/AnnouncementPageContext";
import { ICar, IImages } from "@/interfaces/car";
import api from "@/services/api";
import style from "@/styles/car_details_page/index.module.css";
import { parseJwt } from "@/utils/jwt";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import moment from "moment";
import "moment/locale/pt-br";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";


export default function CarsDetailPage() {

  const [targerCarData, setTargetCarData] = useState<ICar>();
  const [commentInput, setCommentInput] = useState<string>();
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [comment, setComment] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);

  const { user } = useContext(announcementPage);

  const router = useRouter();

  const id = router.query.id;
  
  useEffect(() => {

    const getAnnunc = async () => {
      try {
        const { data }: { data: any } = await api.get(`/cars/${id}`);

        setTargetCarData(data);
        setComments([...data.comments]);
      } catch { }
    };

    getAnnunc();
  }, [id]);
  
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data }: { data: any } = await api.get(`/cars/${id}`);
        
        setComments([...data.comments]);
        
      } catch { }
    };
    getComments()
    
  }, [comments]);
  
  moment.locale("pt-br");
  const now = moment();

  function handleCommentInputChange(event: any) {
    setCommentInput(event.target.value);
  }

  if (!id) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {showEditModal ? (
        <EditCommentModal closeModalFunc={setShowEditModal} comment={comment} user={user} />
      ) : null}
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
                        <li key={index}>
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
                      <li key={comment.id}>
                        <div className={style.perfil_infos2}>
                          <div className={style.leftTitleComment}>
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
                                {moment(comment.updatedAt)
                                  .locale("pt-br")
                                  .fromNow()}
                              </p>
                            </span>
                          </div>
                          {comment.user.name === user?.name && (
                            <div className={style.rigthTitleComment}>
                              <EditIcon className={style.commentIcon} onClick={() => {
                                setShowEditModal((prevState) => !prevState)
                                setComment(comment)
                              }}

                              />

                            </div>
                          )}
                        </div>
                        <p className="body-2-400">{comment.description} </p>
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
                        } catch { }
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
