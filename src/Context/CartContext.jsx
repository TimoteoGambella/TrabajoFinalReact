import React,{useState,createContext} from "react";

export const CartContext = createContext()

export const UseCartContext = ({children})=>{

    const [arrayCarrito,setArrayCarrito]=useState([])

    const AddItem = (item)=>{
        setArrayCarrito([
            ...arrayCarrito,item
        ])
    }

    const borrarDelCarrito=(id)=>{
        setArrayCarrito(arrayCarrito.filter(prod=>prod.id !== id))
    }

    // const vaciarCarrito = () => { setArrayCarrito([])}

    const cantidadCarrito=()=>{
        return arrayCarrito.reduce((acc,prod)=>acc+prod.cantidad,0)
    }

    return(
        <CartContext.Provider value={{arrayCarrito,AddItem,cantidadCarrito,borrarDelCarrito}}>
            {children}
        </CartContext.Provider>
    )
}