import React, { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext'

const ItemCount = ({ item }) => {
    const [count, setCount] = useState(1);
    const { addToCart } = useContext(CartContext)

    const handleAddToCart = () => {
        addToCart({...item, qty: count })
    }

    const increment = () => {
        if (count) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <button className='btn-detalle' onClick={decrement}>-</button>
            {count} 
            <button className='btn-detalle' onClick={increment}>+</button>
            <button className='btn-detalle' onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;