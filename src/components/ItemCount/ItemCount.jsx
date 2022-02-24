import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./ItemCount.css"

export default function ItemCount({initial,numberStock,keyId,precio}){

    const[Btn,setBtn]=useState("AddOn")
    const [cantidad,setCantidad]=useState(true)
    const [contador, setContador]=useState(initial)
    const [impar, setImpar]=useState(false)
    const stock = numberStock

    useEffect(()=>{
        setContador(1)
    },[setCantidad])

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
            if(contador<stock){
                setContador(contador+1)
            }
        }
    }
    const ClickResta = ()=>{
        if(cantidad){
            if(contador>1){
                setContador(contador-1)
            }
        }
    }
    
    const BtnAddOn=()=>{
        const agregarCarrito = ()=>{
            setBtn("carrito")
            setCantidad(false)
        }
        return(
            <button className="ItemButton" onClick={agregarCarrito}>AGREGAR</button>
        )
    }
    const BtnCarrito=()=>{
        return(
            <Link to={"/CarritoFinal"}>
                <button className="ItemButton">FINALIZAR COMPRA</button>
            </Link>
        )
    }

    return(
        <>
            {cantidad?<></>:<p>{`${contador}  x  $${precio} = $${contador*precio}`}</p>}
            <div className='ItemCount-container' style={{border:`3px solid ${impar?"#00000026" : "#00000075"}`}}>
                <p className='ItemCount-p cursor' onClick={ClickResta}>-</p>
                <p className='ItemCount-p'>{contador}</p>
                <p className='ItemCount-p cursor' onClick={ClickSuma}>+</p>
                {Btn==="AddOn"? <BtnAddOn/>:<BtnCarrito/>}
            </div>
        </>
    )
}