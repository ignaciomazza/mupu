import React, { useState } from 'react';
import db from '../../services'
import { collection, addDoc } from 'firebase/firestore';

export const Agregar = () => {

    const [formulario, setFormulario] = useState({
        email: "",
        nombre: "",
        apellido: "",
        telefono: "",
        consulta: ""
      });
    
      const {email, nombre, apellido, telefono, consulta } = formulario;
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
          consulta: {
            ...formulario.consulta,
            [name]: value
          }
        });
      }
    
      const setInFireBase = async (consulta) => {
        if (consulta.email != "" && consulta.nombre != "" && consulta.apellido != "" && consulta.telefono != "" && consulta.consulta != "") {
          try {
            const data = collection(db, "consulta");
            const col = await addDoc(data, consulta);
            alert("Su numero de orden es: " + col.id)
          } catch (error) {
            console.log(error)
          }
        }else{
          alert("Complete todos los campos para poder realizar la consulta")
        }
      }

  return (
    <div className='consulta'>
      <input type="text" name="nombre" className='inputConsultaText' placeholder='Nombre' onChange={handleChange}/>
      <input type="number" name="precio" className='inputConsultaText' placeholder='Precio' onChange={handleChange}/>
      <input type="text" name="duracion" className='inputConsultaText' placeholder='Duracion' onChange={handleChange}/>
      <input type="text" name="hotel" className='inputConsultaText' placeholder='Hotel' onChange={handleChange}/>
      <input type="text" name="descricpion" className='inputConsultaText' placeholder='Descricpion' onChange={handleChange}/>
      <p>Imagen</p>
      <input type="file" name="descricpion" className='inputConsultaText' onChange={handleChange}/>
      <p>Transporte</p>
      <select name="transporte" onChange={handleChange} className='inputConsultaText'>
        <option value="avion">Avion</option>
        <option value="bus">Bus</option>
      </select>
      <p>Categoria</p>
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
      <input type="button" value="Enviar" className='inputConsultaBtn z' onClick={() => setInFireBase(formulario)}/>
    </div>
  )
}

export default Agregar