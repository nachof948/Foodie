import React from 'react';
import { Link } from 'react-router-dom';

const ExplorarHero = () => {
  return(
    <>
      <Link to={"https://restaurant-foodied.onrender.com/comidas/all"} className='btn-hero-der'>Explorar Mas <span><i className="bi bi-arrow-right-circle"></i></span></Link>
    </>
  )
}

export { ExplorarHero }