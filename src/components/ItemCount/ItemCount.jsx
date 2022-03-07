import React, {useState, useEffect, useContext} from 'react';
import "./ItemCount.css"
import { CartContext } from '../../Context/CartContext';

export default function ItemCount(){

    const [impar, setImpar]=useState(false)
    const {boton,mensajePrecio,contador,setContadorFunction,numberStock,precio,cantidadMensajePrecio}=useContext(CartContext)

    useEffect(()=>{
        if(contador%2===0){
            setImpar(true)
        }
        if(contador%2!==0){
            setImpar(false)
        }
    },[contador])
    
    const ClickSuma = ()=>{
        if(mensajePrecio){
            if(contador<numberStock){
                setContadorFunction("suma")
            }
        }
    }
    const ClickResta = ()=>{
        if(mensajePrecio){
            if(contador>1){
                setContadorFunction("resta")
            }
        }
    }

    return(
        <>
            {cantidadMensajePrecio?<></>:<p>{`${contador}  x  $${precio} = $${contador*precio}`}</p>}
            <div className='ItemCount-container' style={{border:`3px solid ${impar?"#00000026" : "#00000075"}`}}>
                <p className='ItemCount-p cursor' onClick={ClickResta}>-</p>
                <p className='ItemCount-p'>{contador}</p>
                <p className='ItemCount-p cursor' onClick={ClickSuma}>+</p>
                {boton}
            </div>
        </>
    )
}