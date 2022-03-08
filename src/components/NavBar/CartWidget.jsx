import React,{useContext,useEffect,useState} from 'react';
import './NavBar.css';
import carro from './cart.png';
import { CartContext } from '../../Context/CartContext';


export default function CartWidget(){

    const {cantidadCarrito,arrayCarrito}=useContext(CartContext)
    const x = arrayCarrito.length
    
    const [total,setTotal]=useState(0)

    useEffect(()=>{
        setTotal(cantidadCarrito())
    },[x])

    return(
        <div>
            <img src={carro} alt="carro" className="Cart" id="Cart-fixed"/>
            <p className='CantidadCart' id='CantidadCart'>{total}</p>
        </div>
    )
}
