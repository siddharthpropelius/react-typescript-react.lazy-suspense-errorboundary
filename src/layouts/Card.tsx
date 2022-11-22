import React from 'react'

type cardPropsModel= {
    title:string
}

const Card:React.FC<cardPropsModel> =(props)=>{
    return(
        <>
            <div style={{background:'red'}}>
                {props.title}
            </div></>
    )
}

export default  Card
