import React from "react";

interface buttonModel{
    title:string
}
const Button:React.FC<buttonModel> =(props)=>{
    return(
        <>
        <button className={'bg-yellow-600 text-white mx-2 px-2 py-1 rounded-lg mt-2'}>{props.title}</button>
        </>
    )
}

export default Button
