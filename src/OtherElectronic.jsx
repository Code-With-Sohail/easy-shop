import React from 'react'
import { product } from './Product.js'
import "./OtherElectronic.css"
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const OtherElectronic = () => {

    const agalTab = (id)=>{
        window.open(`/ElectronicDetailCard/${id}` , "_self")
    }
    return (
        <>
            <Navbar />
            <div className="otherContainer">
                {product.slice(8, 14).map((cards) => {
                    return <div key={cards.id} className="electricCard">
                        <img src={cards.image} alt="img" />
                        <p>{cards.title}</p>
                        <h3>{cards.price}</h3>
                        <h4>Rating:{cards.rating}</h4>
                        <div className="otherBtn">
                            <button onClick={()=>{agalTab(cards.id)}}>Add To Cart</button>
                        </div>
                    </div>
                })}
            </div>
            <Footer/>
        </>
    )
}

export default OtherElectronic
