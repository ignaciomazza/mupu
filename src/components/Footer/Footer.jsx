import React from 'react'

export const Footer = (props) => {
  const {Facebook, Instagram, Whatsapp} = props;
  return (
    <div className='containerFooter'>
      <div className='localFooter'>
        <h3 className='tituloFooter'>Encontranos</h3>
        <p className='infoFooter'><b>Direccion </b>Domingo F. Sarmiento 1355 Loc. 1</p>
        <p className='infoFooter'><b>Horarios </b>Lunes a viernes de 10 a 13hs y de 15 a 18 hs</p>
      </div>
      <div className='redesFooter'>
        <h3 className='tituloFooter'>Redes Sociales</h3>
        <div className='containerImgFooter'>
          <a  className='linkFooter' href=""><box-icon type='logo' name='facebook' size='lg' color='white'></box-icon></a>
          <a className='linkFooter' href=""><box-icon type='logo' name='instagram' size='lg' color='white'></box-icon></a>
          <a className='linkFooter' href=""><box-icon type='logo' name='whatsapp' size='lg' color='white'></box-icon></a>
        </div>
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