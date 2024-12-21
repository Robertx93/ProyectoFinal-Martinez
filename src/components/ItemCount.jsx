import React, { useState } from 'react';

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1);

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
            <button className='btn-detalle'>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;