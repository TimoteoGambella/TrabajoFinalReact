import React, {useState} from 'react';
import "./ItemList.css"
import ItemCount from '../ItemCount/ItemCount';
import baseDeDatos from "../ListContainer/productos.json"

export default function ItemListContainer(){
    
    const [productos, setProductos] = useState([])

    const prodPromise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            setProductos(baseDeDatos)
            setInfo(false)
            resolve(true)
        }, 4000);
    })
    prodPromise.then(()=>{console.log("COMPLETADO")})
    prodPromise.catch(()=>{console.log("ERROR 404")})

    const [info, setInfo] = useState(true)
    const mensaje = "Cargando..."
    
        return(
            <>{info ? (<p className="ItemTitle-center">{mensaje}</p>
            ) : (
                <div className='itemContainer'>
                    {productos.map((prod)=>
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
