import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import { TodasLasComidas, Carnes, Ensaladas, Sushi, Pastas, Pizzas, Sopas, Dulces, Veganos, Hamburguesas, Home, Producto, Registrarme, Carrito, CompraRealizada} from './indice';
function App() {
  const [userGoogle, setUserGoogle] = useState(null)
  
  useEffect(() => {
    const obtenerUsuario = () => {
      
        fetch('https://restaurante-foodied.onrender.com/auth/exito',{
          method: "GET",
          credentials:"include",
          headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          },
          }).then((response) =>{
            if (response.status === 200) return response.json()
            throw new Error("La autentificacion fallo")
          }).then(resObject =>{
            setUserGoogle(resObject.user)
          }).catch(err =>{
            console.log(err)
          })
        /* const response = await axios.get('https://restaurante-foodied.onrender.com/auth/exito');
        
        if (response.status === 200) {
          if (response.data && response.data.user) {
            setUserGoogle(response.data.user); // Usuario autenticado
          } else {
            setUserGoogle(null); // Usuario no autenticado
          }
        } else {
          throw new Error('Error en la autentificación');
        } */
    };
  
    obtenerUsuario();
  }, []);
  console.log(userGoogle)
  return (
  <div className="App">
      <Routes>
        <Route path='/' element={<Home userGoogle={userGoogle} />}></Route>
        <Route path='/comidas/all' element={<TodasLasComidas userGoogle={userGoogle}/>}></Route>
        <Route path='/comidas/carnes' element={<Carnes userGoogle={userGoogle} />}></Route>
        <Route path='/comidas/ensaladas' element={<Ensaladas userGoogle={userGoogle} />}></Route>
        <Route path='/comidas/sushi' element={<Sushi userGoogle={userGoogle} />}></Route>
        <Route path='/comidas/pastas' element={<Pastas userGoogle={userGoogle}  />}></Route>
        <Route path='/comidas/pizzas' element={<Pizzas userGoogle={userGoogle} />}></Route>
        <Route path='/comidas/veganos' element={<Veganos userGoogle={userGoogle} />}></Route>
        <Route path='/comidas/sopas' element={<Sopas userGoogle={userGoogle} />}></Route>
        <Route path='/comidas/dulces' element={<Dulces userGoogle={userGoogle} />}></Route>
        <Route path='/comidas/hamburguesas' element={<Hamburguesas userGoogle={userGoogle} />}></Route>
        <Route path='/producto/:_id' element={<Producto userGoogle={userGoogle} />}></Route>
        <Route path='/auth/registrarse' element={<Registrarme />}></Route>
        <Route path='/compras' element={<Carrito userGoogle={userGoogle} />}></Route>
        <Route path='/compra-realizada' element={<CompraRealizada />}></Route>
      </Routes>
  </div>
  );
}

export default App;
