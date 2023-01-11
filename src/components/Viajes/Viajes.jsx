import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../Footer/Footer.jsx';
import Facebook from '../../img/facebook.svg';
import Instagram from '../../img/instagram.svg';
import Whatsapp from '../../img/whatsapp.svg';

const Viajes = () => {

  const [viajes, setViajes] = useState([]);
  const [banners, setBanners] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const params = useParams();
  const Banner = params ? banners.filter((item) => item.categoria === params.id) : banners
  const Categoria = params ? viajes.filter((item) => item.categoria === params.id) : viajes
  const filtradoProvincia = params ? Categoria.filter((item) => item.provincia === params.prov) : viajes

  function aparecerProvincias (provincias) {
    if (provincias){
      setProvincias(false)
    }else{
      setProvincias(true)
    }
  }

  const location = useLocation();
  const arrayProvincias = [{id: "bsas" ,nombre: "Buenos Aires"},{id: "fe" ,nombre: "Santa Fe"},{id: "cordoba" ,nombre: "Cordoba"},{id: "rios" ,nombre: "Entre Rios"},{id: "corrientes" ,nombre: "Corrientes"},{id: "misiones" ,nombre: "Misiones"},{id: "mendoza" ,nombre: "Mendoza"},{id: "jujuy" ,nombre: "Jujuy"},{id: "salta" ,nombre: "Salta"},{id: "tucuman" ,nombre: "Tucuman"},{id: "estero" ,nombre: "Santiago Del Estero"},{id: "chaco" ,nombre: "Chaco"},{id: "formosa" ,nombre: "Formosa"},{id: "negro" ,nombre: "Rio Negro"},{id: "pampa" ,nombre: "La Pampa"},{id: "fuego" ,nombre: "Tierra Del Fuego"},{id: "neuquen" ,nombre: "Neuquen"},{id: "juan" ,nombre: "San Juan"},{id: "cruz" ,nombre: "Santa Cruz"},{id: "chubut" ,nombre: "Chubut"}, {id: "luis" ,nombre: "San Luis"}, {id: "rioja" ,nombre: "La Rioja"}, {id: "catamarca" ,nombre: "Catamarca"}];

  useEffect(() => {

    const getData = async () => {
      const data = collection(db, "banners");
      const col = await getDocs(data);
      const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()} );
      return res;
  }
  
  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getData())
      
    }, 500);
  })

  task
    .then((resultado) => {
      setBanners(resultado)
    })
    .catch((err) => console.log(err))

  return () => {
      
  }
}, [])

  useEffect(() => {

    const getData = async () => {
      const data = collection(db, "viajes");
      const col = await getDocs(data);
      const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()} );
      return res;
  }
  
  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getData())
      
    }, 1000);
  })

  task
    .then((resultado) => {
      setViajes(resultado)
    })
    .catch((err) => console.log(err))

  return () => {
      
  }
}, [])

  return (
    <div>
      <div className='bannerViajes'>
        {Banner.map((item, index) => (
          <img src={item.img} alt="" />
        ))}
        <h1>Viajes</h1>
      </div>
      <div className='filtrosYcategorias'>
        <div className='viajesFiltros'>
          {params.id == "busarg" && <div className='btnProvincias' onClick={() => aparecerProvincias(provincias)}>Provincias</div>}
          {params.id == "argavion" && <div className='btnProvincias' onClick={() => aparecerProvincias(provincias)}>Provincias</div>}
          {provincias == true &&<div className='provincias'>
            <ul>
              {arrayProvincias.map((item, index) => (
                <li>
                  <Link to={`/category/${params.id}/provincia/${item.id}`}>{item.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>}
        </div>
        {params.prov == "all" && <div className='containerLinkCategoriaViajes'>
          {Categoria.map((item, index) => (
              <Link className='linkCategoria' to={`/travel-detail/${item.id}`}>
                <div className='containerCategoria' >
                  <img src={item.img} alt=""/>
                  <div className='nombreCategoria'>
                    <h5>{item.nombre.toUpperCase()}</h5>
                  </div>
                </div>
              </Link>
          ))}
        </div>}
        {params.prov != "all" && <div className='containerLinkCategoriaViajes'>
          {filtradoProvincia.map((item, index) => (
              <Link className='linkCategoria' to={`/travel-detail/${item.id}`}>
                <div className='containerCategoria' >
                  <img src={item.img} alt=""/>
                  <div className='nombreCategoria'>
                    <h5>{item.nombre.toUpperCase()}</h5>
                  </div>
                </div>
              </Link>
          ))}
        </div>}
      </div>
      <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/>
    </div>
  )
}

export default Viajes