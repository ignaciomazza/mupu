import React, { useState, useEffect } from 'react'
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore';
import { Link } from "react-router-dom";

const Categorias = () => {

    const [cat, setCat] = useState([]);

    useEffect(() => {

        const getData = async () => {
          const data = collection(db, "categorias");
          const col = await getDocs(data);
          const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()} );
          return res;
      }
      
      const task = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(getData())
          
        }, 300);
      })
    
      task
        .then((resultado) => {
          setCat(resultado)
        })
        .catch((err) => console.log(err))
    
      return () => {
          
      }
    }, [])

  return (
    <div>
        <div className='containerCategorias'>
          <div className='navCategorias'>
            <h1>CATEGORIAS</h1>
            <form action="" className='containerBuscadorCategorias'>
              <input type="text" placeholder='Buscar' className='buscadorCategorias'/>
              <button className='btnBuscadorCategorias'>Buscar</button>
            </form>
          </div>
          {cat.map((item, index) => (
            <Link to={`/category/${item.categoria}`}>
              <div className='containerCategoria' >
                <img src={item.img} alt=""/>
                <div className='nombreCategoria'>
                  <h5>{item.nombre.toUpperCase()}</h5>
                </div>
              </div>
            </Link>))}
        </div>
    </div>
  )
}

export default Categorias