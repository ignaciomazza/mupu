import React from 'react';
import Carousel from '../Carousel/CarouselApp.jsx';
import Categorias from '../Categorias/Categorias.jsx';
import Consulta from '../Consulta/Consulta.jsx';

export const Inicio = () => {

  return (
    <div>
        <Carousel key="Carousel"/>
        <Categorias key="Categorias"/>
        <Consulta key="Consulta"/>
    </div>
  )
}

export default Inicio