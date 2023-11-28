import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { HeaderShop, Footer } from '../../indice'
import './Hoja de estilos/Producto.css'
const Producto = () => {
  const params = useParams()
  const [nombre, setNombre] = useState('')
  const [img, setImg] = useState('')
  const [descripcionExtensa, setDescripcionExtensa] = useState('')
  const [rating, setRating] = useState('')
  const [vendidos, setVendidos] = useState('')
  const [precio, setPrecio] = useState('')

  useEffect(()=>{
    axios.post(`/producto/${params._id}`)
    .then((response)=>{
      const datos = response.data
      setNombre(datos.nombre)
      setImg(datos.imgUrl)
      setDescripcionExtensa(datos.descripcionDetallada)
      setRating(datos.rating)
      setVendidos(datos.vendidos)
      setPrecio(datos.precio)
    })
    .catch((error)=>{console.log(error)})
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [params._id]);
  return(
    <>
    <HeaderShop /> 
      <main>
      <section className='section-producto'>
          <div className="imagen-producto">
            <img src={img} alt={nombre} />
          </div>
          <div className="producto-textos">
            <h1 className='titulo-producto'>{nombre}</h1>
            <div className="ventas-rating">
              <div className="rating">
                <div className="estrellas-producto">
                  <img className="estrella-producto" src="/Imagenes/icons8-estrella.png" alt="estrella"/>
                  <img className="estrella-producto" src="/Imagenes/icons8-estrella.png" alt="estrella"/>
                  <img className="estrella-producto" src="/Imagenes/icons8-estrella.png" alt="estrella"/>
                  <img className="estrella-producto" src="/Imagenes/icons8-estrella.png" alt="estrella"/>
                  <img className="estrella-producto" src="/Imagenes/icons8-estrella.png" alt="estrella"/>
                </div>
                <p>{rating}</p>
              </div>
              <p><span>Vendidos</span>{vendidos}</p>
            </div>
            <p className='precio-producto'>${precio}</p>
            <p className='descripcion-extensa-producto'>{descripcionExtensa}</p>
            <button className='comprar-ahora comprar-producto'>Comprar Ahora</button>
          </div>
        </section>
      </main> 
      <Footer />
    </>
  )
}

export { Producto }