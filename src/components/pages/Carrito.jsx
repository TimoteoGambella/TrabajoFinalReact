import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import "./Carrito.css"

export default function CarritoFinal(){

    const {arrayCarrito,borrarDelCarrito,AddItem,vaciarCarrito}=useContext(CartContext)


    const handleSum=(prod)=>{
        AddItem(
            {name:prod.name,
                cantidad:1,
                precio:prod.precioUnidad,
                id:prod.id,
                stock:prod.stock
            }
        )

    }
    const handleRest=(prod)=>{
        AddItem(
            {name:prod.name,
                cantidad:-1,
                precio:prod.precioUnidad,
                id:prod.id,
                stock:prod.stock
            }
        )
    }

    return(
        <div className="CartContainer">
            <div className="CartContainer-1">
                <ul className="ListaItem">
                    {arrayCarrito.map(prod=>{
                        return(
                            <div className="ListaItem-line" key={prod.id}>
                                <li className="ListaItem-Name">{prod.name}</li>
                                <li className="ListaItem-Cant">
                                    <p onClick={()=>handleRest(prod)}>-</p>
                                    {prod.cantidad}
                                    <p onClick={()=>handleSum(prod)}>+</p>
                                </li>
                                <li className="ListaItem-precio">{prod.cantidad * prod.precio}</li>
                                <p className="ListaItem-x" onClick={()=>{borrarDelCarrito(prod.id)}}>X</p>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className="CartContainer-2">
                <p onClick={()=>{vaciarCarrito()}}>hola</p>
            </div>
        </div>
    )
}