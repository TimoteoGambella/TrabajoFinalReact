import React, {useState, useEffect} from 'react';
import "./ItemCount.css"
import signoMas from "./mas.png"
import signoMenos from "./menos.png"

export default function ItemCount({initial,numberStock}){
    const [contador, setContador]=useState(initial)
    const [impar, setImpar]=useState(false)
    const stock = numberStock

    useEffect(()=>{
        if(contador%2===0){
            setImpar(true)
        }
        if(contador%2!==0){
            setImpar(false)
        }
    },[contador])

    const ClickSuma = ()=>{
        if(contador<stock){
            setContador(contador+1)
        }
    }
    const ClickResta = ()=>{
        if(contador>1){
            setContador(contador-1)
        }
    }

    return(
        <div className='ItemCount-container' style={{border:`3px solid ${impar?"blue" : "red"}`}}>
            <img src={signoMenos} className='ItemCount-img' onClick={ClickResta}></img>
            <p className='ItemCount-p'>{contador}</p>
            <img src={signoMas} className='ItemCount-img' onClick={ClickSuma}></img>
        </div>
    )
}