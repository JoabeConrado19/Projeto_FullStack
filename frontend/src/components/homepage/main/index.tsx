import { PageContext } from '@/context/HomePageContext';
import style from '../../../styles/homepage/index.module.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { useContext, useState, useEffect } from 'react';
import { AnnouncementsList } from '../../../interfaces/announcement'
import { IAnnouncementsData } from '../../../interfaces/announcement'




export default function MainHome() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filtered, setFiltered] = useState<any>(undefined)

  const { announcements }: AnnouncementsList = useContext(PageContext);

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




  function Announcement({ announcement }: { announcement: IAnnouncementsData }) {
    const price = announcement.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const nome = announcement.user.name
    const nomeSplit = nome.split(" ")
    let novoNome = ""
    if (nomeSplit.length >= 1) {
      novoNome = nomeSplit[0][0].toUpperCase();
      if (nomeSplit.length >= 2) {
        novoNome += nomeSplit[1][0].toUpperCase();
      }
    }
    return (
      <li key={announcement.id}>
        <div className={style.cardImgContainer}>
          <img src={announcement.imagesUrl} />
        </div>
        <div className={style.cardTextContainer}>
          <h3>{announcement.model}</h3>
          <p>{announcement.description}</p>
        </div>
        <div className={style.cardUserContainer}>
          <div className={style.circle} style={{ backgroundColor: announcement.user.color }}>
            {novoNome}
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
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter((item: any) => item.brand.brandName === "General Motors");
                    setFiltered(filter);
                  }}>General Motors</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter((item: any) => item.brand.brandName === "Fiat");
                    setFiltered(filter);
                  }}>Fiat</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter((item: any) => item.brand.brandName === "Ford");
                    setFiltered(filter);
                  }}>Ford</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter((item: any) => item.brand.brandName === "Honda");
                    setFiltered(filter);
                  }}>Honda</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter((item: any) => item.brand.brandName === "Porsche");
                    setFiltered(filter);
                  }}>Porsche</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter((item: any) => item.brand.brandName === "Volswagen");
                    setFiltered(filter);
                  }}>volswagen</a></li>
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Modelo</h2>
                <ul>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.model === "Civic");
                    setFiltered(filter);
                  }}>Civic</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.model === "Corolla");
                    setFiltered(filter);
                  }}>Corolla</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.model === "Cruze");
                    setFiltered(filter);
                  }}>Cruze</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.model === "Fit");
                    setFiltered(filter);
                  }}>Fit</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.model === "Gol");
                    setFiltered(filter);
                  }}>Gol</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.model === "Ka");
                    setFiltered(filter);
                  }}>Ka</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.model === "Onix");
                    setFiltered(filter);
                  }}>Onix</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.model === "Porsche");
                    setFiltered(filter);
                  }}>Porsche 718</a></li>
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Cor</h2>
                <ul>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.color === "cinza");
                    setFiltered(filter);
                  }}>Cinza</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.color === "fit");
                    setFiltered(filter);
                  }}>Fit</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.color === "prata");
                    setFiltered(filter);
                  }}>Prata</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.color === "preto");
                    setFiltered(filter);
                  }}>Preta</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.color === 'verde');
                    setFiltered(filter);
                  }}>Verde</a></li>
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Ano</h2>
                <ul>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.year === "2022");
                    setFiltered(filter);
                  }}>2022</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.year === "2021");
                    setFiltered(filter);
                  }}>2021</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.year === "2018");
                    setFiltered(filter);
                  }}>2018</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.year === "2015");
                    setFiltered(filter);
                  }}>2015</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.year === "2013");
                    setFiltered(filter);
                  }}>2013</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.year === "2012");
                    setFiltered(filter);
                  }}>2012</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.year === "2010");
                    setFiltered(filter);
                  }}>2010</a></li>
                </ul>
              </div>

              <div className={style.modalSection}>
                <h2>Combustível</h2>
                <ul>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.fuelType === "Diesel");
                    setFiltered(filter);
                  }}>Diesel</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.fuelType === "Etanol");
                    setFiltered(filter);
                  }}>Etanol</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.fuelType === "Gasolina");
                    setFiltered(filter);
                  }}>Gasolina</a></li>
                  <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.fuelType === "Flex");
                    setFiltered(filter);
                  }}>Flex</a></li>
                </ul>
              </div>

              <div className={style.modalBtns}>
                <h2>Km</h2>
                <div>
                  <button onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.miles === "Poucas");
                    setFiltered(filter);
                  }}>Mínima</button>
                  <button onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.filter(item => item.miles === "Muitas");
                    setFiltered(filter);
                  }}>Máxima</button>
                </div>
              </div>

              <div className={style.modalBtns}>
                <h2>Preço</h2>
                <div>
                  <button onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.slice().sort((a, b) => a.price - b.price)
                    setFiltered(filter)

                  }}>Mínima</button>
                  <button onClick={(e) => {
                    e.preventDefault()
                    const filter: any = announcements.slice().sort((a, b) => b.price - a.price)
                    setFiltered(filter)

                  }}>Máxima</button>
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
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter((item: any) => item.brand.brandName === "General Motors");
                setFiltered(filter);
              }}>General Motors</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter((item: any) => item.brand.brandName === "Fiat");
                setFiltered(filter);
              }}>Fiat</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter((item: any) => item.brand.brandName === "Ford");
                setFiltered(filter);
              }}>Ford</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter((item: any) => item.brand.brandName === "Honda");
                setFiltered(filter);
              }}>Honda</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter((item: any) => item.brand.brandName === "Porsche");
                setFiltered(filter);
              }}>Porsche</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter((item: any) => item.brand.brandName === "Volswagen");
                setFiltered(filter);
              }}>volswagen</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Modelo</h2>
            <ul>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.model === "Civic");
                setFiltered(filter);
              }}>Civic</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.model === "Corolla");
                setFiltered(filter);
              }}>Corolla</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.model === "Cruze");
                setFiltered(filter);
              }}>Cruze</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.model === "Fit");
                setFiltered(filter);
              }}>Fit</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.model === "Gol");
                setFiltered(filter);
              }}>Gol</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.model === "Ka");
                setFiltered(filter);
              }}>Ka</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.model === "Onix");
                setFiltered(filter);
              }}>Onix</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.model === "Porsche");
                setFiltered(filter);
              }}>Porsche 718</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Cor</h2>
            <ul>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.color === "cinza");
                setFiltered(filter);
              }}>Cinza</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.color === "fit");
                setFiltered(filter);
              }}>Fit</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.color === "prata");
                setFiltered(filter);
              }}>Prata</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.color === "preto");
                setFiltered(filter);
              }}>Preta</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.color === 'verde');
                setFiltered(filter);
              }}>Verde</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Ano</h2>
            <ul>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.year === "2022");
                setFiltered(filter);
              }}>2022</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.year === "2021");
                setFiltered(filter);
              }}>2021</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.year === "2018");
                setFiltered(filter);
              }}>2018</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.year === "2015");
                setFiltered(filter);
              }}>2015</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.year === "2013");
                setFiltered(filter);
              }}>2013</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.year === "2012");
                setFiltered(filter);
              }}>2012</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.year === "2010");
                setFiltered(filter);
              }}>2010</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Combustível</h2>
            <ul>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.fuelType === "Diesel");
                setFiltered(filter);
              }}>Diesel</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.fuelType === "Etanol");
                setFiltered(filter);
              }}>Etanol</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.fuelType === "Gasolina");
                setFiltered(filter);
              }}>Gasolina</a></li>
              <li><a href="" onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.fuelType === "Flex");
                setFiltered(filter);
              }}>Flex</a></li>
            </ul>
          </div>

          <div className={style.asideButtons}>
            <h2>Km</h2>
            <div>
              <button onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.miles === "Poucas");
                setFiltered(filter);
              }}>Mínima</button>
              <button onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.filter(item => item.miles === "Muitas");
                setFiltered(filter);
              }}>Máxima</button>
            </div>
          </div>

          <div className={style.asideButtons}>
            <h2>Preço</h2>
            <div>
              <button onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.slice().sort((a, b) => a.price - b.price)
                setFiltered(filter)

              }}>Mínima</button>
              <button onClick={(e) => {
                e.preventDefault()
                const filter: any = announcements.slice().sort((a, b) => b.price - a.price)
                setFiltered(filter)

              }}>Máxima</button>
            </div>
          </div>
        </div>
        <ul className={style.rightContainer}>


          {filtered
            ? filtered.map((announcement: any) => (
              <Announcement key={announcement.id} announcement={announcement} />
            ))
            : announcements.map((announcement: any) => (
              <Announcement key={announcement.id} announcement={announcement} />
            ))
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
