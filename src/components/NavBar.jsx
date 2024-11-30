import React from 'react'
import LogoTrans from '../assets/images/logo-transparent.png'
import CartWidget from './CartWidget'

const NavBar = () => {
    const itemCount = 1;
    return (
        <nav>
            <div><img src={LogoTrans} alt="Logo" className="logo-transparent" /></div>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#productos">Tiendas</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <CartWidget itemCount={itemCount}/>
        </nav>
    );
};

export default NavBar;