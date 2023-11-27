import React from 'react';
import { Elegirnos, Header, Hero, MenuEspecial, MenuHabitual, Opciones } from '../../indice';

const Home = () => {
  return(
    <>
      <Header/>
      <Hero />
      <Opciones />
      <Elegirnos />
      <MenuEspecial />
      <MenuHabitual />
    </>
  )
}

export { Home }