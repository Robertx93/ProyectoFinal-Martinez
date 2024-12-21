import { useState, useEffect } from "react"
import { useParams } from "react-router"

function ItemDetailContainer () {
    const [item, setItem] = useState()
    const { id } = useParams ()
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(product => setItem(product))
    }, [id])

    return (
        <div>
            <img src={item?.images[0]} alt={item?.title} style={{width:300, height:300}} />
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
        </div>
    )
}

export default ItemDetailContainer