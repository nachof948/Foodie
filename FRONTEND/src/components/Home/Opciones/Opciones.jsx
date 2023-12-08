import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { mirarProducto } from '../../../Funciones/mirarProducto';
import { agregarAlCarrito } from '../../../Funciones/agregarProducto';
import './Hojas de estilo/Opciones.css';

const Opciones = ({ userGoogle }) => {
  const [loading, setLoading] = useState(true);
  const [opciones, setOpciones] = useState([]);
  const navegar = useNavigate();

  useEffect(() => {
    axios.get('https://restaurante-foodied.onrender.com/home')
      .then((response) => {
        const delay = setTimeout(() => {
          setLoading(false); // Actualiza el estado de carga después del tiempo de espera
        }, 1000);
        setOpciones(response.data.comidas);
        return () => clearTimeout(delay);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // En caso de error, detener el estado de carga
      });
  }, []);

  return (
    <section id='opciones' className='seccion-opciones'>
      <div className='contenedor-opciones'>
        {loading ? (
          <div className='contenedor-spinner'>
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="comidas-shop">
            {opciones.slice(0, 4).map((comida) => {
              const { _id, nombre, descripcion, precio, imgUrl } = comida;
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="750"
                  key={_id}
                >
                  <div className='tarjeta tarjeta-producto' onClick={() => { mirarProducto(_id, navegar) }}>
                    <img src={imgUrl} alt={nombre} loading="lazy" />
                    <div className="tarjeta-textos">
                      <h2>{nombre}</h2>
                      <p>{descripcion}</p>
                    </div>
                  </div>
                  <div className="opciones-comprar">
                    <p>${precio}</p>
                    {userGoogle ? (
                      <button className='comprar-producto' onClick={() => { agregarAlCarrito(_id, navegar) }}>Comprar Ahora</button>
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
  )
}

export { Opciones };
