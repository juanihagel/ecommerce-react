import React from "react";
import { render } from "react-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import logo from './logo.svg';
import Avatar from './componentes/Avatar';
import Card from './componentes/Card';
import BarraNav from './componentes/NavBar';
import ItemListConteiner from "./componentes/ItemListConteiner/ItemListConteiner";
import CartWidget from "./componentes/cart/CartWidget";

function App() {
  return (
<header>
  <div className='App'>
    
    <ItemListConteiner/>
    

    <Avatar />
    <BarraNav/>

    
  
  </div>
</header>
    
  );
}

export default App;
