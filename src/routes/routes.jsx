import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from '../img/logo.png';
import Facebook from '../img/facebook.svg';
import Instagram from '../img/instagram.svg';
import Whatsapp from '../img/whatsapp.svg';
import NavBar from '../components/NavBar/NavBar.jsx';
import Inicio from '../components/Inicio/Inicio.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Contacto from '../components/Contacto/Contacto.jsx';
import Nosotros from '../components/Nosotros/Nosotros.jsx';
import Viajes from '../components/Viajes/Viajes.jsx';

const routes = () => {
  return (
    <BrowserRouter>
      <NavBar key="Nav" logo={logo}/>
      <Routes>
          <Route path="/" element={<Inicio key="Inicio"/>} />
          <Route path="/contacto" element={<Contacto key="Contacto"/>}/>
          <Route path="/nosotros" element={<Nosotros key="Nosotros" logo={logo}/>}/>
          <Route path="/category/:id" element={<Viajes/>}/>
      </Routes>
      <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/>
    </BrowserRouter>
  )
}

export default routes