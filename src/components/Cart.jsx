import CartItems from "./CartItems"
import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import React from 'react'

function Cart() {
    const { cart, clearCart } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length > 0 ? (
                <>
                    <CartItems items={cart} />
                    <button className='btn-detalle2' onClick={clearCart}>Vaciar Carrito</button>
                </>
            ) : (
                <p>No hay productos en el carrito.</p>
            )}
        </div>
    );
}

export default Cart