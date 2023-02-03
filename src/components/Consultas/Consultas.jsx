import React, { useState, useEffect } from 'react';
import { db } from '../../services'
import { collection, getDocs } from 'firebase/firestore';

const Consultas = () => {

    const [consultas, setConsultas] = useState([]);

    useEffect(() => {

        const getData = async () => {
          const data = collection(db, "consulta");
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
          setConsultas(resultado)
        })
        .catch((err) => console.log(err))
    
      return () => {
          
      }
    }, [])

  return (
    <div className='consultasBackendContainer'>
        {consultas.map((item, index) => (
          <div className='consultasBackend'>
            <p><b>Nombre:</b> {item.nombre} {item.apellido}</p>
            <p><b>Email:</b> {item.email}</p>
            <p><b>Telefono:</b> {item.telefono}</p>
            <p><b>Consulta:</b> {item.consulta}</p>
          </div>
        ))}
    </div>    
  )
}

export default Consultas