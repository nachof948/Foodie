import React from 'react';

const NavBar = ({userGoogle}) => {
  return(
    <nav>
      <a href="/">Inicio</a>
      <a href="#menuEspecial">Menu</a>
      <a href="#sobreNosotros">Sobre Nosotros</a>
      <a href="#contactos">Contacto</a>
    </nav>
  )
}

export { NavBar }