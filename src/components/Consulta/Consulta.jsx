import React from 'react'

const Consulta = () => {
  return (
    <div className='containerConsulta'>
        <div className='encabezadoConsulta'>
            <h1 className='tituloConsulta'>Hacenos tu consulta</h1>
            <p className='textoConsulta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam eius, tempore voluptatum officiis eum in! Voluptatum, deleniti! Non aperiam ullam, fugiat fuga blanditiis officia nam necessitatibus a. Minus, aut!</p>
        </div>
        <form action="" className='consulta'>
            <input type="text" name="" id="" className='inputConsultaText' placeholder='Nombre'/>
            <input type="text" name="" id="" className='inputConsultaText' placeholder='Apellido'/>
            <input type="email" name="" id="" className='inputConsultaEmail' placeholder='Email'/>
            <textarea name="" id="" cols="30" rows="10" className='inputConsultaMsj' placeholder='Consulta'></textarea>
            <input type="button" value="enviar" className='inputConsultaBtn z'/>
        </form>
    </div>
  )
}

export default Consulta