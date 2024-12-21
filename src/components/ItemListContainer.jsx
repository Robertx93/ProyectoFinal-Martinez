import React from 'react'
import {useState, useEffect } from "react"
import { useParams } from 'react-router'
import ItemList from './ItemList'


function ItemListContainer () {
    const [items, setItems] = useState([])
    const { id } = useParams()
    const allProducts = 'https://dummyjson.com/products'
    const categoryProducts = `https://dummyjson.com/products/category/${id}`
    
    useEffect(() => {
        fetch(id ? categoryProducts : allProducts)
            .then(res => res.json())
            .then(res => setItems(res.products))
    }, [id, categoryProducts])
    
    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer;