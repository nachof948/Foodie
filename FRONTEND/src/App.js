import './App.css';
import {BrowserRouter, Route, Routes} from'react-router-dom'
import { TodasLasComidas, Carnes, Ensaladas, Sushi, Pastas, Pizzas, Sopas, Dulces, Veganos, Hamburguesas, Header} from './indice';
import { Opciones } from './components/Home/Opciones/Opciones';
function App() {
  return (

    <div className="App">
          <Header />
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Opciones />}></Route>
        <Route path='/comidas/all' element={<TodasLasComidas />}></Route>
        <Route path='/comidas/carnes' element={<Carnes />}></Route>
        <Route path='/comidas/ensaladas' element={<Ensaladas />}></Route>
        <Route path='/comidas/sushi' element={<Sushi />}></Route>
        <Route path='/comidas/pastas' element={<Pastas />}></Route>
        <Route path='/comidas/pizzas' element={<Pizzas />}></Route>
        <Route path='/comidas/veganos' element={<Veganos />}></Route>
        <Route path='/comidas/sopas' element={<Sopas />}></Route>
        <Route path='/comidas/dulces' element={<Dulces />}></Route>
        <Route path='/comidas/hamburguesas' element={<Hamburguesas />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
