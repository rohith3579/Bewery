import logo from './logo.svg';
import './App.css';
import Data from './components/Data';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Register';
import Login from './components/Login';
import { Brewery } from './components/Brewery';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}>   </Route>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      <Route path='/data' element={<Data/>}></Route>
      <Route path='/brewery/:id' element={<Brewery />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
