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
            [name]: value
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
      <input type="text" name="img" placeholder='Url Imagen' className='inputConsultaText' onChange={handleChange}/>
      <p className='textoConsulta'>Transporte</p>
      <select name="transporte" onChange={handleChange} className='inputConsultaText'>
        <option value=""></option>
        <option value="avion">Avion</option>
        <option value="bus">Bus</option>
      </select>
      <p className='textoConsulta'>Categoria</p>
      <select name="categoria" onChange={handleChange} className='inputConsultaText'>
        <option value=""></option>
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
      <p className='textoConsulta'>Continente (Opcional)</p>
      <select name="continente" onChange={handleChange} className='inputConsultaText'>
        <option value=""></option>
        <option value="latinoamerica">Latinoamerica</option>
        <option value="europa">Europa</option>
      </select>
      <p className='textoConsulta'>Pais (Opcional)</p>
      <select name="pais" onChange={handleChange} className='inputConsultaText'>
        <option value=""></option>
        <option value="alemania">Alemania</option>
        <option value="reino">Reino Unido</option>
        <option value="italia">Italia</option>
        <option value="francia">Francia</option>
        <option value="ucrania">Ucrania</option>
        <option value="bajos">Paises Bajos</option>
        <option value="suiza">Suiza</option>
        <option value="grecia">Grecia</option>
        <option value="polonia">Polonia</option>
        <option value="suecia">Suecia</option>
        <option value="austria">Austria</option>
        <option value="belgica">Belgica</option>
        <option value="noruega">Noruega</option>
        <option value="irlanda">Irlanda</option>
        <option value="croacia">Croacia</option>
        <option value="checa">Republica Checa</option>
        <option value="islandia">Islandia</option>
        <option value="finlandia">Finlandia</option>
        <option value="serbia">Serbia</option>
        <option value="hungria">Hungria</option>
        <option value="dinamarca">Dinamarca</option>
        <option value="luxemburgo">Luxemburgo</option>
        <option value="eslovenia">Eslovenia</option>
        <option value="bosnia">Bosnia</option>
        <option value="monaco">Monaco</option>
        <option value="andorra">Andorra</option>
        <option value="argentina">Argentina</option>
        <option value="bolivia">Bolivia</option>
        <option value="brasil">Brasil</option>
        <option value="chile">Chile</option>
        <option value="colombia">Colombia</option>
        <option value="costarica">Costa Rica</option>
        <option value="cuba">Cuba</option>
        <option value="ecuador">Ecuador</option>
        <option value="salvador">El Salvador</option>
        <option value="guatemala">Guatamala</option>
        <option value="guayana">Guyana</option>
        <option value="haiti">Haiti</option>
        <option value="honduras">Honduras</option>
        <option value="jamaica">Jamaica</option>
        <option value="mexico">Mexico</option>
        <option value="nicaragua">Nicaragua</option>
        <option value="panama">Panama</option>
        <option value="paraguay">Paraguay</option>
        <option value="peru">Peru</option>
        <option value="dominicana">Republica Dominicana</option>
        <option value="surinam">Surinam</option>
        <option value="uruguay">Uruguay</option>
        <option value="barbuda">Antigua y Barbuda</option>
        <option value="bahamas">Bahamas</option>
        <option value="barbados">Barbados</option>
        <option value="dominica">Dominica</option>
        <option value="granada">Granada</option>
        <option value="cristobal">San Cristobal y Nieves</option>
        <option value="puertorico">Puerto Rico</option>
        <option value="granadinas">San Vicente y Las Granadinas</option>
        <option value="lucia">Santa Lucia</option>
        <option value="trinidad">Trinidad</option>
        <option value="belice">Belice</option>
        <option value="costarica">Costa Rica</option>
      </select>
      <p className='textoConsulta'>Provincia (Opcional)</p>
      <select name="provincia" onChange={handleChange} className='inputConsultaText'>
        <option value=""></option>
        <option value="bsas">Buenos Aires</option>
        <option value="fe">Santa Fe</option>
        <option value="cordoba">Cordoba</option>
        <option value="rios">Entre Rios</option>
        <option value="corrientes">Corrientes</option>
        <option value="misiones">Misiones</option>
        <option value="mendoza">Mendoza</option>
        <option value="jujuy">Jujuy</option>
        <option value="salta">Salta</option>
        <option value="tucuman">Tucuman</option>
        <option value="estero">Santiago Del Estero</option>
        <option value="chaco">Chaco</option>
        <option value="formosa">Formosa</option>
        <option value="negro">Rio Negro</option>
        <option value="pampa">La Pampa</option>
        <option value="fuego">Tierra Del Fuego</option>
        <option value="neuquen">Neuquen</option>
        <option value="juan">San Juan</option>
        <option value="cruz">Santa Cruz</option>
        <option value="chubut">Chubut</option>
        <option value="luis">San Luis</option>
        <option value="rioja">La Rioja</option>
        <option value="catamarca">Catamarca</option>
      </select>
      <input type="text" name="busqueda" className='inputConsultaText' placeholder='Palabras clave' onChange={handleChange}/>
      <input type="text" name="regimen" className='inputConsultaText' placeholder='Regimen' onChange={handleChange}/>
      <input type="text" name="excursiones" className='inputConsultaText' placeholder='Excursiones' onChange={handleChange}/>
      <p className='textoConsulta'>Traslado</p>
      <select name="traslado" onChange={handleChange} className='inputConsultaText'>
        <option value=""></option>
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>
      <p className='textoConsulta'>Alojamiento</p>
      <select name="alojamiento" onChange={handleChange} className='inputConsultaText'>
        <option value=""></option>
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>
      <p className='textoConsulta'>Asistencia</p>
      <select name="asistencia" onChange={handleChange} className='inputConsultaText'>
        <option value=""></option>
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>
      <input type="button" value="Enviar" className='inputConsultaBtn z' onClick={() => setInFireBase(formulario)}/>
    </div>
  )
}

export default Agregar