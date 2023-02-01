import React, { useState } from 'react';
import { uploadFile, db } from '../../services'
import { collection, addDoc } from 'firebase/firestore';

export const Agregar = () => {

    const [formulario, setFormulario] = useState({
        nombre: "",
        precio: "",
        duracion: "",
        hotel: "",
        descripcion: "",
        transporte: "",
        categoria: "",
        continente: "",
        pais: "",
        provincia: "",
        busqueda: "",
        traslado: "",
        alojamiento: "",
        asistencia: "",
        img: ""
      });

      const [file, setFile] = useState("")
      const [url, setUrl] = useState("")
    
      const {nombre, precio, duracion, hotel, descripcion, transporte, categoria, continente, pais, provincia, busqueda, traslado, alojamiento, asistencia, img } = formulario;

      
      // const imagen =  uploadFile(file)
      // setUrl(imagen)
    
      const handleChange = async (e) => {
        const { name, value } = e.target;
          setFormulario({
            ...formulario,
            [name]: value,
            img: url
          });
      }

      const setInFireBase = async (nombre, precio, duracion, hotel, descripcion, transporte, categoria, continente, pais, provincia, busqueda, traslado, alojamiento, asistencia, destino, regimen, excursiones, img) => {
        if (nombre != "" && precio != "" && duracion != "" && hotel != "" && descripcion != "" && transporte != "" && categoria != "" && continente != "" && pais != "" && busqueda != "" && traslado != "" && alojamiento != "" && asistencia != "" && destino != "" && regimen != "" && excursiones != "") {
          try {
            const data = collection(db, "viajes");
            const col = await addDoc(data, nombre, precio, duracion, hotel, descripcion, transporte, categoria, continente, pais, provincia, busqueda, traslado, alojamiento, asistencia, destino, regimen, excursiones, img);
            alert("Su numero de orden es: " + col.id)
          } catch (error) {
            console.log(error)
          }
        }else{
          alert("Complete todos los campos para poder guardar el paquete")
        }
      }

  return (
    <div className='consulta'>
      <input type="text" name="nombre" className='inputConsultaText padin' placeholder='Nombre' onChange={handleChange}/>
      <input type="text" name="destino" className='inputConsultaText' placeholder='Destino' onChange={handleChange}/>
      <input type="number" name="precio" className='inputConsultaText' placeholder='Precio' onChange={handleChange}/>
      <input type="text" name="duracion" className='inputConsultaText' placeholder='Duracion' onChange={handleChange}/>
      <input type="text" name="hotel" className='inputConsultaText' placeholder='Hotel' onChange={handleChange}/>
      <input type="text" name="descripcion" className='inputConsultaText' placeholder='Descripcion' onChange={handleChange}/>
      <p className='textoConsulta'>Imagen</p>
      <input type="file" name="img" className='inputConsultaText' onChange={ (e) => setFile(e.target.files[0])}/>
      <p className='textoConsulta'>Transporte</p>
      <select name="transporte" onChange={handleChange} className='inputConsultaText'>
        <option value="avion">Avion</option>
        <option value="bus">Bus</option>
      </select>
      <p className='textoConsulta'>Categoria</p>
      <select name="categoria" onChange={handleChange} className='inputConsultaText'>
        <option value="argavion">Avion Agentina</option>
        <option value="busarg">Bus Argentina</option>
        <option value="exoticos">Destinos exoticos</option>
        <option value="eventos">Eventos</option>
        <option value="grupales">Grupales</option>
        <option value="brasil">Brasil</option>
        <option value="cruceros">Cruceros</option>
        <option value="caribe">Caribe</option>
        <option value="particulares">Particulares</option>
        <option value="asistencias">Asistencias</option>
        <option value="latinoamerica">Latinoamerica</option>
        <option value="europa">Europa</option>
      </select>
      <input type="text" name="continente" className='inputConsultaText' placeholder='Continente' onChange={handleChange}/>
      <input type="text" name="pais" className='inputConsultaText' placeholder='Pais' onChange={handleChange}/>
      <input type="text" name="provincia" className='inputConsultaText' placeholder='Provincia' onChange={handleChange}/>
      <input type="text" name="busqueda" className='inputConsultaText' placeholder='Palabras clave' onChange={handleChange}/>
      <input type="text" name="regimen" className='inputConsultaText' placeholder='Regimen' onChange={handleChange}/>
      <input type="text" name="excursiones" className='inputConsultaText' placeholder='Excursiones' onChange={handleChange}/>
      <p className='textoConsulta'>Traslado</p>
      <select name="traslado" onChange={handleChange} className='inputConsultaText'>
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>
      <p className='textoConsulta'>Alojamiento</p>
      <select name="alojamiento" onChange={handleChange} className='inputConsultaText'>
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>
      <p className='textoConsulta'>Asistencia</p>
      <select name="asistencia" onChange={handleChange} className='inputConsultaText'>
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>
      <input type="button" value="Enviar" className='inputConsultaBtn z' onClick={() => setInFireBase(formulario)}/>
    </div>
  )
}

export default Agregar