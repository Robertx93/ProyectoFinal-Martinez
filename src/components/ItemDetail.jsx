import ItemCount from "./ItemCount"

function ItemDetail ({ item }) {
    return (
        <div>
        <img src={item?.images[0]} alt={item?.title} style={{width:300, height:300}} />
        <p>{item?.price} €</p>
        <h3>{item?.title}</h3>
        <p>{item?.description}</p>
        <ItemCount item={item} />
    </div>
    )
}
export default ItemDetail