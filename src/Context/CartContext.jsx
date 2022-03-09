import React,{useState,createContext,useEffect} from "react";

export const CartContext = createContext()

export const UseCartContext = ({children})=>{

    const [arrayCarrito,setArrayCarrito]=useState([])
    const [cant,setCant]=useState(0)
    const [update,setUpdate]=useState(false)
    const [precio,setPrecio]=useState(0)

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
            }else if(cartAux[pos].cantidad+item.cantidad===0){
                alert("NO PUEDE ELIMINAR MÁS")
            }
            else{
                cartAux[pos].cantidad=cartAux[pos].cantidad+item.cantidad
                setArrayCarrito(cartAux)
                setUpdate(!update)
            }
        }
    }

    const borrarDelCarrito=(id)=>{
        setArrayCarrito(arrayCarrito.filter(prod=>prod.id !== id))
    }

    const vaciarCarrito = () => { setArrayCarrito([])}

    const isInCart=(id)=>{
        return arrayCarrito.some((e)=>e.id===id)
    }

    const cantidadCarrito=()=>{
        setCant(arrayCarrito.reduce((acc,prod)=>acc+prod.cantidad,0))
    }
    
    const precioFinal=()=>{
        setPrecio(arrayCarrito.reduce((acc,prod)=>(acc+prod.precio*prod.cantidad),0))
    }

    useEffect(()=>{
        cantidadCarrito()
        precioFinal()
    })


    return(
        <CartContext.Provider value={{arrayCarrito,AddItem,cantidadCarrito,borrarDelCarrito,vaciarCarrito,cant,precio}}>
            {children}
        </CartContext.Provider>
    )
}