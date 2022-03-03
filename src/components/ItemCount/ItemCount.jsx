import React, {useState, useEffect, useContext} from 'react';
import "./ItemCount.css"
import { DatosProductos } from '../ItemDetails/ItemDetails';

export default function ItemCount(){

    const [impar, setImpar]=useState(false)
    const {boton,cantidad,contador,setContadorFunction,numberStock,precio}=useContext(DatosProductos)

    useEffect(()=>{
        if(contador%2===0){
            setImpar(true)
        }
        if(contador%2!==0){
            setImpar(false)
        }
    },[contador])
    
    const ClickSuma = ()=>{
        if(cantidad){
            if(contador<numberStock){
                setContadorFunction("suma")
            }
        }
    }
    const ClickResta = ()=>{
        if(cantidad){
            if(contador>1){
                setContadorFunction("resta")
            }
        }
    }

    return(
        <>
            {cantidad?<></>:<p>{`${contador}  x  $${precio} = $${contador*precio}`}</p>}
            <div className='ItemCount-container' style={{border:`3px solid ${impar?"#00000026" : "#00000075"}`}}>
                <p className='ItemCount-p cursor' onClick={ClickResta}>-</p>
                <p className='ItemCount-p'>{contador}</p>
                <p className='ItemCount-p cursor' onClick={ClickSuma}>+</p>
                {boton}
            </div>
        </>
    )
}