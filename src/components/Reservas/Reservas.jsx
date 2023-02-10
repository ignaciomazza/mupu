import React, { useState, useEffect } from 'react';
import { db } from '../../services'
import { collection, deleteDoc, getDocs, doc, setDoc } from 'firebase/firestore';
import 'boxicons'

const Reservas = () => {

  const [consultas, setConsultas] = useState([]);

  const deleteSubmit = async (element) => { 
    await deleteDoc(doc(db, "reservas", element))
    alert('Objeto eliminado, recargue la pagina para ver cambios')
  }

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
        
      }, 400);
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
        <div className='consultasBackend' key={index.toString()}>
          {item.visto == "false" && <div className='visto'><box-icon name='x' color='red'></box-icon></div>}
          {item.visto == "true" && <div className='visto'><box-icon name='check' color='green'></box-icon></div>}
          <p className='flexWidth2'><b>Nombre</b>{item.nombre} {item.apellido}</p>
          <p className='flexWidth2'><b>Email</b>{item.email}</p>
          <p className='flexWidth2'><b>Telefono</b>{item.telefono}</p>
          <p className='flexWidth2'><b>Consulta: </b>{item.reserva}</p>
          <div className='flexWidth2'>
            <b>Viaje:</b>
            <p className='flexWidth2'>{item.viajeForm.nombre}, ${item.viajeForm.precio}, {item.viajeForm.destino}, {item.viajeForm.hotel},</p>
          </div>
          <button className='inputConsultaBtn' onClick={()=>deleteSubmit(item.id)}>Eliminar</button>
        </div>
      ))}
  </div>    
)
}

export default Reservas