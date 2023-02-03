import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from '../img/logo.png';
import NavBar from '../components/NavBar/NavBar.jsx';
import Agregar from '../components/Agregar/Agregar.jsx';
import Consultas from '../components/Consultas/Consultas.jsx';
import Reservas from '../components/Reservas/Reservas.jsx';
import Eliminar from '../components/Eliminar/Eliminar.jsx';

const routes = () => {
  return (
    <BrowserRouter>
      <NavBar key="Nav" logo={logo}/>
      <Routes>
          <Route path="/" element={<Agregar key={"Agregar"}/>}/>
          <Route path="/consultas" element={<Consultas key={"Consultas"}/>}/>
          <Route path="/reservas" element={<Reservas key={"Reservas"}/>}/>
          <Route path="/eliminar" element={<Eliminar key={"Eliminar"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default routes