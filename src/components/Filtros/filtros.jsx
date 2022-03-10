import React from "react";
import "./filtros.css"
import { Link } from "react-router-dom";

export default function Filtros(){

    return(
        <div className="container-filtros">
            <Link to={`/Tienda/${"Todo"}`} style={{ textDecoration: 'none' }}>
                <p>Todo</p> 
            </Link>
            <Link to={`/Tienda/${"Velas"}`} style={{ textDecoration: 'none' }}>
                <p>Velas</p>
            </Link>
            <Link to={`/Tienda/${"Difusores"}`} style={{ textDecoration: 'none' }}>
                <p>Difusores</p>
            </Link>
            <Link to={`/Tienda/${"Homespray"}`} style={{ textDecoration: 'none' }}>
                <p>Homespray</p>            
            </Link>
            <Link to={`/Tienda/${"Bombones"}`} style={{ textDecoration: 'none' }}>
                <p>Bombones</p>
            </Link>
        </div>
    )
}