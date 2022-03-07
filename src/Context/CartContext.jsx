import React,{useState,createContext} from "react";
import baseDeDatos from "../components/ItemListContainer/productos.json"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const CartContext = createContext()
export const UseCartContext = (props)=>{

    const [id,setId]=useState(0)
    
    const BtnAddOn=()=>{          
        return(
            <>
                <button className="ItemButton" onClick={()=>{
                    setArrayCarrito([...arrayCarrito,{
                        nombre:baseDeDatos[id].nombre,
                        cantidad:baseDeDatos[id].cantidad,
                        precioUnidad:baseDeDatos[id].precioUnidad
                    }])
                    setMensajePrecio(false)
                    mostrarBoton()
                    setContCart(false)
                }}>AGREGAR</button>
            </>
        )
    }
    
    const BtnCarrito=()=>{
        return(
            <Link to={"/CarritoFinal"}>
                <button className="ItemButton">FINALIZAR COMPRA</button>
            </Link>
        )
    }

    const [arrayCarrito,setArrayCarrito]=useState([])

    const [mensajePrecio,setMensajePrecio]=useState(true)
    const [cantidadMensajePrecio,setCantidadMensajePrecio]=useState(true)
    const [boton, setBoton]=useState(BtnAddOn)
    const [contador, setContador]=useState(1)
    const [numberStock,setNumberStock]=useState(0)
    const [precio,setPrecio]=useState(0)
    const [contCart,setContCart]=useState(true)

    console.log(id,contador,precio)

    const numStock=(data)=>{
        setId(data)
        setNumberStock(baseDeDatos[data].stock)
        setPrecio(baseDeDatos[data].precioUnidad)
    }

    const mostrarBoton=()=>{
        setBoton(BtnCarrito)
    }

    const setContadorFunction=(data)=>{
        if(cantidadMensajePrecio){
            setCantidadMensajePrecio(false)
        }
        if(data==="suma"){
            setContador(contador+1)
        }else{
            setContador(contador-1)
        }
    }

    return(
        <CartContext.Provider value={{boton,mensajePrecio,contador,setContadorFunction,numberStock,precio,numStock,contCart,cantidadMensajePrecio,arrayCarrito}}>
            {props.children}
        </CartContext.Provider>
    )
}