import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos'
import 'aos/dist/aos.css'
const RecetasHabitual = () => {
  const [menuHabitual,setMenuHabitual] = useState([])
  useEffect(()=>{AOS.init()},[])
  useEffect(()=>{
    axios.get('/home')
    .then((response=>{
      setMenuHabitual(response.data.comidas)
    }))
  },[])
  return(
    <>
      {menuHabitual.slice(7, 13).map(habitual =>{
        const {_id, nombre, descripcion,precio, estrellas, imgUrl} = habitual
        return(
          <div className='tarjeta-habitual tarjeta-producto' key={_id} data-aos="fade-up" data-aos-duration="750">
            <img className='tarjeta-habitual-img' src={imgUrl} alt={nombre} loading="lazy" />
            <div className="tarjeta-textos-habitual">
              <h2>{nombre}</h2>
              <div className="estrellasHabitual">
              <img className="estrella" src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img className="estrella"  src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img className="estrella"  src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img className="estrella" src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img className="estrella"  src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <p className="numero">({estrellas})</p>
              </div>
              <p>{descripcion}</p>
              <div className="opciones-comprar-habitual">
                <p>${precio}</p>
                <button className='comprar-ahora'>Comprar Ahora</button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export { RecetasHabitual }