import React from "react"
import { Link } from "react-router-dom"

export default function Items({listaProductos}){
    
    return(
        <div className='itemContainer-prod' key={listaProductos.id}>
            <img src={listaProductos.img} alt={listaProductos.nombre}/>
            <p className="ItemTitle">{listaProductos.nombre}</p>
            <p className="Item">{listaProductos.descripcion}</p>
            <p className='ItemPrice'>$ {listaProductos.precio}</p>
            <Link to={`/Productos/${listaProductos.id}`}>
                <button className='BotonDetalles'>DETALLES</button>
            </Link>
        </div>
    )
}