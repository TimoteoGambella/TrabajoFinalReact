import React from "react";
import "../NavBar/NavBar.css"
import "./ItemDetails.css"
import baseDeDatos from "../ItemListContainer/productos.json"
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function ItemDetails(){

    const {id}=useParams()

    return(
        <div>
            <div>
                <NavBar/>
                <div className="ItemContainerDetail">
                    <h1>{baseDeDatos[id].name}</h1>
                    <img src={baseDeDatos[id].img} alt={baseDeDatos[id].name}/>
                    <h2>{baseDeDatos[id].description}</h2>
                    <p>{baseDeDatos[id].descriptionExtra}</p>
                    <p className="ItemPriceDetail">$ {baseDeDatos[id].precioUnidad}</p>
                    <div className="ItemCount">
                        <ItemCount numberStock={baseDeDatos[id].stock} initial={1} keyId={baseDeDatos[id].id} precio={baseDeDatos[id].precioUnidad}/>
                    </div>
                </div>
            </div>
        </div>
    )
}