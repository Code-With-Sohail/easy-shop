import React from 'react'
import about_us from "./assets/about_us.png"
import left_image from "./assets/left_image.jpg"
import "./About.css"

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-content">
                    <img className='image' src={about_us} alt="" />
                    <div className="other-container">
                        <div className="left-box">
                            <img src={left_image} alt="" />
                        </div>
                        <div className="right-box">
                            <p className='parag'>Our Story</p>
                            <h1 className='heading'>Welcome To <span>Easy Shop</span></h1>
                            <p className="line">Your One-Stop Online Shopping Destination </p>
                            <p className="long-para">
                                "At <span>EasyShop</span>, we believe shopping should be easy, enjoyable and affordable. Our goal is to bring you the latest products, best quality and unbeatable prices — all in one place.
                                Whether you're looking for fashion, electronics, home essentials or more, we've got you covered. Shop with confidence and experience a smarter way to shop!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="capsule">
                <div className="square">
                    <div className="ic">
                        <i class="fa-solid fa-truck icoon"></i>
                    </div>
                    <div className="p-h">
                        <h2>Free Shiping</h2>
                        <p className="truck">On Order Over $50</p>
                    </div>
                </div>
                <div className="square">
                    <div className="ic">
                        <i class="fa-solid fa-shield icoon"></i>
                    </div>
                    <div className="p-h">
                        <h2>Secure Payment</h2>
                        <p className="truck">100% secure checkout</p>
                    </div>
                </div>
                <div className="square">
                    <div className="ic">
                        <i class="fa-solid fa-headphones icoon"></i>
                    </div>
                    <div className="p-h">
                        <h2>24/7 Support</h2>
                        <p className="truck">Always here to help</p>
                    </div>
                </div>
                <div className="square">
                    <div className="ic">
                        <i class="fa-solid fa-arrows-rotate icoon"></i>
                    </div>
                    <div className="p-h">
                        <h2>Easy Returns</h2>
                        <p className="truck">House free returns</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
