import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import PageTienda from "./Tienda";
import ItemDetailsContainer from "../ItemDetailsContainer/ItemDetailsContainer";
import CarritoFinal from "./Carrito";
import NotFound from "./NotFound";
import NavBar from "../NavBar/NavBar";
import QuienSoy from "./QuienSoy";
import NuestrosProd from "./NuestrosProd";
import Refill from "./Refill";

export default function Pages(){

    return(
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<PageTienda/>}/>
                    <Route exact path="/Productos/:id" element={<ItemDetailsContainer/>}/>
                    <Route exact path="/CarritoFinal" element={<CarritoFinal/>}/>
                    <Route exact path="*" element={<NotFound/>}/>
                    <Route exact path="/QuienSoy" element={<QuienSoy/>}/>
                    <Route exact path="/NuestrosProd" element={<NuestrosProd/>}/>
                    <Route exact path="/Refill" element={<Refill/>}/>
                </Routes>
            </BrowserRouter>
    )
}