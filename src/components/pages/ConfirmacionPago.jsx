import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import "./ConfirmacionPago.css"
export default function ConfirmacionPago(){

    const {pagoTerminado}=useContext(CartContext)

    return(
        <div className="container-confirmarPago">
            <h1>Código de compra:</h1>
            <p>{pagoTerminado}</p>
        </div>
    )
}