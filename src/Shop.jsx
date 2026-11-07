import React from 'react'
import { product } from './Product.js'
import "./Shop.css"
import Electronic from './Electronic.jsx'

const Shop = () => {

    const nayaTab = (id)=>{
        window.open(`/Shopdetailcard/${id}` , "_self")
    }
    return (
        <>
        <section id="shop">
            <div className="shoph1"><h1>Shop</h1></div>
            <div className="jeweleryh1"><h1>Jewelery</h1></div>
            <div className="shopContainer">
                {product.slice(5, 8).map((item) => {
                    return <div key={item.id} className="shopCards">
                        <img src={item.image} alt="shop" />
                        <h1>{item.title}</h1>
                        <h3> $ {item.price}</h3>
                        <h4>Rating:{item.rating}</h4>
                        <div className="shopcartBtn">
                        <button onClick={()=>{nayaTab(item.id)}}>Add to Cart</button>
                        </div>
                    </div>
                })}
            </div>
        </section>

        <Electronic/>
        </>
    )
}

export default Shop
