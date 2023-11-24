import React from 'react';
import { ExplorarHero, OrdenarHero } from '../../../../indice';

const TextosHeroUno = () => {
  return(
    <div className='textos-hero'>
      <ExplorarHero />
      <h1>SOLO VEN A FOODIED & ORDENA</h1>
      <p>Aquí encontrarás comida pura y de la mejor calidad. Ordene ahora para satisfacer su hambre</p>
      <OrdenarHero />
      <ExplorarHero />
    </div>
  )
}

export { TextosHeroUno }