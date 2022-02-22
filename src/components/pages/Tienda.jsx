import React from "react";
import NavBar from "../NavBar/NavBar";
import ItemListContainer from "../ItemListContainer/ItemList";

export default function PageTienda(){
    
    window.onscroll = function() {
        var y = window.scrollY;
        if(y>195){
            const i = document.getElementById("navBar")
            const ii = document.getElementById("Cart-fixed")
            if(i,ii){
                i.className="navbar-fixed navbar-expand-lg navbar-light"
                ii.className="Cart-fixed"
            }
        }else if(y===0){
            return
        }else{
            const i = document.getElementById("navBar")
            const ii = document.getElementById("Cart-fixed")
            if(i,ii){
                i.className="navbar navbar-expand-lg navbar-light"
                ii.className="Cart"
            }
        }
    };
    
    return(
        <React.Fragment>
            <NavBar />
            <ItemListContainer />
        </React.Fragment>
    )
}
