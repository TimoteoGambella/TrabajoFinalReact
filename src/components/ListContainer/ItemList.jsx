import React from 'react';
import "./ItemList.css"

export default function ItemListContainer({text,title}){
    return(
        <div  className="ItemList">
            <p className="TitleItemList">{title}</p>
            <p className="Item">{text}</p>
        </div>
    )
}