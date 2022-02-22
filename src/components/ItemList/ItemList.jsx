import React from "react"
import Items from "../Items/Items"

export default function ItemList({productos}){
    return(
            <div className='itemContainer'>
                {productos.map((prod)=>
                    <Items listaProductos={prod} key={prod.id}/>
                )}
            </div>
    )
}