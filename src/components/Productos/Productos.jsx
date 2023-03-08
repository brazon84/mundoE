import React from "react";
import productos from "../../assets/images/productos.jpg";
import "./Productos.css";

const Productos = () => {
  return (
    <div
      className="contenedor-uno d-flex flex-column overflow-hidden"
      id="productos">
      <h2>Productos</h2>
      <div className="bg-dark text-white d-flex justify-content-center object-fit-contain border rounded">
        <img src={productos} alt=''/>
        <img src={productos} alt=''/>
      </div>
    </div>
  );
};

export default Productos;