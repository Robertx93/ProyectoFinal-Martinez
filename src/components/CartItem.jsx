import React from 'react';
import ItemCount from './ItemCount';


function CartItem({ item }) {
    return (
        <><div className='cart-item'>
            <div className='cart-item-image-container'>
                <img src={item?.images[0]} alt={item.title} className='cart-item-image' />
            </div>
            <div className='cart-item-details'>
                <h3 className='cart-item-title'>{item.title}</h3>
                <p className='cart-item-qty'>Cantidad: {item.qty}</p>
                <p className='cart-item-price'>Precio: ${item.price}</p>
            </div>
            <div>
            <ItemCount item={item} />
            </div>
        </div>
        <div className="cart-item-separator"></div></>
    );
}

export default CartItem;