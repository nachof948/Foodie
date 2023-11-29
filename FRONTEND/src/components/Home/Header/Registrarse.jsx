import React from 'react';
import { Link } from 'react-router-dom';
const Registrarse = ({ userGoogle }) => {
  return (
    <>
      {!userGoogle && (
        <div className='registrarse'>
          <Link to={"/auth/registrarse"}>Registrarse</Link>
        </div>
      )}
      {userGoogle && (
        <div className='registrarse'>
          <img className='avatar' src="/Imagenes/chef1.png" alt="" />
          <Link to={"/auth/registrarse"}>Nacho Fernandez</Link>
        </div>
      )}
    </>
  );
};

export { Registrarse }