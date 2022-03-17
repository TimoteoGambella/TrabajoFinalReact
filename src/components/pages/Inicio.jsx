import React from "react";
import { Link } from "react-router-dom";

export default function Inicio(){
    return(
        <div style={{textAlign:"center",marginTop:"60px"}}>
            <h1>BIENVENIDO A ROSE</h1>
            <Link to={`/Tienda/${"Todo"}`}>
                IR A LA TIENDA
            </Link>
        </div>
    )
}