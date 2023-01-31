import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'boxicons'

const NavBar = (props) => {

  const {logo, menu} = props;

  const [estado, setEstado] = useState(false);

  function aparecerMenu (valor) {
    if (valor){
      setEstado(false);
    }else{
      setEstado(true);
    }
  }

  return (
    <div>
      <nav>
        <div className='logo'>
          <Link to={`/`}><img src={logo} alt="logo" /></Link>
        </div>
        <ul className='ul-desktop'>
          <li><Link to={`/`}>Agregar Viaje</Link></li>
          <li><Link to={`/eliminar`}>Eliminar Viaje</Link></li>
          <li><Link to={`/consultas`}>Consultas</Link></li>
          <li><Link to={`/reservas`}>Reservas</Link></li>
        </ul>
        <div className="btn-menu">
          <box-icon size='md' name='menu' color='grey' onClick={() => aparecerMenu(estado)}></box-icon>
        </div>
        {estado == true && <div className='burguer-menu'><ul className='menu'><li><Link to={`/`}>Agregar Viaje</Link></li><li><Link to={`/eliminar`}>Eliminar Viaje</Link></li><li><Link to={`/consultas`}>Consultas</Link></li><li><Link to={`/reservas`}>Reservas</Link></li></ul></div>}
      </nav>
    </div>
    
  )
}

export default NavBar