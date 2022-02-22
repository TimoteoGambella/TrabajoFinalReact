import React from "react"
import { Link } from "react-router-dom"

export default function Items({listaProductos}){
    return(
        <div className='itemContainer-prod' key={listaProductos.id}>
            <img src={listaProductos.img} alt={listaProductos.name}/>
            <p className="ItemTitle">{listaProductos.name}</p>
            <p className="Item">{listaProductos.description}</p>
            <p className='ItemPrice'>$ {listaProductos.precioUnidad}</p>
            <Link to={`/ItemDetailsContainer/${listaProductos.id}`}>
                <button className='BotonDetalles'>DETALLES</button>
            </Link>
        </div>
    )
}