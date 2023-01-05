import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
  const params = useParams();
  const Banner = params ? banners.filter((item) => item.categoria === params.id) : banners
  const Categoria = params ? viajes.filter((item) => item.categoria === params.id) : viajes

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
      <div className='containerLinkCategoria'>
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
      </div>
      <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/>
    </div>
  )
}

export default Viajes