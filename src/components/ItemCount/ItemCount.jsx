import React, {useState, useEffect} from 'react';
import "./ItemCount.css"
import signoMas from "./mas.png"
import signoMenos from "./menos.png"

export default function ItemCount({numberStock}){
    const [contador, setContador]=useState(1)
    const stock = numberStock
    console.log(stock)

    useEffect(()=>{
        if(contador%2==0){
            document.querySelector('.ItemCount-container').style.border = '3px solid lightblue';
        }
        if(contador%2!=0){
            document.querySelector('.ItemCount-container').style.border = '3px solid red';
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
        <div className='ItemCount-container'>
            <img src={signoMas} className='ItemCount-img' onClick={ClickSuma}></img>
            <p className='ItemCount-p'>{contador}</p>
            <img src={signoMenos} className='ItemCount-img' onClick={ClickResta}></img>
        </div>
    )
}