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
          <button className='btnBuscador'><box-icon size='sm' name='search' color='ABABAB' ></box-icon></button>
        </form>
        <ul>
          <li><Link to={`/`}>inicio</Link></li>
          <li><Link to={`/contacto`}>contacto</Link></li>
          <li><Link to={`/nosotros`}>nosotros</Link></li>
        </ul>
      </nav>
    </div>
    
  )
}

export default NavBar