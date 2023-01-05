import React from 'react'
import Footer from '../Footer/Footer.jsx';
import Facebook from '../../img/facebook.svg';
import Instagram from '../../img/instagram.svg';
import Whatsapp from '../../img/whatsapp.svg';

const Consulta = () => {
  return (
    <div className='containerColumnConsulta'>
      <div className='containerRowConsulta'>
        <div className='encabezadoConsulta'>
              <h1 className='tituloConsulta'>Hacenos tu consulta</h1>
              <p className='textoConsulta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam eius, tempore voluptatum officiis eum in! Voluptatum, deleniti! Non aperiam ullam, fugiat fuga blanditiis officia nam necessitatibus a. Minus, aut!</p>
          </div>
          <form action="" className='consulta'>
              <input type="text" name="" id="" className='inputConsultaText' placeholder='Nombre'/>
              <input type="text" name="" id="" className='inputConsultaText' placeholder='Apellido'/>
              <input type="text" name="" id="" className='inputConsultaText' placeholder='Telefono'/>
              <textarea name="" id="" cols="30" rows="10" className='inputConsultaMsj' placeholder='Consulta'></textarea>
              <input type="button" value="Enviar" className='inputConsultaBtn z'/>
          </form>
      </div>
        <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/>
    </div>
  )
}

export default Consulta