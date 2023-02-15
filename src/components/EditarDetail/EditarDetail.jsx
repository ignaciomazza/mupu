import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../services'
import { collection, getDocs, addDoc } from 'firebase/firestore';

const EditarDetail = () => {

    const [viajes, setViajes] = useState([]);
    const params = useParams();
    const viaje = params ? viajes.filter((item) => item.id === params.id) : viajes
    const [viajeId, setViajeId] = useState(params.id);

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
            <div className='viajeContainer'>
                <div className='viajePrincipalContainer' >
                <div className='datosPrincipalesViaje'>
                    <h1>{item.nombre.toUpperCase()}</h1>
                    <p>{item.descripcion}</p>
                </div>
                <div className='containerImgViaje'>
                    <img src={item.img} alt=""/>
                </div>
                </div>
                <div className='infoViaje'>
                <div className='datosViaje'>
                    <h3>DATOS DEL VIAJE</h3>
                    <p>Destino: {item.destino}</p>
                    <p>Duracion: {item.duracion}</p>
                    <p>Transporte: {item.transporte}</p>
                    <p>Hotel: {item.hotel}</p>
                    {item.alojamiento != "false" && <p>Alojamiento incluido</p>}
                    <p>Regimen de comida: {item.regimen}</p>
                    <p>Excursiones: {item.excursiones}</p>
                    {item.asistencia != "false" && <p>Asistencia al viajero</p>}
                    {item.traslado != "false" && <p>Traslados</p>}
                    
                </div>
                <div className='pagoViaje'>
                    <h3>PRECIO</h3>
                    <p>${item.precio}</p>
                    <h4>MEDIOS DE PAGO</h4>
                    <p>Dinero en efectivo</p>
                    <p>Debito</p>
                    <p>Credito</p>
                </div>
                </div>
                <div className='consulta'>
                    <p className='textoConsulta'>Dato a editar</p>
                    <select name="asistencia" className='inputConsultaText'>
                        <option value=""></option>
                        <option value="true">Nombre</option>
                        <option value="false">Destino</option>
                        <option value="true">Precio</option>
                        <option value="false">Duracion</option>
                        <option value="true">Hotel</option>
                        <option value="false">Descripcion</option>
                        <option value="true">Url Imagen</option>
                        <option value="false">Palabras Clave</option>
                        <option value="true">Regimen</option>
                        <option value="false">Excursiones</option>
                    </select>
                    <input type="text" name="contenido" className='inputConsultaText' placeholder='Contenido'/>
                    <input type="button" value="Editar" className='inputConsultaBtn z'/>
                </div>
            </div>
        ))}
      </div>
  )
}

export default EditarDetail