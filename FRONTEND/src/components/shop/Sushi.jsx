import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { HeaderShop,Shop, Footer } from '../../indice';
import { useNavigate } from 'react-router-dom';
import { mirarProducto } from '../../Funciones/mirarProducto';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Sushi = ({userGoogle}) => {
  const navegar = useNavigate()
  useEffect(()=>{AOS.init()},[])

  const [Sushi, setSushi] = useState([])
  useEffect(()=>{
    axios.get('/comidas/Sushi')
    .then((response)=>{
      setSushi(response.data.comidas);
    })
    .catch((error)=>{console.log(error)})
  },[])
  return(
    <>
    <HeaderShop userGoogle={userGoogle} />
    <main> 
      <section className='comida-habitual'>
        <div className="shop">
          <h1 class="carrito-titulo">NUESTRAS RECETAS</h1>
            <div className="titulos">
              <Shop />
            </div>
            <div className="comidas-shop">
              {Sushi.map(comida => {
              const { _id, nombre, descripcion, precio,imgUrl } = comida;
              return (
                <div className='tarjeta-shop tarjeta-producto' key={_id}  onClick={()=>{mirarProducto(_id, navegar)}} data-aos="fade-up" data-aos-duration="750">
                  <img src={imgUrl} alt="" width={"200px"} loading="lazy" />
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

export { Sushi }