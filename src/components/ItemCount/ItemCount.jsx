import React, {useState, useEffect,useContext} from 'react';
import "./ItemCount.css"
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


export default function ItemCount({boton,BtnAddOn,BtnCarrito}){
 
    const {AddItem,productos}=useContext(CartContext)

    const{id}=useParams()
    const listaProducto=productos.filter(prod=>prod.id === id)


    const [impar, setImpar]=useState(false)
    const [cantidad,setCantidad] = useState(1)


    const sumCant=()=>{
        if(cantidad>=listaProducto[0].Stock){
            return
        }else{
            setCantidad(cantidad+1)
        }
    }
    
    const resCant=()=>{
        if(cantidad===0 || cantidad===1){
            return
        }else{
            setCantidad(cantidad-1)
        }
    }

    useEffect(()=>{
        if(cantidad%2===0){
            setImpar(true)
        }
        if(cantidad%2!==0){
            setImpar(false)
        }
    },[cantidad])
    
    const handleAgregar=()=>{
        AddItem({nombre:listaProducto[0].Nombre,
            cantidad:cantidad,
            precio:listaProducto[0].Precio,
            id:listaProducto[0].id,
            stock:listaProducto[0].Stock
        })
    }

    return(
        <>
            {/* {cantidadMensajePrecio?<></>:<p>{`${contador}  x  $${precio} = $${contador*precio}`}</p>} */}
            <div className='ItemCount-container' style={{border:`3px solid ${impar?"#00000026" : "#00000075"}`}}>
                <p className='ItemCount-p cursor' onClick={()=>{resCant()}}>-</p>
                <p className='ItemCount-p'>{cantidad}</p>
                <p className='ItemCount-p cursor' onClick={()=>{sumCant()}}>+</p>
                {boton==="BtnAddOn"
                    ?
                    <div onClick={()=>{handleAgregar()}}>
                        {BtnAddOn()}
                    </div>
                    :
                    <div>
                        {BtnCarrito()}
                    </div>
                }
            </div>
        </>
    )
}