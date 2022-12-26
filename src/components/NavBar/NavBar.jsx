import React from 'react'
import { Link } from "react-router-dom";

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
          <button className='btnBuscador'>Buscar</button>
        </form>
        <ul>
          <li><Link to={`/`}>INICIO</Link></li>
          <li><Link to={`/contacto`}>CONTACTO</Link></li>
          <li><Link to={`/nosotros`}>NOSOTROS</Link></li>
        </ul>
      </nav>
    </div>
    
  )
}

export default NavBar