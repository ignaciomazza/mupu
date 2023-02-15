import React, { useState, useEffect } from 'react';
import { db } from '../../services'
import { collection, deleteDoc, getDocs, doc, setDoc } from 'firebase/firestore';
import { Link } from "react-router-dom";

const Editar = () => {
    const [viajes, setViajes] = useState([]);

    const deleteSubmit = async (element) => { 
      await deleteDoc(doc(db, "viajes", element))
      alert('Objeto eliminado, recargue la pagina para ver cambios')
    }

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
    <div className='consultasBackendContainer'>
        {viajes.map((item, index) => (
          <div className='consultasBackend' key={index.toString()}>
            <p className='flexWidth3'><b>Nombre</b>{item.nombre}</p>
            <p className='flexWidth3'><b>Destino</b> {item.destino}</p>
            <p className='flexWidth3'><b>Duracion</b> {item.duracion}</p>
            <p className='flexWidth3'><b>Transporte</b> {item.transporte}</p>
            <p className='flexWidth3'><b>Hotel</b> {item.hotel}</p>
            <p className='flexWidth3'><b>categoria</b> {item.categoria}</p>
            <p className='flexWidth3'><b>Busqueda</b> {item.busqueda}</p>
            <button className='inputConsultaBtn'><Link to={`/editarDetail/${item.id}`}>Editar</Link></button>
          </div>
        ))}
    </div>    
  )
}

export default Editar