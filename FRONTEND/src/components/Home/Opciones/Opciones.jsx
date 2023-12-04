import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
/* import { mirarProducto } from '../../../Funciones/mirarProducto'; */
import './Hojas de estilo/Opciones.css'

const Opciones = () => {
  const [opciones, setOpciones] = useState([])
  const [carrito, setCarrito] = useState([])
  const navegar = useNavigate()
  useEffect(() => {
    axios.get('/home')
    .then((response) =>{
      setOpciones(response.data.comidas)
    })
    .catch((error) =>{console.error(error)})
    
  },[])  
  
  const agregarAlCarrito = (productoId) => {
    // Realizar una solicitud al servidor para agregar el producto al carrito por su ID
    axios.post('/compras/agregar', { productoId })
      .then((response) => {
        navegar('/compras')
        console.log('Producto agregado al carrito', response.data.carrito);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return(
    <section id='opciones' className='seccion-opciones' >
      <div className='contenedor-opciones'>
        {opciones.slice(0, 4).map(opcion =>{
          const {nombre, descripcion, precio,imgUrl, _id} = opcion
          return(
            <div className='tarjeta tarjeta-producto'/*  onClick={()=>{mirarProducto(_id, navegar)}} */ key={_id}> 
              <img src={imgUrl} alt={nombre} loading="lazy" />
              <div className="tarjeta-textos">
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <div className="opciones-comprar">
                  <p>${precio}</p>
                  <button className='comprar-ahora' onClick={()=>{agregarAlCarrito(_id)}}>Comprar Ahora</button>
                </div>
              </div>
            </div> 
          )
        })}
      </div>
    </section>
  )
}

export { Opciones }