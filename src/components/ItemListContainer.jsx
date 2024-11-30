import React from 'react'

const ItemListContainer = ({ welcomeMessage }) => {
    return (
        <div className="item-list-container">
            <h1>{welcomeMessage}</h1>
            <p>Producto 1</p>
            <p>Producto 2</p>
            <p>Producto 3</p>
        </div>
    );
};

export default ItemListContainer;