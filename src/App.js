import React from "react";
import { render } from "react-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Avatar from './componentes/Avatar';
import Card from './componentes/Card';
import BarraNav from './componentes/NavBar';
import ItemListConteiner from "./componentes/ItemListConteiner/ItemListConteiner";
import CartWidget from "./componentes/cart/CartWidget";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import SearchBar from "./componentes/SerchBar";
import Footer from "./componentes/Footer";
import Inicio from './componentes/Inicio';
import QuienesSomos from './componentes/QuienesSomos';
import Contacto from './componentes/Contacto';
import Sucursales from './componentes/Sucursales';



function App() {

  return (
    <header>
      <div className='App'>
     <Card/>
     <Avatar/>
     
     <SearchBar />
   
     
     
      <BrowserRouter>
       <BarraNav />
          <Router>
            <Route exact path="/" element ={ <Home/>} />
            <Route exact path="/CartWidget" element ={ <CartWidget/>} />
            <Route exact path="/Shop" element ={<Shop/>}/>
         
            </Router>
          <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/quienes-somos" component={QuienesSomos} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/sucursales" component={Sucursales} />
          
        </Switch>
        
        </BrowserRouter>
    
        <Footer />
      </div>

    </header>

    

  );
}

export default App;
