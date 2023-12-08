import React from 'react';
import { Link } from 'react-router-dom';

const CarritoDeCompras = () => {
  return(
    <div>
      <Link to={"https://restaurant-foodied.onrender.com/compras"}><i class="bi bi-cart"></i></Link>
    </div>
  )
}

export { CarritoDeCompras }