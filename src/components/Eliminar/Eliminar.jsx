import React, { useState, useEffect } from 'react';
import { db } from '../../services'
import { collection, getDocs } from 'firebase/firestore';

const Eliminar = () => {

    const [viajes, setViajes] = useState([]);

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
    <div className='containerLinkCategoriaViajes'>
        {viajes.map((item, index) => (
          <div className='linkCategoria'>
              <div className='containerCategoria' >
                <img src={item.img} alt=""/>
                <div className='nombreCategoria'>
                    <h5>{item.nombre}</h5>
                </div>
            </div>
          </div>
        ))}
    </div>    
  )
}

export default Eliminar