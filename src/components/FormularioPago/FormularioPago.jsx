import React,{useState} from "react";
import { useForm } from "react-hook-form";
import "./FormularioPago.css"

export default function FormularioPago({onSubmit}){

    const {register, formState:{errors},handleSubmit}=useForm()
    const [respuesta,setRespuesta]=useState(false)
    const [respuesta2,setRespuesta2]=useState(true)
    
    const obtenerDatos= async(dat,e)=>{
        const url=(`http://apilayer.net/api/validate?access_key=b0700b976ac4193bf0ab9a5c488cb6d8&number=${dat.CELULAR}&country_code=AR&format=1`)
        const data = await fetch(url)
        const data2 = await data.json()
        if(data2.valid){
            setRespuesta(onSubmit(dat,e))
        }else{
            setRespuesta2(false)
        }
    }

    const onSubmit2=(data,e)=>{
        obtenerDatos(data,e)
    }


    return(
        <>
            <form onSubmit={handleSubmit(onSubmit2)}>

                <label htmlFor="NOMBRE" >NOMBRE:</label>
                <input 
                    disabled={respuesta}
                    type="text"
                    name="NOMBRE"
                    id="NOMBRE"
                    placeholder="NOMBRE/APELLIDO"
                    value={"timoteo"}
                    {...register("NOMBRE",{required:true})}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.NOMBRE?.type==="required"&&"Campo obligatorio"}
                </span>

                <label htmlFor="CELULAR">CELULAR:</label>
                <input
                    disabled={respuesta}
                    type="number"
                    name="CELULAR"
                    id="CELULAR"
                    placeholder="Ej: 3489101010"
                    value={"3487542190"}
                    {...register("CELULAR",{required:true,minLength:10,maxLength:10})}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.CELULAR?.type==="required"&&"Campo obligatorio"}
                    {errors.CELULAR?.type==="minLength"&&"Cod. area sin 0 y sin 15"}
                    {errors.CELULAR?.type==="maxLength"&&"Cod. area sin 0 - Num sin 15"}
                </span>

                <label htmlFor="MAIL" style={{paddingRight:"50px"}}>MAIL:</label>
                <input
                    disabled={respuesta}
                    type="email"
                    name="MAIL"
                    id="MAIL"
                    placeholder="Email"
                    value={"timi.gambella@hotmail.com"}
                    {...register("MAIL",{required:true,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.MAIL?.type==="required"&&"Campo obligatorio"}
                    {errors.MAIL?.type==="pattern"&&"Mail no valido"}
                </span>
                <button className="boton-validar">VALIDAR</button>
                <span>
                    {respuesta?(<>
                        <p className="validacion-mensaje">Validacion Correcta</p>
                    </>): respuesta2?<></>:<p className="validacion-mensaje">Validacion Incorrecta</p>
                    }
                </span>
            </form>
        </>
    )
}