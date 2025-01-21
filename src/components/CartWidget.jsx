import React from 'react'
import cartIcon from '../assets/images/cart-icon.png'
import '../index.css'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

const CartWidget = ({ itemCount }) => {
    const { getQuantity } = useContext(CartContext)
    return (
        <div className="cart-widget">
            <img src={cartIcon} alt="Carrito" className="cart-icon" />
            {itemCount > 0 && (
                <span className="item-count">{getQuantity ()}</span>
            )}
        </div>
    );
};

export default CartWidget;