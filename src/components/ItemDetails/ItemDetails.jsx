import React from "react";
import "../NavBar/NavBar.css"
import "./ItemDetails.css"
import logo from "../NavBar/rose.png"
import baseDeDatos from "../ItemListContainer/productos.json"
import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetails({id}){
    return(
        <div>
            <div>
                <div className="cabecero" id="cabecero">
                    <a href="/"><h1 className="tituloI">ROSÉ</h1></a>
                    <div>
                        <a href="/"><img src={logo} alt="LOGO"/></a>
                        <br/>
                        <a href="/">By Carolina</a>
                    </div>
                    <a href="/"><h1 className="tituloD">AROMAS</h1></a>
                </div>
                <div className="ItemContainerDetail">
                    <h1>{baseDeDatos[id].name}</h1>
                    <img src={baseDeDatos[id].img} alt={baseDeDatos[id].name}/>
                    <h2>{baseDeDatos[id].description}</h2>
                    <p>{baseDeDatos[id].descriptionExtra}</p>
                    <p className="ItemPriceDetail">$ {baseDeDatos[id].precioUnidad}</p>
                    <div className="ItemCount">
                        <ItemCount numberStock={baseDeDatos[id].stock} initial={1} keyId={baseDeDatos[id].id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}