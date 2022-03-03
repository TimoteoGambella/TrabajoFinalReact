import React,{useState,createContext} from "react";

export const CartContext = createContext()

export const UseCartContext = (props)=>{

    const [arrayCarrito,setArrayCarrito]=useState([])
    
    const sumaArrayCarrito = (data)=>{
        setArrayCarrito(
            [...arrayCarrito,data]
            )
        }
    console.log(arrayCarrito)

    return(
        <CartContext.Provider value={{sumaArrayCarrito}}>
            {props.children}
        </CartContext.Provider>
    )
}