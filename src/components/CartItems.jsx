import React from 'react'
import CartItem from "./CartItem"
import { useContext } from "react"
import { CartContext } from "../context/cartContext"


function CartItems ({ items }) {
    const { getTotal } = useContext(CartContext)
    return (
        <div className="Cart-Contenedor">

            {items.map(item=> (
                <CartItem item={item} key={item.id} />
            ))}
            <p> su total es: {getTotal()} € </p>
            <button className='btn-detalle'>Finalizar compra</button>
        </div>
    
    )
}

export default CartItems