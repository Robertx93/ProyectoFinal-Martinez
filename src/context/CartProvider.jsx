import { CartContext } from "./cartContext"
import { useState } from "react"

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => setCart([...cart, item])
    
    const getQuantity = () => {
        const quantities = cart.map(item => item.qty)
        const totalProducts = quantities.reduce((acc, current) => acc + current, 0)

        return totalProducts
    }

    const getTotal = () => {
        const quantities = cart.map(item => item.qty*item.price)
        const totalCompra = quantities.reduce((acc, current) => acc + current, 0)

        return totalCompra
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, getQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider