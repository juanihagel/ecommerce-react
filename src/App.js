import React from "react";
import { render } from "react-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Avatar from './componentes/Avatar';
import Card from './componentes/Card';
import BarraNav from './componentes/NavBar';
import ItemListConteiner from "./componentes/ItemListConteiner/ItemListConteiner";
import CartWidget from "./componentes/cart/CartWidget";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Shop from "./routes/Shop";

function App() {
  return (
    <header>
      <div className='App'>
     <Card/>
     <Avatar/>
     
     
      <BrowserRouter>
       <BarraNav />
          <Routes>
            <Route exact path="/" element ={ <Home/>} />
            <Route exact path="/CartWidget" element ={ <CartWidget/>} />
            <Route exact path="/Shop" element ={<Shop/>}/>
          </Routes>

        
        </BrowserRouter>
      </div>
    </header>

  );
}

export default App;
