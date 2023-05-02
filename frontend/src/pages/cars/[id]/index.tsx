import { useRouter } from "next/router";

import style from "@/styles/carsPage.module.css";
import buttonStyle from "@/styles/buttons.module.css";

import DetailContainerComponent from "@/components/DetailsContainer";
import { Button } from "@mui/material";

import Image from "next/image";
import carImage from "@/assets/carImages/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png";

export default function CarsDetailPage() {
  const router = useRouter();

  return (
    <>
      <div className={style.page}>
        <div className={style.main_content}>
          <div className={style.wrap_container}>
            <div className={style.page_first_section}>
              <DetailContainerComponent>
                <Image
                  src={carImage}
                  alt="Car image"
                  className={style.mainCarImage}
                />
              </DetailContainerComponent>
              <DetailContainerComponent containerPadding="24px">
                <h1 className={`headline-6-600 ${style.carName}`}>
                  Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
                </h1>
                <div className={style.car_price_and_details}>
                  <ul className={style.car_details_list}>
                    <li className="body-2-500">2013</li>
                    <li className="body-2-500">0 KM</li>
                  </ul>
                  <span className="body-1-600">R$ 00.000,00</span>
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
                <p className="body-1-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus ipsa hic veniam animi nulla fuga provident praesentium
                  quas, atque numquam cumque, molestias iste quis ipsum, dolorum
                  modi. Nulla, alias exercitationem!
                </p>
              </DetailContainerComponent>
            </div>
            <div className={style.page_second_section}>
              <DetailContainerComponent containerPadding="32px">
                <p className="headline-6-600">Fotos</p>
                <ul className={style.car_images_list}>
                  <li>
                    <Image src={carImage} alt="Car image" />
                  </li>
                  <li>
                    <Image src={carImage} alt="Car image" />
                  </li>
                  <li>
                    <Image src={carImage} alt="Car image" />
                  </li>
                  <li>
                    <Image src={carImage} alt="Car image" />
                  </li>
                  <li>
                    <Image src={carImage} alt="Car image" />
                  </li>
                  <li>
                    <Image src={carImage} alt="Car image" />
                  </li>
                </ul>
              </DetailContainerComponent>
              <DetailContainerComponent
                customClassName={style.profile_container}
              >
                <div className={style.profile_pic}>
                  <Image src={carImage} alt="Profile image" />
                </div>
                <p className="headline-6-600">Samuel Leão</p>
                <span className="body-1-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, reprehenderit possimus iste vero modi nam itaque
                  nisi recusandae inventore omnis.
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
                <li>
                  <div className={style.perfil_infos}>
                    <p className={style.comments_profile_pic}>JL</p>
                    <p className="body-2-500">Julia Lima</p>
                    <div className={style.gray_dot}></div>
                    <span className="body-2-400">há 3 dias</span>
                  </div>
                  <p className="body-2-400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
                <li>
                  <div className={style.perfil_infos}>
                    <p className={style.comments_profile_pic}>MA</p>
                    <p className="body-2-500">Marcos Antônio</p>
                    <div className={style.gray_dot}></div>
                    <span className="body-2-400">há 8 dias</span>
                  </div>
                  <p className="body-2-400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
                <li>
                  <div className={style.perfil_infos}>
                    <p className={style.comments_profile_pic}>HS</p>
                    <p className="body-2-500">Henrique Sandim</p>
                    <div className={style.gray_dot}></div>
                    <span className="body-2-400">há 2 meses</span>
                  </div>
                  <p className="body-2-400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
              </ul>
            </DetailContainerComponent>
            <DetailContainerComponent>
              <div className={style.perfil_infos}>
                <p className={style.comments_profile_pic}>JL</p>
                <p className="body-2-500">Julia Lima</p>
              </div>
              <div className={style.comment_textarea}>
                <textarea 
                    placeholder="Esse carro é muito bom, recomendo muito para o dia a dia!" className="body-1-400"
                    rows={3}
                ></textarea>
                <Button variant="contained">Comentar</Button>
              </div>
            </DetailContainerComponent>
          </div>
        </div>
      </div>
    </>
  );
}
