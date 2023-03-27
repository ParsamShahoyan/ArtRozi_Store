import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import About from "./components/About/About"
import Basket from "./components/Basket/Basket"
import { Contacts } from "./components/Contacts/Contacts"
import End from './components/End/End';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='/' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/basket/send' element={<Contacts/>}/>
          <Route path='/basket/send/end' element={<End/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
