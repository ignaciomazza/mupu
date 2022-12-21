import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from '../img/logo.jpg';
import NavBar from '../components/NavBar/NavBar.jsx';

const routes = () => {
  return (
    <BrowserRouter>
        <NavBar key="Nav" logo={logo}/>
    </BrowserRouter>
  )
}

export default routes