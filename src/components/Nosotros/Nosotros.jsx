import React from 'react'

const Nosotros = (props) => {

  const {logo} = props;

  return (
    <div className='containerNosotros'>
        <img src={logo} alt="logo" />
        <h1>Agentes de viaje certificados</h1>
        <p>En cada viaje ofrecemos calidad, precio y beneficios, logrando la mejor relación entre precio y producto</p>
    </div>
  )
}

export default Nosotros