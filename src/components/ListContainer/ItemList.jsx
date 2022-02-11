import React, { useEffect } from 'react';
import "./ItemList.css"
import ItemCount from '../ItemCount/ItemCount';
import baseDeDatos from "../ListContainer/productos.json"

export default function ItemListContainer({text,title}){

    
    useEffect(()=>{
        console.log("hola")
        for(var producto of baseDeDatos){
            var PhotoNumber=producto.img
            console.log(PhotoNumber)
        }        
    },[])

    return(
            <div>
                <img src={baseDeDatos[0].img} alt="fe" />
                <div  className="ItemList">
                    <p className="TitleItemList">{baseDeDatos[0].name}</p>
                    <p className="Item">{text}</p>
                </div>
                <ItemCount numberStock={5} initial={1}/>
            </div>
    )
}