import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import "./Carrito.css"
import { Link } from "react-router-dom";

export default function CarritoFinal(){

    const {arrayCarrito,borrarDelCarrito,AddItem,vaciarCarrito,precio}=useContext(CartContext)


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
                    {arrayCarrito.length===0?
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <p className="agregarProductos">AGREGAR PRODUCTOS</p>
                        </Link>
                        :
                        arrayCarrito.map(prod=>{
                            console.log(arrayCarrito)
                            return(
                                <div className="ListaItem-line" key={prod.id}>
                                    <li className="ListaItem-Name">{prod.nombre}</li>
                                    <li className="ListaItem-Cant">
                                        <p onClick={()=>handleRest(prod)}>-</p>
                                        {prod.cantidad}
                                        <p onClick={()=>handleSum(prod)}>+</p>
                                    </li>
                                    <li className="ListaItem-precio">{prod.cantidad * prod.precio}</li>
                                    <p className="ListaItem-x" onClick={()=>{borrarDelCarrito(prod.id)}}>X</p>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="CartContainer-2">
                <p className="vaciarCarrito" onClick={()=>{vaciarCarrito()}}>VACIAR CARRITO</p>
                <div className="containerInfo">
                    <p>TOTAL:</p>
                    {precio===0?<></>:<p>$ {precio}</p>}
                </div>
                <p className="botonPagar">PAGAR</p>
            </div>
        </div>
    )
}