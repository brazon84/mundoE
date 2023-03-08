import React from 'react'
import productos from '../../assets/images/productos.jpg'
import './Productos.css'


const Productos = () => {
    return (
        <div className='contenedor-uno d-flex flex-column overflow-hidden' id='productos'>
            <h2>
                Productos 
                </h2>
                <div class="bg-dark text-white d-flex justify-content-center object-fit-contain border rounded">
                    <img src={productos} />
                    <img src={productos} />
                </div>
                
            </div>
        
    )
}

export default Productos