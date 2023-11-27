import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecetasEspecial = () => {
	const [menuEspecial, setMenuEspecial] = useState([])
	useEffect(()=>{
		axios.get('/home')
		.then((response=>{
      setMenuEspecial(response.data.comidas)
		}))
	},[])
  return(
    <>
			{menuEspecial.slice(4,7).map(receta =>{
				const {imgUrl, nombre, precio, estrellas, _id} = receta
        return(
          <div className='especial tarjeta-producto' key={_id}>
            <img className='comida' src={imgUrl} alt={nombre} />
            <h2>{nombre}</h2>
              <div class="estrellas">
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <p class="num">({estrellas})</p>
              </div>
              <div class="precio">
                <p>${precio}</p>
              </div>
              <button className='comprar-ahora bolsa'><img src="/Imagenes/icons8-bolsa-de-compras-45.png" alt="Bolsa" /></button>
          </div>
        )
			})}
    </>
  )
}

export { RecetasEspecial }