import React, {useState, useEffect} from 'react';
import "./ItemCount.css"
import signoMas from "./mas.png"
import signoMenos from "./menos.png"
import baseDeDatos from "../ListContainer/productos.json"

export default function ItemCount({initial,numberStock,keyId}){
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
        <div className='ItemCount-container' style={{border:`3px solid ${impar?"#00000026" : "#00000075"}`}}>
            <img src={signoMenos} className='ItemCount-img' onClick={ClickResta}/>
            <p className='ItemCount-p'>{contador}</p>
            <img src={signoMas} className='ItemCount-img' onClick={ClickSuma}/>
            <button className="ItemButton" onClick={
                ()=>{
                        console.log(`
                            ID: ${baseDeDatos[keyId].id}
                            NAME: ${baseDeDatos[keyId].name}
                            DESCRIPTION: ${baseDeDatos[keyId].description}
                            STOCK: ${baseDeDatos[keyId].stock}
                            PRICE: ${baseDeDatos[keyId].precioUnidad}`)
                            console.log(`
                            CANTIDAD A COMPRAR: ${contador}
                            VALOR TOTAL: ${contador*baseDeDatos[keyId].precioUnidad}`)
                }
            }>AGREGAR</button>
        </div>
    )
}