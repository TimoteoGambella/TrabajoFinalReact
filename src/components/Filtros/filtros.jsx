import React from "react";
import "./filtros.css"
import { Link } from "react-router-dom";

export default function Filtros(){

    return(
        <div className="container-filtros">
            <Link to={`/Tienda/${"Todo"}`}>
                <p>Todo</p> 
            </Link>
            <Link to={`/Tienda/${"Velas"}`}>
                <p>Velas</p>
            </Link>
            <Link to={`/Tienda/${"Difusores"}`}>
                <p>Difusores</p>
            </Link>
            <Link to={`/Tienda/${"Homespray"}`}>
                <p>Homespray</p>            
            </Link>
            <Link to={`/Tienda/${"Bombones"}`}>
                <p>Bombones</p>
            </Link>
        </div>
    )
}