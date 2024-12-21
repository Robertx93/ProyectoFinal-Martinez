function Item ({ item }) {
    return (
        <div key={item.id} className="producto">
        <img src={item.thumbnail} alt="imagen producto" />
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <button>Ver detalles</button>
    </div>
    )
}

export default Item