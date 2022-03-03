import React,{useEffect,useState} from "react";
import "../NavBar/NavBar.css"
import ItemDetails from "../ItemDetails/ItemDetails";
export default function ItemDetailsContainer(){
    

    const [info, setInfo] = useState(true)
    const mensaje = "Cargando..."

    useEffect(()=>{
        const prodPromise = new Promise((resolve,reject)=>{
            setTimeout(() => {
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
                    <p className="ItemTitle-center">{mensaje}</p>
                </>
                ) : (
                    <ItemDetails />
                )}
            </>
        )
}