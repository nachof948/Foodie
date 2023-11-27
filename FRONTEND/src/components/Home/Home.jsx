import React from 'react';
import { Elegirnos, Footer, Header, Hero, MenuEspecial, MenuHabitual, Opciones, SobreNosotros } from '../../indice';

const Home = () => {
  return(
    <>
      <Header/>
      <Hero />
      <Opciones />
      <Elegirnos />
      <MenuEspecial />
      <MenuHabitual />
      <SobreNosotros />
      <Footer />
    </>
  )
}

export { Home }