import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore';

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
            <Link to={`/travel-detail/${item.id}`}>
              <div className='containerCategoria' >
                <img src={item.img} alt=""/>
                <div className='nombreCategoria'>
                  <h5>{item.nombre.toUpperCase()}</h5>
                </div>
              </div>
            </Link>
        ))}
    </div>
  )
}

export default Viaje