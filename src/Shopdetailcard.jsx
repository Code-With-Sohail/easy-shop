import React, { useEffect } from 'react'
import { product } from './Product.js'
import "./Shopdetailcard.css"
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const Shopdetailcard = () => {
  const [open, setopen] = useState(false)

  const handleOpen = () => {
    return (
      <>
        <div className="overlay">
          <div className="doneContainer">
            <i class="fa-regular fa-circle-check done" ></i>
            <h1>Payment Done</h1>
          </div>
        </div>
      </>
    )
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  setTimeout(() => {
    if (open) {
      setopen(false)
    }
  }, 2000);

  const { id } = useParams()
  const shop = product.find((item) => item.id === Number(id))
  const navigate = useNavigate()

  const handlleClose = () => {
    navigate(-1)
  }

  const [quantity, setquantity] = useState(1)

  const handlePrice = (item) => {
    return Math.floor(quantity * item.price)
  }

  const handleIcon = () => {
    if (quantity !== "") {
      setopen(true)
    }
  }

  return (
    <>
      <Navbar />
      <div className="shopDetail">
        {open && handleOpen()}
        <table>
          <tr className='headings'>
            <th><h3>Product</h3></th>
            <th>Name</th>
            <th>Price</th>
            <th><h3>Quantity</h3></th>
            <th><h2>Check-Out</h2></th>
            <th><i onClick={() => { handlleClose() }} class="fa-solid fa-xmark"></i></th>
          </tr>

          <tr className='items'>
            <th><img src={shop.image} alt="img" /></th>
            <th>{shop.title}</th>
            <th>{handlePrice(shop)}</th>
            <th> <input type="number" value={quantity} onChange={(e) => { Number(setquantity(e.target.value)) }} min={1} /></th>
            <th><i onClick={() => { handleIcon() }} className="fa-solid fa-cart-shopping"></i></th>
          </tr>
        </table>
      </div>
      <Footer/>
    </>
  )
}

export default Shopdetailcard
