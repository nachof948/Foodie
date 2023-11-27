import React from 'react';
import { Elegirnos, Header, Hero, MenuEspecial, Opciones } from '../../indice';

const Home = () => {
  return(
    <>
      <Header/>
      <Hero />
      <Opciones />
      <Elegirnos />
      <MenuEspecial />
    </>
  )
}

export { Home }