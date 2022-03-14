import React,{useContext,useState} from "react";
import { CartContext } from "../../Context/CartContext";
import "./Carrito.css"
import { Link } from "react-router-dom";
import FormularioPago from "../FormularioPago/FormularioPago";

export default function CarritoFinal(){

    const {arrayCarrito,borrarDelCarrito,AddItem,vaciarCarrito,precio,setForm,pagoFinal}=useContext(CartContext)

    const [pago,setPago]=useState(true)
    const [validarPago,setValidarPago]=useState(false)


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

    const handleClick=()=>{
        if(!pagoFinal()){
            setPago(false)
        }else{
            setPago(false)
            setValidarPago(true)
        }
    }


    const onSubmit=(data)=>{
        setForm([
            data
        ])
        return(true)
    }

    return(
        <div className="CartContainer">
            <div className="CartContainer-1">
                <ul className="ListaItem">
                    {arrayCarrito.length===0?
                        <div style={{width:"400px"}}>
                            <Link to={"/Tienda/Todo"} style={{ textDecoration: 'none'}}>
                                    <p className="agregarProductos">AGREGAR PRODUCTOS</p>
                            </Link>
                        </div>
                        :
                        arrayCarrito.map(prod=>{
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
                <div className="form-pay">
                    <FormularioPago onSubmit={onSubmit}/>
                </div>
                <br/>
                <div>
                    <p className="vaciarCarrito" onClick={()=>{vaciarCarrito()}}>VACIAR CARRITO</p>
                    <div className="containerInfo">
                        <p>TOTAL:</p>
                        {precio===0?<></>:<p>$ {precio}</p>}
                    </div>
                    <p className="botonPagar" onClick={()=>{handleClick()}}>PAGAR</p>
                    {pago?(<p>
                        </p>):validarPago?
                            <p className="validacion-pago">Pago Realizado</p>:
                            <p className="validacion-pago">Pago Denegado</p>
                    }
                </div>
            </div>
        </div>
    )
}