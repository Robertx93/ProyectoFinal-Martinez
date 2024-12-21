import React from 'react';

function ItemList({ items }) {
    return (
        <div className="contenedor">
            {items.map(item => (
                <div className="producto" key={item.id}>
                    <img src={item.thumbnail} alt="imagen producto" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button>Ver detalles</button>
                </div>
            ))}
        </div>
    );
}

export default ItemList;