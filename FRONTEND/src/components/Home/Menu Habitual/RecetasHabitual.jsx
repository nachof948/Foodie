import React, { useEffect, useState } from 'react';
import axios from 'axios';
const RecetasHabitual = () => {
  const [menuHabitual,setMenuHabitual] = useState([])
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
          <div className='tarjeta-habitual tarjeta-producto' key={_id}>
            <img className='tarjeta-habitual-img' src={imgUrl} alt={nombre} />
            <div className="tarjeta-textos-habitual">
              <h2>{nombre}</h2>
              <div className="estrellasHabitual">
              <img class="estrella" src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img class="estrella"  src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img class="estrella"  src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img class="estrella" src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img class="estrella"  src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <p class="numero">({estrellas})</p>
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