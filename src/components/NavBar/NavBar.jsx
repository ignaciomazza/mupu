import React from 'react'
import { Link } from "react-router-dom";
import 'boxicons'

const NavBar = (props) => {

  const {logo} = props;

  return (
    <div>
      <div className='space'></div>
      <nav>
        <div className='logo'>
          <Link to={`/`}><img src={logo} alt="logo" /></Link>
        </div>
        <form action="" className='containerBuscador'>
          <input type="text" placeholder='Buscar' className='buscador'/>
          <button className='btnBuscador'><box-icon size='sm' name='search' color='grey' ></box-icon></button>
        </form>
        <ul>
          <li><Link to={`/`}>Inicio</Link></li>
          <li><Link to={`/contacto`}>Contacto</Link></li>
          <li><Link to={`/nosotros`}>Nosotros</Link></li>
        </ul>
      </nav>
    </div>
    
  )
}

export default NavBar