import React, {useState, useEffect,useContext} from 'react';
import "./ItemCount.css"
import baseDeDatos from "../ItemListContainer/productos.json"
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


export default function ItemCount({boton,BtnAddOn,BtnCarrito}){
 
    const {AddItem}=useContext(CartContext)

    const{id}=useParams()

    const [impar, setImpar]=useState(false)
    const [cantidad,setCantidad] = useState(1)

    const sumCant=()=>{
        if(cantidad>=baseDeDatos[id].stock){
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
        AddItem({name:baseDeDatos[id].name,
            cantidad:cantidad,
            precio:baseDeDatos[id].precioUnidad,
            id:baseDeDatos[id].id})
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