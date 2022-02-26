import React,{useState,createContext} from "react";

export const CartContext = createContext()

export const CartContextx = (props)=>{

    const [arrayCarrito,setArrayCarrito]=useState([3,5,1])
    
    const sumaArrayCarrito = (data)=>{
        console.log(typeof(data),data)
        setArrayCarrito(
            [...arrayCarrito,data]
            )
        }
    
    console.log(arrayCarrito)

    return(
        <CartContext.Provider value={{sumaArrayCarrito,arrayCarrito}}>
            {props.children}
        </CartContext.Provider>
    )
}