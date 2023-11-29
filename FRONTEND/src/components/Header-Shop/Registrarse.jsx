import React from 'react';
import { Link } from 'react-router-dom';

const Registrarse = () => {
  return(
    <>
      <Link to={"/auth/registrarse"} className='registrarse'>Registrarse</Link>
    </>
  )
}

export { Registrarse }