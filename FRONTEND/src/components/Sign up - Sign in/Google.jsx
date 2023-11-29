import React from 'react';

const Google = () => {
  return(
    <div className='registro-google'>
      <h1>Registarse</h1>
      <a className='google-enlace' href="/auth/google"><span><i className="bi bi-google"></i></span>Google</a>
      <a href="/">Volver al Inicio</a>
    </div>
  )
}

export { Google }