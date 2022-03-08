import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import "./Carrito.css"

export default function CarritoFinal(){

    const {arrayCarrito,borrarDelCarrito}=useContext(CartContext)
    
    return(
        <div className="CartContainer">
            <div className="CartContainer-1">
                <ul className="ListaItem">
                    {arrayCarrito.map(prod=>{
                        return(
                            <div className="ListaItem-line" key={prod.id}>
                                <li className="ListaItem-Name">{prod.name}</li>
                                <li className="ListaItem-Cant"><p>-</p>{prod.cantidad}<p>+</p></li>
                                <li className="ListaItem-precio">{prod.cantidad * prod.precio}</li>
                                <p className="ListaItem-x" onClick={()=>{borrarDelCarrito(prod.id)}}>X</p>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className="CartContainer-2">
                <p>hola</p>
            </div>
        </div>
    )
}