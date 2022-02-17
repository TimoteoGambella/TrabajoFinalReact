import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import PageTienda from "./Tienda";
import ItemDetails from "../ItemDetails/ItemDetails";

export default function Pages(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<PageTienda/>}/>
                <Route exact path="/ItemDetails/:id" element={<ItemDetails/>}/>
                {/* <Route exact path="*" element={</>}/> */}
            </Routes>
        </BrowserRouter>
    )
}