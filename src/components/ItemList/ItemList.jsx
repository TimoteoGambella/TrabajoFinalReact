import React,{useContext,useEffect,useState} from "react"
import Items from "../Items/Items"
import { CartContext } from '../../Context/CartContext';
import { useParams } from "react-router-dom";


export default function ItemList(){

    const {categoria}=useParams()
    const {productos}=useContext(CartContext)

    const [filtros,setFiltros]=useState(productos)

    useEffect(()=>{
        setFiltros(productos)
    },[productos])

    useEffect(()=>{
        if(categoria==="Todo"){
            setFiltros(productos)
        }else{
            setFiltros(productos.filter(prod=>prod.Categoria === categoria))
        }
    },[categoria])

    return(
            <div className='itemContainer'>
                {filtros.map((prod)=>{
                    return(
                        <Items listaProductos={
                            {
                                nombre:prod.Nombre,
                                img:prod.Img,
                                precio:prod.Precio,
                                stock:prod.Stock,
                                descripcion:prod.Descripcion,
                                descripcionExtra:prod.DescripcionExtra,
                                id:prod.id
                            }
                        } key={prod.id}/>
                    )
                }   
                )}
            </div>
    )
}