import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Footer, HeaderShop, Shop } from '../../indice';
import './Hoja de estilos/Shop.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const TodasLasComidas = () => {
  useEffect(()=>{AOS.init()},[])
  const [todasLasComidas, setTodasLasComidas] = useState([])
  useEffect(()=>{
    axios.get('/comidas/all')
    .then((response)=>{
      setTodasLasComidas(response.data.comidas);
    })
    .catch((error)=>{console.log(error)})
  },[])
  return(
    <>
      <HeaderShop />
      <main> 
        <section className='comida-habitual'>
          <div className="shop">
            <h1 class="carrito-titulo">NUESTRAS RECETAS</h1>
              <div className="titulos">
                <Shop />
              </div>
              <div className="comidas-shop">
                {todasLasComidas.map(comida => {
                const { _id, nombre, descripcion, precio,imgUrl } = comida;
                return (
                  <div className='tarjeta-shop tarjeta-producto' key={_id} data-aos="fade-up" data-aos-duration="750">
                    <img src={imgUrl} alt="" width={"200px"} loading="lazy"/>
                    <div className="tarjeta-shop-textos">
                      <h2>{nombre}</h2>
                      <p>{descripcion}</p>
                    </div>
                    <div className="opciones-comprar">
                      <p>${precio}</p>
                      <button className='comprar-ahora'>Comprar Ahora</button>
                    </div>
                    
                  </div>
                );
                })}
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export { TodasLasComidas }