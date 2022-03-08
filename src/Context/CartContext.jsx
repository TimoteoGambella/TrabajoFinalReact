import React,{useState,createContext} from "react";

export const CartContext = createContext()

export const UseCartContext = ({children})=>{

    const [arrayCarrito,setArrayCarrito]=useState([])

    const AddItem = (item)=>{
        if(!isInCart(item.id)){
            setArrayCarrito([
                ...arrayCarrito,item
            ])
        }else{
            const cartAux=arrayCarrito
            const pos = arrayCarrito.findIndex((it)=>it.id===item.id)
            
            if(cartAux[pos].cantidad+item.cantidad>cartAux[pos].stock){
                alert(`NO HAY STOCK \nSTOCK DISPONIBLE:${cartAux[pos].stock}`)
            }else{
                cartAux[pos].cantidad=cartAux[pos].cantidad+item.cantidad
                setArrayCarrito(cartAux)
            }
        }
    }

    const borrarDelCarrito=(id)=>{
        setArrayCarrito(arrayCarrito.filter(prod=>prod.id !== id))
    }

    // const vaciarCarrito = () => { setArrayCarrito([])}

    const isInCart=(id)=>{
        return arrayCarrito.some((e)=>e.id===id)
    }

    const cantidadCarrito=()=>{
        return arrayCarrito.reduce((acc,prod)=>acc+prod.cantidad,0)
    }

    return(
        <CartContext.Provider value={{arrayCarrito,AddItem,cantidadCarrito,borrarDelCarrito}}>
            {children}
        </CartContext.Provider>
    )
}