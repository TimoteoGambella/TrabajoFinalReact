import React, {useState, useEffect, useContext} from 'react';
import "./ItemCount.css"
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export default function ItemCount({initial,numberStock,precio}){

    const[Btn,setBtn]=useState("AddOn")
    const [cantidad,setCantidad]=useState(true)
    const [contador, setContador]=useState(initial)
    const [impar, setImpar]=useState(false)
    const stock = numberStock

    const {sumaArrayCarrito,arrayCarrito} = useContext(CartContext)

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
            console.log("contador: ", contador)
            sumaArrayCarrito(contador)
        }
        return(
            <>
                <button className="ItemButton" onClick={()=>{agregarCarrito()}}>AGREGAR</button>
            </>
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