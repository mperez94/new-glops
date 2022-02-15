import React, { useState } from 'react';

    function ItemListContainer (){
        const [count, setCount] = useState(1);

            const sumaClick = () => {
                if (count < 10) {
                    setCount(count + 1);
                }
            };

            const restoClick = () => {
            if (count > 1) {
                setCount(count - 1);
            }
            };


    return (
        <div className="card d-flex" style={{width: "18rem"}}>
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Producto</h5>
            <p className="card-text">Informacion del producto / STOCK MAX 10</p>
            <p>Cantidad: {count}</p>
            <button onClick={restoClick} class="btn btn-primary btnresta">-</button>
            <button onClick={sumaClick} class="btn btn-primary btnsuma" style={{margin: "5px"}}>+</button>
            <button>Agregar al Carrito</button>
        </div>
        </div>
    )
    }



export default ItemListContainer