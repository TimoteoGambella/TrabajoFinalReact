import React,{useContext} from "react";
import "../NavBar/NavBar.css"
import ItemDetails from "../ItemDetails/ItemDetails";
import { CartContext } from "../../Context/CartContext";


export default function ItemDetailsContainer(){

    const {productos}=useContext(CartContext)
    

    const mensaje = "Cargando..."

    return(
        <>{productos===[] ? (
            <>
                <p className="ItemTitle-center">{mensaje}</p>
            </>
            ) : (
                <ItemDetails/>
            )}
        </>
    )
}