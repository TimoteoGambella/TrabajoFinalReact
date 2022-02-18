import React, {useState} from 'react';
import "./ItemList.css"
import baseDeDatos from "../ListContainer/productos.json"
import Items from '../Items/Items';

export default function ItemListContainer(){


    const [productos, setProductos] = useState([])

    const prodPromise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            setProductos(baseDeDatos)
            setInfo(false)
            resolve(true)
        }, 2000);
    })
    prodPromise.then(()=>{console.log("COMPLETADO")})
    prodPromise.catch(()=>{console.log("ERROR 404")})

    const [info, setInfo] = useState(true)
    const mensaje = "Cargando..."

        return(
            <>{info ? (<p className="ItemTitle-center">{mensaje}</p>
                ) : (
                    <Items productos={productos}/>
                )}
            </>
        )
}
