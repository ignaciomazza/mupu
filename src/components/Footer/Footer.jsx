import React from 'react'

export const Footer = (props) => {
  const {Facebook, Instagram, Whatsapp} = props;
  return (
    <div className='containerFooter'>
      <div className='redesFooter'>
        <h3 className='tituloFooter'>Redes Sociales</h3>
        <div className='containerImgFooter'>
          <a  className='linkFooter' href=""><img className='imgFooter' src={Facebook} alt="logo de Facebook"/></a>
          <a className='linkFooter' href=""><img className='imgFooter' src={Instagram} alt="logo de Instagram"/></a>
          <a className='linkFooter' href=""><img className='imgFooter' src={Whatsapp} alt="logo de Whatsapp"/></a>
        </div>
      </div>
      <div className='localFooter'>
        <h3 className='tituloFooter'>Encontranos</h3>
        <p className='infoFooter'><b>Direccion </b>Domingo F. Sarmiento 1355 Loc. 1</p>
        <p className='infoFooter'><b>Horarios </b>Lunes a viernes de 10 a 13hs y de 15 a 18 hs</p>
      </div>
      <div className='contactanosFooter'>
        <h3 className='tituloFooter'>Contactanos</h3>
        <p className='infoFooter'><b>Email </b>info@mupuviajes.com.ar</p>
        <p className='infoFooter'><b>Telefono </b>+54 9 11 5970-1234</p>
      </div>
    </div>
  )
}

export default Footer