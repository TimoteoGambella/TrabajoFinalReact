import React,{ useState,useContext } from "react";
import "../NavBar/NavBar.css"
import "./ItemDetails.css"
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function ItemDetails(){

    const {id}=useParams()
    const {productos}=useContext(CartContext)

    const listaProducto=productos.filter(prod=>prod.id === id)

    const BtnAddOn=()=>{        
        return(
            <>
                <button className="ItemButton" onClick={()=>{
                    setBotonMostrar("BtnCarrito")
                }}>AGREGAR</button>
            </>
        )
    }
    const BtnCarrito=()=>{
        return(
            <Link to={"/CarritoFinal"}>
                <button className="ItemButton" onClick={()=>{
                    setBotonMostrar("BtnAddOn")
                }}>FINALIZAR COMPRA</button>
            </Link>
        )
    }

    const [botonMostrar,setBotonMostrar] = useState("BtnAddOn")

    return(
        <div>
            <Link to={"/Tienda"}  style={{ textDecoration: 'none' }}>
                <h6 className="h6-volver">VOLVER A LA TIENDA</h6>
            </Link>
            <div>
                <div className="ItemContainerDetail">
                    <h1>{listaProducto[0].Nombre}</h1>
                    <img src={listaProducto[0].Img} alt={listaProducto[0].Nombre}/>
                    <h2>{listaProducto[0].Descripcion}</h2>
                    <p>{listaProducto[0].DescripcionExtra}</p>
                    <p className="ItemPriceDetail">$ {listaProducto[0].Precio}</p>
                    <div className="ItemCount">
                        <ItemCount boton={botonMostrar} BtnAddOn={BtnAddOn} BtnCarrito={BtnCarrito}/>
                    </div>
                </div>
            </div>
        </div>
    )
}