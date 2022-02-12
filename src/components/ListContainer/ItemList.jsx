import React from 'react';
import "./ItemList.css"
import ItemCount from '../ItemCount/ItemCount';
import baseDeDatos from "../ListContainer/productos.json"

export default function ItemListContainer(){
    return(
        <div className='itemContainer'>
            {baseDeDatos.map((prod)=>
            <div className='itemContainer-prod'>
                <img src={prod.img} alt={prod.name} />
                    <p className="ItemTitle">{prod.name}</p>
                    <p className="Item">{prod.description}</p>
                    <p className='ItemPrice'>$ {prod.precioUnidad}</p>
                <ItemCount numberStock={prod.stock} initial={1}/>
                <button>AGREGAR</button>
            </div>
            )}
        </div>
    )
}