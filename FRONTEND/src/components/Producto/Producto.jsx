import React,{useState, useEffect} from 'react';
import { Footer, HeaderShop } from '../../indice';
import axios from 'axios'
import { useParams } from 'react-router-dom';
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
  },[params._id])
  return(
    <>
    <HeaderShop />
      <main>
        <section>
          <img src={img} alt={nombre} />
          <div className="producto-textos">
            <h1>{nombre}</h1>
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
              <p>Vendidos <span>{vendidos}</span></p>
            </div>
            <p>{descripcionExtensa}</p>
            <p>${precio}</p>
            <button className='comprar-ahora'>Comprar Ahora</button>
          </div>
        </section>
      </main>
    <Footer />
    </>
  )
}

export { Producto }