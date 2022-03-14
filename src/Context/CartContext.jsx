import React,{useState,createContext,useEffect} from "react";
import { collection,getDocs,query,where} from "firebase/firestore";
import { db } from "../utils/firebase";

export const CartContext = createContext()

export const UseCartContext = ({children})=>{

    const [arrayCarrito,setArrayCarrito]=useState([])
    const [cant,setCant]=useState(0)
    const [update,setUpdate]=useState(false)
    const [precio,setPrecio]=useState(0)
    const [productos, setProductos] = useState([])
    const [form,setForm]=useState([])

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

    const pagoFinal=()=>{
        if(form.length===0){
            return false
        }else if(arrayCarrito.length===0){
            return false
        }else{
            console.log(arrayCarrito)
            const array = arrayCarrito.map(prod=>{
                const getData = async()=>{
                    console.log("prod",prod)
                    const q = query(collection(db,"Productos"),where("Nombre","==",prod.nombre))
                    const response = await getDocs(q)
                    console.log(response.metadata)
                }
                getData()
            })
            console.log(array)

            return true
        }
    }

    useEffect(()=>{
        cantidadCarrito()
        precioFinal()
    })

    useEffect(()=>{
        const getData = async()=>{
            const q = query(collection(db,"Productos"),where("Stock",">",0))
            const response = await getDocs(q)
            const dataItems = response.docs.map(doc=>{return{id:doc.id,...doc.data()}})
            setProductos(dataItems)
        }
        getData()
    },[])
    
    return(
        <CartContext.Provider value={{arrayCarrito,AddItem,cantidadCarrito,borrarDelCarrito,vaciarCarrito,cant,precio,productos,setForm,pagoFinal}}>
            {children}
        </CartContext.Provider>
    )
}