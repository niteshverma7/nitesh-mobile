import React from 'react'  
import './App.css'


export default function Card({name, price, imgsrc,bgcolor, className}) {
  return (

   <>
    <div  className={`card ${className || ''}`} style={{backgroundColor: bgcolor}}>
       <img src={imgsrc}  />
        <p>{name}</p>
        <h4>{price}</h4>
       
    </div>
    </>
  )
}

