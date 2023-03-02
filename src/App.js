import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import Nosotros from './components/Nosotros/Nosotros';
import Productos from './components/Productos/Productos';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Inicio />
        <Nosotros />
        <Productos />
        <Servicios />
        <Contacto />
        <Footer />
      </div>
    );
  }
}

export default App;
