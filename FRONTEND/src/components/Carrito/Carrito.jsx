import React, { useState, useEffect } from 'react';
import { HeaderShop, Footer } from '../../indice';
import axios from 'axios';
import './Hoja de estilos/Carrito.css';

const Carrito = ({ userGoogle }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios.get('/compras')
      .then((response) => {
        setCarrito(response.data.carrito);

        const totalPrice = response.data.carrito.reduce((acc, item) => (
          acc + item.items.reduce((itemAcc, producto) => (
            itemAcc + (producto.precio * producto.cantidad)
          ), 0)
        ), 0);
        setTotal(totalPrice);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const restarProducto = async (productoId) => {
    try {
      await axios.post('/compras/restar', { id: productoId });
  
      const updatedCarrito = carrito.map((item) => {
        const updatedItems = item.items.map((producto) => {
          if (producto._id === productoId) {
            return { ...producto, cantidad: producto.cantidad - 1 };
          }
          return producto;
        });
        return { ...item, items: updatedItems };
      });
  
      setCarrito(updatedCarrito);
  
      const totalPrice = updatedCarrito.reduce((acc, item) => (
        acc + item.items.reduce((itemAcc, producto) => (
          itemAcc + (producto.precio * producto.cantidad)
        ), 0)
      ), 0);
      setTotal(totalPrice);
    } catch (error) {
      console.log(error);
    }
  };

  const sumarProducto = async (productoId) => {
    try {
      await axios.post('/compras/sumar', { id: productoId });
  
      const updatedCarrito = carrito.map((item) => {
        const updatedItems = item.items.map((producto) => {
          if (producto._id === productoId) {
            return { ...producto, cantidad: producto.cantidad + 1 };
          }
          return producto;
        });
        return { ...item, items: updatedItems };
      });
      setCarrito(updatedCarrito);
  
      const totalPrice = updatedCarrito.reduce((acc, item) => (
        acc + item.items.reduce((itemAcc, producto) => (
          itemAcc + (producto.precio * producto.cantidad)
        ), 0)
      ), 0);
      setTotal(totalPrice);
    } catch (error) {
      console.log(error);
    }
  };
  

  
  
  return (
    <>
      <HeaderShop userGoogle={userGoogle} />
      <section className='section-carrito'>
        {carrito.length === 0 ? (
          <div>
            <h1 className='mensaje-carrito'>No hay productos en el carrito</h1>
          </div>
        ) : (
          carrito.map((item) => (
            <div key={item._id}>
              {item.items.map((producto) => {
                const { nombre, _id, imagen, precio, cantidad } = producto;
                return (
                  <div className="carrito-productos" key={_id}>
                    <img src={imagen} alt={nombre} width={"100px"} />
                    <button className="comprar-ahora agregar" type="submit"onClick={()=>restarProducto(_id)}>-</button>
                    <p className="product-quantity">{cantidad}</p>
                    <button className="comprar-ahora agregar" onClick={()=>sumarProducto(_id)}>+</button>
                    <p>$ {precio}</p>
                    <button className='eliminar'>Eliminar</button>
                  </div>
                );
              })}
            </div>
          ))
        )}
        {carrito.length !== 0 && (
          <div className="realizar-compra">
            <div className="comprar-carrito">
              <p>Total:${total}</p>
              <button className="compra">Comprar</button>
              <div>
                <a className="explorar" href="/comidas/all">Explorar más</a>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export { Carrito };
