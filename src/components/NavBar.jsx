import React from 'react'
import LogoTrans from '../assets/images/logo-transparent.png'
import CartWidget from './CartWidget'

const NavBar = () => {
    const itemCount = 1;
    return (
        <nav>
            <div><img src={LogoTrans} alt="Logo" className="logo-transparent" /></div>
            <ul>
                <li><a href="#gpu">GPU</a></li>
                <li><a href="#procesadores">Procesadores</a></li>
                <li><a href="#memoria">Memoria RAM</a></li>
                <li><a href="#refrigeracion">Refrigeracion</a></li>
            </ul>
            <CartWidget itemCount={itemCount}/>
        </nav>
    );
};

export default NavBar;