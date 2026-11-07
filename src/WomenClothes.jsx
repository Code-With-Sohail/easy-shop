import React from 'react'
import { product } from './Product.js'
import "./WomenClothes.css"
import Contact from './Contact.jsx'

const WomenClothes = () => {
    const Women = product.find((item) => item.id === 15)

    const nextTab = ()=>{
        window.open("/Women_clothes" , "_self")
    }

    return (
        <>
            <div className="women-h1">
                <h1>Women Clothes</h1>
            </div>
            <div className="womenContainer">    
                <div onClick={()=>{nextTab()}} className="womenCard">
                    <img src={Women.image} alt="img" />
                    <h3>{Women.title}</h3>
                    <h4>$ {Women.price}</h4>
                    <h5>Rating:{Women.rating}</h5>
                </div>
            </div>
            <Contact/>
        </>
    )
}

export default WomenClothes
