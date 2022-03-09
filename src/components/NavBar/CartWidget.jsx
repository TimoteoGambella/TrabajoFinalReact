import React,{useContext} from 'react';
import './NavBar.css';
import carro from './cart.png';
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";

export default function CartWidget(){
    
    const {cant}=useContext(CartContext)

    return(
        <div>
            <Link to={"/CarritoFinal"}>
                <img src={carro} alt="carro" className="Cart" id="Cart-fixed"/>
            </Link>
            <p className='CantidadCart' id='CantidadCart'>
                {cant}
            </p>
        </div>
    )
}
