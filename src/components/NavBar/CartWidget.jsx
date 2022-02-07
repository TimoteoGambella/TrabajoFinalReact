import React from 'react';
import './NavBar.css';
import carro from './cart.png';

export default function CartWidget(){
    return(
        <div>
            <img src={carro} alt="carro" className="Cart-fixed"/>
        </div>
        
    )
}
