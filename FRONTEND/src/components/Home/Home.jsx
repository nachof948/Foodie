import React from 'react';
import { Elegirnos, Footer, Header, Hero, MenuEspecial, MenuHabitual, Opciones, SobreNosotros } from '../../indice';

const Home = ({userGoogle}) => {
  return(
    <>
      <Header userGoogle={userGoogle}/>
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