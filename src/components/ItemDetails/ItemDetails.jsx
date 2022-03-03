import React,{createContext, useContext, useState} from "react";
import { Link } from 'react-router-dom';
import "../NavBar/NavBar.css"
import "./ItemDetails.css"
import baseDeDatos from "../ItemListContainer/productos.json"
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const DatosProductos = createContext()

export const UseDatosProductos = (props)=>{

    const BtnAddOn=()=>{          
        const agregarCarrito = ()=>{
            sumaArrayCarrito({
                nombre:baseDeDatos[id].name,
                cantidad:contador,
                precioUnidad:precio
            })
            mostrarBoton()
            setCantidad(false)
        }
        return(
            <>
                <button className="ItemButton" onClick={()=>{agregarCarrito()}}>AGREGAR</button>
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
// ---------------------------------------------------------------------------------------------------------------------

    const [cantidad,setCantidad]=useState(true)
    const [boton, setBoton]=useState(BtnAddOn)
    const [contador, setContador]=useState(1)
    
    const {id}=useParams()
    const numberStock=baseDeDatos[id].stock
    const precio=baseDeDatos[id].precioUnidad
    const {sumaArrayCarrito}=useContext(CartContext)

    const mostrarBoton=()=>{
        setBoton(BtnCarrito)
    }

    const setContadorFunction=(data)=>{
        if(data==="suma"){
            setContador(contador+1)
        }else{
            setContador(contador-1)
        }
    }
// ---------------------------------------------------------------------------------------------------------------------

    return(
        <DatosProductos.Provider value={{boton,cantidad,contador,setContadorFunction,numberStock,precio}}>
            {props.children}
        </DatosProductos.Provider>
    )
}
// ---------------------------------------------------------------------------------------------------------------------


export default function ItemDetails(){
    const {id}=useParams()

    return(
        <div>
            <div>
                <div className="ItemContainerDetail">
                    <h1>{baseDeDatos[id].name}</h1>
                    <img src={baseDeDatos[id].img} alt={baseDeDatos[id].name}/>
                    <h2>{baseDeDatos[id].description}</h2>
                    <p>{baseDeDatos[id].descriptionExtra}</p>
                    <p className="ItemPriceDetail">$ {baseDeDatos[id].precioUnidad}</p>
                    <div className="ItemCount">
                        <UseDatosProductos>
                            <ItemCount/>
                        </UseDatosProductos>
                    </div>
                </div>
            </div>
        </div>
    )
}