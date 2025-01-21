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
                <Link className='NavBarButtons' to='category/beauty'>Beauty</Link>
                <Link className='NavBarButtons' to='category/fragrances'>Fragrances</Link>
                <Link className='NavBarButtons' to='category/furniture'>Furniture</Link>
                <Link className='NavBarButtons' to='category/groceries'>Groceries</Link>
            </ul>
            <div className='Button-Carrito'>
            <Link to="/cart">
            <CartWidget itemCount={itemCount}/>
            </Link>
            </div>
        </nav>
    );
};

export default NavBar;