import React from 'react'
import Footer from '../Footer/Footer.jsx';
import Facebook from '../../img/facebook.svg';
import Instagram from '../../img/instagram.svg';
import Whatsapp from '../../img/whatsapp.svg';

const Nosotros = (props) => {

  const {logo} = props;

  return (
    <div className='containerNosotros'>
      <div className='containerDatosNosotros'>
        <img src={logo} alt="logo" />
        <h1>Agentes de viaje certificados</h1>
        <p>En cada viaje ofrecemos calidad, precio y beneficios, logrando la mejor relación entre precio y producto</p>
      </div>  
      <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/>
    </div>
  )
}

export default Nosotros