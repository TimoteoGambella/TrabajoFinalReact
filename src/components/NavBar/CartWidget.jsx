import React,{useContext} from 'react';
import './NavBar.css';
import carro from './cart.png';
import { CartContext } from '../../Context/CartContext';

export default function CartWidget(){

    const {contador,contCart}=useContext(CartContext)

    return(
        <div>
            <img src={carro} alt="carro" className="Cart" id="Cart-fixed"/>
            <p className='CantidadCart' id='CantidadCart'>{contCart ? (<></>):(contador)}</p>
        </div>
    )
}
