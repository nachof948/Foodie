import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Shop } from './Shop';

const Sopas = () => {
  const [Sopas, setSopas] = useState([])
  useEffect(()=>{
    axios.get('/comidas/Sopas')
    .then((response)=>{
      setSopas(response.data.comidas);
    })
    .catch((error)=>{console.log(error)})
  },[])
  return(
    <div>
      <Shop />
      {Sopas.map(comida => {
        const { _id, nombre, descripcion, precio, imgUrl } = comida;
        return (
          <div key={_id}>
            <img src={imgUrl} alt="" width={"200px"} />
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <h4>${precio}</h4>
          </div>
        );
      })}
    </div>
  )
}

export { Sopas }