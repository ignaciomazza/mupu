import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../Footer/Footer.jsx';
import Facebook from '../../img/facebook.svg';
import Instagram from '../../img/instagram.svg';
import Whatsapp from '../../img/whatsapp.svg';

const Viaje = () => {

    const [viajes, setViajes] = useState([]);
    const params = useParams();
    const viaje = params ? viajes.filter((item) => item.id === params.id) : viajes

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
        {viaje.map((item, index) => (
              <div className='viajeContainer' >
                <div className='datosPrincipalesViaje'>
                  <h1>{item.nombre.toUpperCase()}</h1>
                  <p>{item.descripcion}</p>
                </div>
                <div className='containerImgViaje'>
                  <img src={item.img} alt=""/>
                </div>
              </div>
        ))}
        <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/>
    </div>
  )
}

export default Viaje