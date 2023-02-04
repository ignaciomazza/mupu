import React, { useState, useEffect } from 'react';
import { db } from '../../services'
import { collection, deleteDoc, getDocs, doc, setDoc } from 'firebase/firestore';
import 'boxicons'

const Consultas = () => {

    const [consultas, setConsultas] = useState([]);

    const deleteSubmit = async (element) => { 
      await deleteDoc(doc(db, "consulta", element))
      alert('Objeto eliminado, recargue la pagina para ver cambios')
    }

    const vistoSubmit = async (element, id, visto) => { 

      if (visto == "true") {
        const elemento1 = {
          ...element,
          visto: "false"
        };
        try {
          setDoc(doc(db, "consulta", id),{
            ...elemento1
          })
          alert("Cambios realizados, actualice para ver resultados")
        } catch (error) {
          console.log(error)
        }
      }else{
        const elemento2 = {
            ...element,
            visto: "true"
        };
        try {
          setDoc(doc(db, "consulta", id),{
            ...elemento2
          })
          alert("Cambios realizados, actualice para ver resultados")
        } catch (error) {
          console.log(error)
        }
      }
    }

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
          <div className='consultasBackend'>
            {item.visto == "false" && <div className='visto'><box-icon name='x' color='red'></box-icon></div>}
            {item.visto == "true" && <div className='visto'><box-icon name='check' color='green'></box-icon></div>}
            <p className='flexWidth2'><b>Nombre</b>{item.nombre} {item.apellido}</p>
            <p className='flexWidth2'><b>Email</b>{item.email}</p>
            <p className='flexWidth2'><b>Telefono</b>{item.telefono}</p>
            <p className='flexWidth'><b>Consulta: </b>{item.consulta}</p>
            <button className='inputConsultaBtn' onClick={()=>deleteSubmit(item.id)}>Eliminar</button>
            <button className='inputConsultaBtn' onClick={()=>vistoSubmit(item, item.id, item.visto)}>Visto</button>
          </div>
        ))}
    </div>    
  )
}

export default Consultas