import { PageContext } from '@/context/HomePageContext';
import style from '../../../styles/homepage/index.module.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';

export default function MainHome() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { announcements } = useContext(PageContext);

  const styleModal = {
    position: 'absolute' as 'absolute',
    top: '0%',
    left: '0%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

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
                  <li><a href="">General Motors</a></li>
                  <li><a href="">Fiat</a></li>
                  <li><a href="">Ford</a></li>
                  <li><a href="">Honda</a></li>
                  <li><a href="">Porsche</a></li>
                  <li><a href="">volswagen</a></li>
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Modelo</h2>
                <ul>
                  <li><a href="">Civic</a></li>
                  <li><a href="">Corolla</a></li>
                  <li><a href="">Cruze</a></li>
                  <li><a href="">Fit</a></li>
                  <li><a href="">Gol</a></li>
                  <li><a href="">Ka</a></li>
                  <li><a href="">Onix</a></li>
                  <li><a href="">Porsche 718</a></li>
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Cor</h2>
                <ul>
                  <li><a href="">Azul</a></li>
                  <li><a href="">Branca</a></li>
                  <li><a href="">Cinza</a></li>
                  <li><a href="">Fit</a></li>
                  <li><a href="">Prata</a></li>
                  <li><a href="">Preta</a></li>
                  <li><a href="">Verde</a></li>
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Ano</h2>
                <ul>
                  <li><a href="">2022</a></li>
                  <li><a href="">2021</a></li>
                  <li><a href="">2018</a></li>
                  <li><a href="">2015</a></li>
                  <li><a href="">2013</a></li>
                  <li><a href="">2012</a></li>
                  <li><a href="">2010</a></li>
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Combustível</h2>
                <ul>
                  <li><a href="">Diesel</a></li>
                  <li><a href="">Etanol</a></li>
                  <li><a href="">Gasolina</a></li>
                  <li><a href="">Flex</a></li>
                </ul>
              </div>

              <div className={style.modalBtns}>
                <h2>Km</h2>
                <div>
                  <button>Mínima</button>
                  <button>Máxima</button>
                </div>
              </div>

              <div className={style.modalBtns}>
                <h2>Preço</h2>
                <div>
                  <button>Mínima</button>
                  <button>Máxima</button>
                </div>
              </div>
              <div className={style.modalBottom}>
                <button>Ver anúncios</button></div>
            </div>
          </Box>
        </Slide>
      </Modal>
      
      <div className={style.mainContainer}>
        <div className={style.leftContainer}>

          <div className={style.list}>
            <h2>Marca</h2>
            <ul>
              <li><a href="">General Motors</a></li>
              <li><a href="">Fiat</a></li>
              <li><a href="">Ford</a></li>
              <li><a href="">Honda</a></li>
              <li><a href="">Porsche</a></li>
              <li><a href="">volswagen</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Modelo</h2>
            <ul>
              <li><a href="">Civic</a></li>
              <li><a href="">Corolla</a></li>
              <li><a href="">Cruze</a></li>
              <li><a href="">Fit</a></li>
              <li><a href="">Gol</a></li>
              <li><a href="">Ka</a></li>
              <li><a href="">Onix</a></li>
              <li><a href="">Porsche 718</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Cor</h2>
            <ul>
              <li><a href="">Azul</a></li>
              <li><a href="">Branca</a></li>
              <li><a href="">Cinza</a></li>
              <li><a href="">Fit</a></li>
              <li><a href="">Prata</a></li>
              <li><a href="">Preta</a></li>
              <li><a href="">Verde</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Ano</h2>
            <ul>
              <li><a href="">2022</a></li>
              <li><a href="">2021</a></li>
              <li><a href="">2018</a></li>
              <li><a href="">2015</a></li>
              <li><a href="">2013</a></li>
              <li><a href="">2012</a></li>
              <li><a href="">2010</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Combustível</h2>
            <ul>
              <li><a href="">Diesel</a></li>
              <li><a href="">Etanol</a></li>
              <li><a href="">Gasolina</a></li>
              <li><a href="">Flex</a></li>
            </ul>
          </div>

          <div className={style.asideButtons}>
            <h2>Km</h2>
            <div>
              <button>Mínima</button>
              <button>Máxima</button>
            </div>
          </div>

          <div className={style.asideButtons}>
            <h2>Preço</h2>
            <div>
              <button>Mínima</button>
              <button>Máxima</button>
            </div>
          </div>
        </div>
        <ul className={style.rightContainer}>
          {
            announcements.map((announcement) => {
              const price = announcement.price.toLocaleString('pt-BR')
              return (
                <li key={announcement.id}>
                  <div className={style.cardImgContainer}>
                    <img src={announcement.imagesUrl}/>
                  </div>
                  <div className={style.cardTextContainer}>
                    <h3>{announcement.model}</h3>
                    <p>{announcement.description}</p>
                  </div>
                  <div className={style.cardUserContainer}>
                    <div className={style.circle}>
                      JC
                    </div>
                    <p>{announcement.user.name}</p>
                  </div>
                  <div className={style.cardDataContainer}>
                    <div className={style.badge}>
                      <button>{announcement.miles} KM</button>
                      <button>{announcement.year}</button>
                    </div>
                    <p>R$ {price}</p>
                  </div>

                </li>
              )
            })
          } 
        </ul>

      </div>

      <div className={style.filtersBtn}>
        <button onClick={handleOpen}>Filtros</button>
      </div>

      <div className={style.nextPrev}>
        <span>1 de 2</span>
        <a href="">Seguinte {'>'}</a>
      </div>
    </>

  )
}
