import { Link } from "react-router"

function Item ({ item }) {
    return (
        <div key={item.id} className="producto">
            <img src={item.thumbnail} alt="imagen producto" />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <Link className='btn-detalle' to={`/item/${item.id}`}>Ver detalles</Link>
        </div>
    )
}

export default Item