import React from 'react'
import { product } from './Product.js'
import "./Electronic.css"
import WomenClothes from './WomenClothes.jsx'

const Electronic = () => {
    const item = product.find((items)=>items.id === 9)

    const handleCard = ()=>{
       window.open("/Electronic_items" , "_self")
    }
  return (
    <>
    <div className="electric-h1">
        <h1>Electronic</h1>
    </div>
    <div className="electricContainer">
        <div onClick={()=>{handleCard()}} className="elecCard">
            <img src={item.image} alt="img" />
            <h3>{item.title}</h3>
            <h4> $ {item.price}</h4>
            <h5>rating:{item.rating}</h5>
        </div>
    </div>
    <WomenClothes/>
    </>
  )
}

export default Electronic
