import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import "./Carrito.css"

export default function CarritoFinal(){

    const {arrayCarrito}=useContext(CartContext)
    console.log(arrayCarrito)
    
    return(
        <div className="CartContainer">
            <ul>
                {arrayCarrito.map(prod=>(
                    <>
                        <li>{prod.nombre}</li>
                        <li>{prod.cantidad}</li>
                        <li>{prod.precioUnidad}</li>
                    </>
                ))}
            </ul>
            <div>borrar item</div>
            <div>vaciar carrito</div>
        </div>
    )
}