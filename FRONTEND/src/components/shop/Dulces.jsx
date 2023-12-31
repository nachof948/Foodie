import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { HeaderShop,Shop, Footer } from '../../indice';
import { Link,useNavigate } from 'react-router-dom';
import { mirarProducto } from '../../Funciones/mirarProducto';
import { agregarAlCarrito } from '../../Funciones/agregarProducto';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Dulces = ({userGoogle}) => {
  const [loading, setLoading] = useState(true)
  const navegar = useNavigate()
  useEffect(()=>{AOS.init()},[])

  const [Dulces, setDulces] = useState([])
  
  useEffect(()=>{
    axios.get('https://restaurante-foodied.onrender.com/comidas/Dulces')
    .then((response)=>{
      const delay = setTimeout(() => {
        setLoading(false); // Actualiza el estado de carga después del tiempo de espera
      }, 1000);
      setDulces(response.data.comidas);
      return () => clearTimeout(delay);
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
            {loading ? (
                <div className="spinner"></div>
              ):(
                <div className="comidas-shop">
                {Dulces.map(carne => {
                const { _id, nombre, descripcion, precio,imgUrl } = carne;
                return(
                  <div data-aos="fade-up" 
                  data-aos-duration="750">
                  <div className='tarjeta tarjeta-producto' onClick={()=>{mirarProducto(_id, navegar)}} key={_id}> 
                    <img src={imgUrl} alt={nombre} loading="lazy" />
                    <div className="tarjeta-textos">
                      <h2>{nombre}</h2>
                      <p>{descripcion}</p>
                    </div>
                  </div>
                  <div className="opciones-comprar">
                        <p>${precio}</p>
                        {userGoogle ? (
                          <button className='comprar-producto' onClick={()=>{agregarAlCarrito(_id, navegar)}}>Comprar Ahora</button>
                        ) : (
                          <Link className='comprar-producto' to={'/auth/registrarse'}>Comprar Ahora</Link>
                        )}
                      </div>
                  </div> 
                )
                })}
              </div>
              )}
        </div>
      </section>
    </main>
    <Footer />
  </>
  )
}

export { Dulces }