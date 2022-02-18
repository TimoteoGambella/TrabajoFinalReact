import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export default function Items({productos}){
    return(
            <div className='itemContainer'>
                {productos.map((prod)=>
                <div className='itemContainer-prod' key={prod.id}>
                    <img src={prod.img} alt={prod.name}/>
                    <p className="ItemTitle">{prod.name}</p>
                    <p className="Item">{prod.description}</p>
                    <p className='ItemPrice'>$ {prod.precioUnidad}</p>
                    <Link to={`/ItemDetails/${prod.id}`}>
                        <button className='BotonDetalles'>DETALLES</button>
                    </Link>
                    <ItemCount numberStock={prod.stock} initial={1} keyId={prod.id}/>
                </div>
                )}
            </div>
    )
}