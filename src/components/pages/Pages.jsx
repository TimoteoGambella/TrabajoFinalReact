import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import PageTienda from "./Tienda";
import ItemDetailsContainer from "../ItemDetailsContainer/ItemDetailsContainer";

export default function Pages(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<PageTienda/>}/>
                <Route exact path="/ItemDetailsContainer/:id" element={<ItemDetailsContainer/>}/>
                {/* <Route exact path="*" element={</>}/> */}
            </Routes>
        </BrowserRouter>
    )
}