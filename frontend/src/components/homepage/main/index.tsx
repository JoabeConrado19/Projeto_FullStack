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

import Announcement from '../../../components/homepage/car'



export default function MainHome() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [brand, setBrand] = useState(undefined);
  const [model, setModel] = useState(undefined);
  const [color, setColor] = useState(undefined);
  const [year, setYear] = useState(undefined);
  const [fuel, setFuel] = useState(undefined);
  const [km, setKm] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [filtered, setFiltered] = useState([])

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

  const handlefilter = (filter: string, value: any) => {
    
    if (filter == "brand") {
      setBrand(value)
    }
    if (filter == "model") {
      setModel(value)
    }
    if (filter == "color") {
      setColor(value)
    }

    if (filter == "year") {
      setYear(value)
    }

    if (filter == "fuel") {
      setFuel(value)
    }

    if (filter == "km") {
      setKm(value)
    }

    if (filter == "price") {
      setPrice(value)
    }

  };

  useEffect(() => {
    if (color) {
      const filter: any = announcements.filter(item => item.color === color);
      setFiltered(filter);
    }

    else if (brand) {
      const filter: any = announcements.filter(item => item.brand.brandName === brand);
      setFiltered(filter);
    }

    else if (model) {
      const filter: any = announcements.filter(item => item.model === model);
      setFiltered(filter);
    }

    else if (year) {
      const filter: any = announcements.filter(item => item.year === year);
      setFiltered(filter);
    }

    else if (fuel) {
      const filter: any = announcements.filter(item => item.fuelType === fuel);
      setFiltered(filter);
    }

    

    
    else {
      setFiltered(undefined);
    }
  }, [color, brand, model, year, fuel]);

  
  function Announcement({ announcement }: any) {
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
                  <li><a href="#" onClick={(e)=>{
                    e.preventDefault()
                    handlefilter("color", "blue")}
                    }>Azul</a></li>
                  <li ><a href="">Branca</a></li>
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
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(brand?.length > 0){
                      setBrand(undefined)
                    }
                    else{
                      handlefilter("brand", "General Motors")}
                    }
                    }>General Motors</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(brand?.length > 0){
                      setBrand(undefined)
                    }
                    else{
                      handlefilter("brand", "Fiat")}
                    }
                    }>Fiat</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(brand?.length > 0){
                      setBrand(undefined)
                    }
                    else{
                      handlefilter("brand", "Ford")}
                    }
                    }>Ford</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(brand?.length > 0){
                      setBrand(undefined)
                    }
                    else{
                      handlefilter("brand", "Honda")}
                    }
                    }>Honda</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(brand?.length > 0){
                      setBrand(undefined)
                    }
                    else{
                      handlefilter("brand", "Porsche")}
                    }
                    }>Porsche</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(brand?.length > 0){
                      setBrand(undefined)
                    }
                    else{
                      handlefilter("brand", "Volswagen")}
                    }
                    }>volswagen</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Modelo</h2>
            <ul>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(model?.length > 0){
                      setModel(undefined)
                    }
                    else{
                      handlefilter("model", "Civic")}
                    }
                    }>Civic</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(model?.length > 0){
                      setModel(undefined)
                    }
                    else{
                      handlefilter("model", "Corolla")}
                    }
                    }>Corolla</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(model?.length > 0){
                      setModel(undefined)
                    }
                    else{
                      handlefilter("model", "Cruze")}
                    }
                    }>Cruze</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(model?.length > 0){
                      setModel(undefined)
                    }
                    else{
                      handlefilter("model", "Fit")}
                    }
                    }>Fit</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(model?.length > 0){
                      setModel(undefined)
                    }
                    else{
                      handlefilter("model", "Gol")}
                    }
                    }>Gol</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(model?.length > 0){
                      setModel(undefined)
                    }
                    else{
                      handlefilter("model", "Ka")}
                    }
                    }>Ka</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(model?.length > 0){
                      setModel(undefined)
                    }
                    else{
                      handlefilter("model", "Onix")}
                    }
                    }>Onix</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(model?.length > 0){
                      setModel(undefined)
                    }
                    else{
                      handlefilter("model", "Porsche 718")}
                    }
                    }>Porsche 718</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Cor</h2>
            <ul>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(color?.length > 0){
                      setColor(undefined)
                    }
                    else{
                      handlefilter("color", "azul")}
                    }
                    }>Azul</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(color?.length > 0){
                      setColor(undefined)
                    }
                    else{
                      handlefilter("color", "cinza")}
                    }
                    }>Cinza</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(color?.length > 0){
                      setColor(undefined)
                    }
                    else{
                      handlefilter("color", "fit")}
                    }
                    }>Fit</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(color?.length > 0){
                      setColor(undefined)
                    }
                    else{
                      handlefilter("color", "prata")}
                    }
                    }>Prata</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(color?.length > 0){
                      setColor(undefined)
                    }
                    else{
                      handlefilter("color", "preto")}
                    }
                    }>Preta</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(color?.length > 0){
                      setColor(undefined)
                    }
                    else{
                      handlefilter("color", "verde")}
                    }
                    }>Verde</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Ano</h2>
            <ul>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(year?.length > 0){
                      setYear(undefined)
                    }
                    else{
                      handlefilter("year", "2022")}
                    }
                    }>2022</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(year?.length > 0){
                      setYear(undefined)
                    }
                    else{
                      handlefilter("year", "2021")}
                    }
                    }>2021</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(year?.length > 0){
                      setYear(undefined)
                    }
                    else{
                      handlefilter("year", "2018")}
                    }
                    }>2018</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(year?.length > 0){
                      setYear(undefined)
                    }
                    else{
                      handlefilter("year", "2015")}
                    }
                    }>2015</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(year?.length > 0){
                      setYear(undefined)
                    }
                    else{
                      handlefilter("year", "2013")}
                    }
                    }>2013</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(year?.length > 0){
                      setYear(undefined)
                    }
                    else{
                      handlefilter("year", "2012")}
                    }
                    }>2012</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(year?.length > 0){
                      setYear(undefined)
                    }
                    else{
                      handlefilter("year", "2010")}
                    }
                    }>2010</a></li>
            </ul>
          </div>

          <div className={style.list}>
            <h2>Combustível</h2>
            <ul>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(fuel?.length > 0){
                      setFuel(undefined)
                    }
                    else{
                      handlefilter("fuel", "Diesel")}
                    }
                    }>Diesel</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(fuel?.length > 0){
                      setFuel(undefined)
                    }
                    else{
                      handlefilter("fuel", "Etanol")}
                    }
                    }>Etanol</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(fuel?.length > 0){
                      setFuel(undefined)
                    }
                    else{
                      handlefilter("fuel", "Gasolina")}
                    }
                    }>Gasolina</a></li>
              <li><a href="" onClick={(e)=>{
                    e.preventDefault()
                    if(fuel?.length > 0){
                      setFuel(undefined)
                    }
                    else{
                      handlefilter("fuel", "Flex")}
                    }
                    }>Flex</a></li>
            </ul>
          </div>

          <div className={style.asideButtons}>
            <h2>Km</h2>
            <div>
              <button >Mínima</button>
              <button>Máxima</button>
            </div>
          </div>

          <div className={style.asideButtons}>
            <h2>Preço</h2>
            <div>
              <button onClick={(e)=>{
                e.preventDefault()
                if(filtered != undefined){
                  setFiltered(() => {
                    const newFiltered = announcements.sort((a, b) => b.price - a.price);
                    return newFiltered;
                  })
                }
                else if(filtered == undefined){
                  setFiltered(() => {
                    const newFiltered = announcements.sort((a, b) => b.price - a.price);
                    return newFiltered;
                  })

                }
                
              }}>Mínima</button>
              <button onClick={(e)=>{
                e.preventDefault()
                if(filtered != undefined){
                  setFiltered(() => {
                    const newFiltered = announcements.sort((a, b) => b.price - a.price);
                    return newFiltered;
                  })
                }
                else if(filtered == undefined){
                  setFiltered(() => {
                    const newFiltered = announcements.sort((a, b) => b.price - a.price);
                    return newFiltered;
                  })

                }
                
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
