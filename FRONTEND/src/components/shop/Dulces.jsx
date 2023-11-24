import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Shop } from './Shop';

const Dulces = () => {
  const [Dulces, setDulces] = useState([])
  useEffect(()=>{
    axios.get('/comidas/Dulces')
    .then((response)=>{
      setDulces(response.data.comidas);
    })
    .catch((error)=>{console.log(error)})
  },[])
  return(
    <div>
      <Shop />
      {Dulces.map(comida => {
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

export { Dulces }