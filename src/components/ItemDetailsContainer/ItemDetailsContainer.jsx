import React,{useEffect,useState} from "react";
import "../NavBar/NavBar.css"
import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails";
import logo from "../NavBar/rose.png"

export default function ItemDetailsContainer(){
    
    const {id}=useParams()

    const [detalle, setDetalle] = useState("")

    const [info, setInfo] = useState(true)
    const mensaje = "Cargando..."

    useEffect(()=>{
        const prodPromise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                setDetalle(id)
                setInfo(false)
                resolve(true)
            }, 1000);
        })
        prodPromise.then(()=>{console.log("COMPLETADO")})
        prodPromise.catch(()=>{console.log("ERROR 404")})
    },[])

        return(
            <>{info ? (
                <>
                    <div className="cabecero" id="cabecero">
                        <a href="/"><h1 className="tituloI">ROSÉ</h1></a>
                        <div>
                            <a href="/"><img src={logo} alt="LOGO"/></a>
                            <br/>
                            <a href="/">By Carolina</a>
                        </div>
                        <a href="/"><h1 className="tituloD">AROMAS</h1></a>
                    </div>
                    <p className="ItemTitle-center">{mensaje}</p>
                </>
                ) : (
                    <ItemDetails id={detalle}/>
                )}
            </>
        )
}