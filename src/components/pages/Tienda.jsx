import React from "react";
import NavBar from "../NavBar/NavBar";
import ItemListContainer from "../ListContainer/ItemList";

export default function PageTienda(){
    
    window.onscroll = function() {
        var y = window.scrollY;
        if(y>195){
            document.getElementById("navBar").className="navbar-fixed navbar-expand-lg navbar-light"
            document.getElementById("Cart-fixed").className="Cart-fixed"
        }else if(y===0){
            return(console.log("Scroll-0"))
        }else{
            const i = document.getElementById("navBar")
            const ii = document.getElementById("Cart-fixed")
            if(i&ii){
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
