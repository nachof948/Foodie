import React,{useState, useEffect} from 'react';
import axios from 'axios';
const Opciones = () => {
  const [opciones, setOpciones] = useState([])
  useEffect(() => {
    axios.get('/home')
    .then((response) =>{
      setOpciones(response.data.comidas)
    })
    .catch((error) =>{console.error(error)})
  },[])
  return(
    <div>
      {opciones.map(opcion =>{
        const {nombre,_id} = opcion
        return(
          <div key={_id}> 
            <h2>{nombre}</h2>
          </div>
        )
      })}
    </div>
  )
}

export { Opciones }