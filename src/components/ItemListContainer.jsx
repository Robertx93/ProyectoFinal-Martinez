import React from 'react'
import {useState, useEffect } from "react"
import ItemList from './ItemList'
import { withLoading } from '../hoc/withLoading'

const ItemListWithLoading = withLoading(ItemList)

function ItemListContainer () {
    const [items, setItems] = useState([])
    
    useEffect( () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => {
                setTimeout(() => {
                    setItems(res.products)
                }, 2000)
    })
    }, [])
    return (
        <ItemListWithLoading items={items} />
    )
}

export default ItemListContainer;