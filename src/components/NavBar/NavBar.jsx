import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="navbar position-fixed" id='navbar'>
            <div className="nav-logo">
                <Link className='active' to='inicio' spy={true} smooth={true} offset={-70} duration={500} >Grupo 6</Link>
            </div>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link className='active' to='nosotros' spy={true} smooth={true} offset={-70} duration={500} >Nosotros</Link>
                <Link className='active' to='productos' spy={true} smooth={true} offset={-70} duration={500} >Productos</Link>
                <Link className='active' to='servicios' spy={true} smooth={true} offset={-70} duration={500} >Servicios</Link>
                <Link className='active' to='contacto' spy={true} smooth={true} offset={-70} duration={500} >Contacto</Link>
                <Link className='active' to='inicio' spy={true} smooth={true} offset={-70} duration={500} >Inicio</Link>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div >
    )
}

export default NavBar