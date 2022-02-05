import React from 'react';
import "./ItemList.css"
function ItemListContainer(props){
    return(
        <div  className="ItemList">
            <p className="TitleItemList">{props.title}</p>
            <p className="Item">{props.text}</p>
        </div>
    )
}

export default ItemListContainer