import React from "react";
import "../NavBar/NavBar.css"
import "./ItemDetails.css"
import logo from "../NavBar/rose.png"
import { useParams } from "react-router-dom";
import baseDeDatos from "../ListContainer/productos.json"

export default function ItemDetails(){
    
    const {id}=useParams()
    console.log(id)
    console.log(baseDeDatos)
    console.log(baseDeDatos[id].img)

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
                    <p>{baseDeDatos[id].description}</p>
                    <p>{baseDeDatos[id].descriptionExtra}</p>
                    <p className="ItemPriceDetail">$ {baseDeDatos[id].precioUnidad}</p>
                </div>
            </div>
        </div>
    )
}