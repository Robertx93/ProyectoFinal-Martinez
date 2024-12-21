import React from 'react'
import {useState, useEffect } from "react"
import { useParams } from 'react-router'
import ItemList from './ItemList'
import { withLoading } from '../hoc/withLoading'

const ItemListWithLoading = withLoading(ItemList)

function ItemListContainer () {
    const [items, setItems] = useState([])
    const { id } = useParams()
    const allProducts = 'https://dummyjson.com/products'
    const categoryProducts = `https://dummyjson.com/products/category/${id}`
    
    useEffect(() => {
        fetch(id ? categoryProducts : allProducts)
            .then(res => res.json())
            .then(res => {
                setTimeout(() => {
                    setItems(res.products)
                }, 500)
    })
    }, [id, categoryProducts])
    return (
        <ItemListWithLoading items={items} />
    )
}

export default ItemListContainer;