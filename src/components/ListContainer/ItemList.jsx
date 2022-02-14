import React, {useState} from 'react';
import "./ItemList.css"
import ItemCount from '../ItemCount/ItemCount';
import baseDeDatos from "../ListContainer/productos.json"

export default function ItemListContainer(){
    
    const [mensaje, setMensaje] = useState("Cargando...")

    const prodPromise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true)
        }, 4000);
    })
    prodPromise.then(()=>{
        setInfo(false)
    })
    prodPromise.catch(()=>{
        setMensaje("Error 404 Not found")
    })

    const [info, setInfo] = useState(prodPromise)
    
    return(
        <>{info ? (<p className="ItemTitle">{mensaje}</p>
        ) : (
            <div className='itemContainer'>
                {baseDeDatos.map((prod)=>
                <div className='itemContainer-prod' key={prod.id}>
                    <img src={prod.img} alt={prod.name} />
                        <p className="ItemTitle">{prod.name}</p>
                        <p className="Item">{prod.description}</p>
                        <p className='ItemPrice'>$ {prod.precioUnidad}</p>
                    <ItemCount numberStock={prod.stock} initial={1} keyId={prod.id}/>
                </div>
                )}
            </div>
        )}
        </>
    )
}