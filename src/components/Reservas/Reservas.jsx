import React, { useState, useEffect } from 'react';
import { db } from '../../services'
import { collection, getDocs } from 'firebase/firestore';

const Reservas = () => {

    const [reservas, setReservas] = useState([]);

    useEffect(() => {

        const getData = async () => {
          const data = collection(db, "reservas");
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
            setReservas(resultado)
        })
        .catch((err) => console.log(err))
    
      return () => {
          
      }
    }, [])

  return (
    <div className='consultasBackendContainer'>
        {reservas.map((item, index) => (
          <div className='consultasBackend'>
            <p><b>Nombre:</b> {item.nombre} {item.apellido}</p>
            <p><b>Email:</b> {item.email}</p>
            <p><b>Telefono:</b> {item.telefono}</p>
            <p><b>Consulta:</b> {item.reserva}</p>
            <div>
                <p>Viaje:</p>
                <p><b>Nombre: </b>{item.viajeForm.nombre}</p>
                <p><b>precio: </b>{item.viajeForm.precio}</p>
                <p><b>destino: </b>{item.viajeForm.destino}</p>
                <p><b>transporte: </b>{item.viajeForm.transporte}</p>
                <p><b>descripcion: </b>{item.viajeForm.descripcion}</p>
            </div>
          </div>
        ))}
    </div>    
  )
}

export default Reservas