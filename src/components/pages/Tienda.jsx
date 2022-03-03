import React from "react";
import ItemListContainer from "../ItemListContainer/ItemList";

export default function PageTienda(){
    
    window.onscroll = function() {
        var y = window.scrollY;
        if(y>195){
            const i = document.getElementById("navBar")
            const ii = document.getElementById("Cart-fixed")
            const iii = document.getElementById("cantidadCart")
            if(i,ii,iii){
                i.className="navbar-fixed navbar-expand-lg navbar-light"
                ii.className="Cart-fixed"
                iii.className="CantidadCart-fixed"
            }
        }else if(y===0){
            return
        }else{
            const i = document.getElementById("navBar")
            const ii = document.getElementById("Cart-fixed")
            const iii = document.getElementById("cantidadCart")
            if(i,ii,iii){
                i.className="navbar navbar-expand-lg navbar-light"
                ii.className="Cart"
                iii.className="CantidadCart"
            }
        }
    };

    return(
        <React.Fragment>
            <ItemListContainer />
        </React.Fragment>
    )
}
