import React from 'react'
import image_1 from "./assets/image_1.jpg"
import image_2 from "./assets/image_2.jpg"
import image_3 from "./assets/image_3.jpg"
import image_4 from "./assets/image_4.jpg"
import { useState, useEffect } from "react"
import Navbar from "./Navbar.jsx"
import { product } from "./Product.js"
import About from './About.jsx'
import Shop from './Shop.jsx'

const Home = () => {
    const [current, setcurrent] = useState(0)
    const handleNext = () => {
        if (current === images.length - 1) {
            setcurrent(0)
        } else {
            setcurrent(current + 1)
        }
    }

    const handlePrevious = () => {
        if (current === 0) {
            setcurrent(images.length - 1)
        } else {
            setcurrent(current - 1)
        }
    }

    const images = [
        image_1, image_2, image_3, image_4
    ]

    useEffect(() => {
        let forCards = async () => {
            let url = "https://fakestoreapi.com/products"
            let promise = await fetch(url)
            let data = await promise.json()
            console.log(data)
        }

        forCards()
    }, [])
    const nextTab = (id) => {
        window.open(`/detailcard/${id}`, "_self")
    }

    return (
        <>
            <Navbar />
            <section id="home">
                <div className="container"
                    style={{ backgroundImage: `url(${images[current]})` }}>
                    <div className="box">
                        <p className="sliderPara">**Shop Smart, Live Better with Easy Shop!**
                            Discover the latest trends and explore a wide range of quality products at amazing prices. From everyday essentials to your favorite styles, Easy Shop makes online shopping simple, convenient, and enjoyable!</p>
                        <button className="shopBtn">Shop Now</button>
                    </div>
                    <div className="left-right-icons">
                        <i onClick={() => { handlePrevious() }} class="fa-solid fa-less-than arrow"></i>
                        <i onClick={() => { handleNext() }} class="fa-solid fa-greater-than arrow"></i>
                    </div>
                </div>
            </section>

            <About />

            <section id="sale">
                <div className="h1"><h1>Sale</h1></div>
                <div className="sale-container">
                    {product.slice(0, 5).map((item) => {
                        return <div key={item.id} className="cards">
                            <img src={item.image} alt="image" />
                            <h3>{item.title}</h3>
                            <h2> $ {item.price}</h2>
                            <p> Rating : {item.rating}</p>
                            <div className="btn">
                                <button onClick={() => { nextTab(item.id) }} className="cartBtn">Add To Cart</button>
                            </div>
                        </div>
                    })}
                </div>
            </section>

            <Shop />

        </>
    )
}

export default Home