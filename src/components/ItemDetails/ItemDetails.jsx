import React,{ useContext,useState } from "react";
import "../NavBar/NavBar.css"
import "./ItemDetails.css"
import baseDeDatos from "../ItemListContainer/productos.json"
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export default function ItemDetails(){

    const {id}=useParams()

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
            <div>
                <div className="ItemContainerDetail">
                    <h1>{baseDeDatos[id].name}</h1>
                    <img src={baseDeDatos[id].img} alt={baseDeDatos[id].name}/>
                    <h2>{baseDeDatos[id].description}</h2>
                    <p>{baseDeDatos[id].descriptionExtra}</p>
                    <p className="ItemPriceDetail">$ {baseDeDatos[id].precioUnidad}</p>
                    <div className="ItemCount">
                        <ItemCount boton={botonMostrar} BtnAddOn={BtnAddOn} BtnCarrito={BtnCarrito}/>
                    </div>
                </div>
            </div>
        </div>
    )
}