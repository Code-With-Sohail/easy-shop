import React from 'react'
import { product } from './Product'
import "./Detailcard.css"
import Navbar from './Navbar'
import { useParams , useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from './Footer'

const Detailcard = () => {
    const [isOpendone, setisOpendone] = useState(false)
    const [quantity, setquantity] = useState(1)
    const handleIncrease = () => {
        setquantity(quantity + 1)
    }

    const handleDecrease = () => {
        setquantity(quantity - 1)
        if (quantity === 1) {
            setquantity(1)
        }
    }

    const handleDoneCard = () => {
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
        if (isOpendone) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpendone])

    setTimeout(() => {
        if (isOpendone) {
            setisOpendone(false)
        }
    }, 2000);


    const handlePrice = (item) => {
        return Math.floor(quantity * item.price)
    }

    const { id } = useParams()
    const item = product.find((p) => p.id === Number(id))
    const  Navigate = useNavigate()

    const handleClose = ()=>{
        Navigate(-1)
        // window.close()
    }

    return (
        <>
            {isOpendone && handleDoneCard()}
            <Navbar />
            <div className="detailCard">
                <div className="left">
                    <img src={item.image} alt="image" />
                </div>
                <div className="right">
                    <p className='brand'>Brand Name</p>
                    <div className="close">
                    <h1>{item.title}</h1>
                    <i onClick= {()=>{handleClose()}} className="fa-regular fa-circle-xmark" id='closeBtn' ></i>
                    </div>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    <p className="description">
                        {item.discription}
                    </p>
                    <div className="icon-no">
                        <i onClick={() => { handleDecrease() }} class="fa-solid fa-minus sub"></i>
                        <span className='qty'>{quantity}</span>
                        <i onClick={() => { handleIncrease() }} class="fa-solid fa-plus add"></i>
                        <span className='dollar'>$</span><small className="price">{handlePrice(item)}</small>
                    </div>
                    <div className="checkBtn">
                        <button onClick={() => { setisOpendone(true) }}> Check Out <span><i class="fa-solid fa-arrow-right"></i></span></button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Detailcard

