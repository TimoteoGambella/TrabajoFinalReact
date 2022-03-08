import React,{useContext,useEffect,useState} from 'react';
import './NavBar.css';
import carro from './cart.png';
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";

export default function CartWidget(){

    const {cantidadCarrito,arrayCarrito}=useContext(CartContext)

    const [total,setTotal]=useState(0)

    useEffect(()=>{
        setTotal(cantidadCarrito())
    },[arrayCarrito])

    return(
        <div>
            <Link to={"/CarritoFinal"}>
                <img src={carro} alt="carro" className="Cart" id="Cart-fixed"/>
            </Link>
            <p className='CantidadCart' id='CantidadCart'>{total}</p>
        </div>
    )
}
