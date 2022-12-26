import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from '../img/logo.jpg';
import NavBar from '../components/NavBar/NavBar.jsx';
import Carousel from '../components/Carousel/Carousel.jsx';
import Consulta from '../components/Consulta/Consulta.jsx';

const routes = () => {
  return (
    <BrowserRouter>
        <NavBar key="Nav" logo={logo}/>
        <Carousel key="Carousel"/>
        <Consulta key="Consulta"/>
    </BrowserRouter>
  )
}

export default routes