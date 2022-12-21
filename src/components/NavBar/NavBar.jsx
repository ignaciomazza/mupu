import React from 'react'
import { Link } from "react-router-dom";

const NavBar = (props) => {
const {menu, logo} = props;
  return (
    <nav>
        <div className='logo'>
                <Link to={`/`}><img src={logo} alt="logo" /></Link>
            </div>
            <ul>
                <li><Link to={`/`}>INICIO</Link></li>
                <li><Link to={`/`}>TIENDA</Link></li>
                <li><Link to={`/`}>NOSOTROS</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar