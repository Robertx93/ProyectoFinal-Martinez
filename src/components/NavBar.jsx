import React from 'react'
import LogoTrans from '../assets/images/logo-transparent.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router';

const NavBar = () => {
    const itemCount = 1;
    return (
        <nav>
            <div><Link to='/'><img src={LogoTrans} alt="Logo" className="logo-transparent" /></Link></div>
            <ul>
                <Link to='category/beauty'>GPU</Link>
                <Link to='category/fragrances'>Procesadores</Link>
                <Link to='category/furniture'>Memoria RAM</Link>
                <Link to='category/Refrigeracion'>Refrigeracion</Link>
            </ul>
            <CartWidget itemCount={itemCount}/>
        </nav>
    );
};

export default NavBar;