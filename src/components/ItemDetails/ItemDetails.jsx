import React,{ useEffect,useContext } from "react";
import "../NavBar/NavBar.css"
import "./ItemDetails.css"
import baseDeDatos from "../ItemListContainer/productos.json"
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function ItemDetails(){

    const {id}=useParams()
    
    const {numStock}=useContext(CartContext)
    
    useEffect(()=>{
        numStock(id)
    },[])

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
                        <ItemCount/>
                    </div>
                </div>
            </div>
        </div>
    )
}