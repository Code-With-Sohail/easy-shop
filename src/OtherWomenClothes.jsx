import React from 'react'
import { product } from './Product.js'
import "./OtherWomenClothes.css"
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'


const OtherWomenClothes = () => {

  const nextTab = (id) => {
    window.open(`/OtherWomenClothes/${id}`, "_self")
  }
  return (
    <>
      <Navbar />
      <div className="otherWomenContainer">
        {product.slice(14, 20).map((clothes) => {
          return <div key={clothes.id} className="otherWomenCards">
            <img src={clothes.image} alt="img" />
            <p>{clothes.title}</p>
            <h3>$ {clothes.price}</h3>
            <h4>Rating:{clothes.rating}</h4>
            <div className="otherBtn">
              <button onClick={() => { nextTab(clothes.id) }}>Add To Cart</button>
            </div>
          </div>
        })}
      </div>
      <Footer/>
    </>
  )
}

export default OtherWomenClothes
