import './App.css';
import { Navigate, Route, Routes} from'react-router-dom'
import { TodasLasComidas, Carnes, Ensaladas, Sushi, Pastas, Pizzas, Sopas, Dulces, Veganos, Hamburguesas, Home, Producto, Registrarme} from './indice';
function App() {
  const userGoogle = false

  return (
  <div className="App">
      <Routes>
        <Route path='/' element={<Home userGoogle={userGoogle} />}></Route>
        <Route path='/comidas/all' element={userGoogle ? <TodasLasComidas /> : <Navigate to={'/auth/registrarse'}/>}></Route>
        <Route path='/comidas/carnes' element={<Carnes />}></Route>
        <Route path='/comidas/ensaladas' element={<Ensaladas />}></Route>
        <Route path='/comidas/sushi' element={<Sushi />}></Route>
        <Route path='/comidas/pastas' element={<Pastas />}></Route>
        <Route path='/comidas/pizzas' element={<Pizzas />}></Route>
        <Route path='/comidas/veganos' element={<Veganos />}></Route>
        <Route path='/comidas/sopas' element={<Sopas />}></Route>
        <Route path='/comidas/dulces' element={<Dulces />}></Route>
        <Route path='/comidas/hamburguesas' element={<Hamburguesas />}></Route>
        <Route path='/producto/:_id' element={<Producto />}></Route>
        <Route path='/auth/registrarse' element={<Registrarme />}></Route>
      </Routes>

  </div>
  );
}

export default App;
