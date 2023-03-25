import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Product from './components/Product/Product';
import Products from './components/Products/Products';
import About from "./components/About/About"
import Basket from "./components/Basket/Basket"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='/' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/basket' element={<Basket/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
