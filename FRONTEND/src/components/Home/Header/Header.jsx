import React from 'react';
import { CarritoDeCompras, Logo, Lupa, NavBar, Registrarse } from '../../../indice';
import './Hojas de Estilo/Header.css'
const Header = () => {
  return(
    <header>
      <div className="contenedor-header">
        <div className="logo">
          <Logo />
        </div>
        <div className="navBar">
          <NavBar />
        </div>
        <div className="header-derecha">
          <div className="header-iconos">
            <Lupa />
            <CarritoDeCompras />
          </div>
          <Registrarse />
        </div>
      </div>
    </header>
  )
}

export { Header }