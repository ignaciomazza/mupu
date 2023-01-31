import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from '../img/logo.png';
import NavBar from '../components/NavBar/NavBar.jsx';
import Agregar from '../components/Agregar/Agregar.jsx';

const routes = () => {
  return (
    <BrowserRouter>
      <NavBar key="Nav" logo={logo}/>
      <Routes>
          {/* <Route path="/" element={<Inicio key="Inicio" CarouselFirst={CarouselFirst} CarouselSecond={CarouselSecond} CarouselThird={CarouselThird} CarouselFourth={CarouselFourth} CarouselFifth={CarouselFifth}/>} />
          <Route path="/contacto" element={<Contacto key="Contacto"/>}/>
          <Route path="/nosotros" element={<Nosotros key="Nosotros" logo={logo}/>}/>
          <Route path="/category/:id/destination/:dest/tidy/:ti" element={<Viajes key={"Viajes"}/>}/>
          <Route path="/search/:id/tidy/:ti" element={<Search key={"Search"}/>}/>
          <Route path="/travel-detail/:id" element={<Viaje key={"Viaje"}/>}/> */}
          <Route path="/" element={<Agregar key={"Agregar"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default routes