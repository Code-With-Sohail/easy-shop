import React, { useState } from 'react'
import logo from "./assets/logo.png"
import "./index.css"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <div className="navbar">

                <div className="logo">
                    <img src={logo} alt="easy-shop" />
                </div>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    <li><a href="#sale" onClick={() => setMenuOpen(false)}>Sale</a></li>
                </ul>

                <div className="icons">
                    <a href="#shop">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                </div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </button>

            </div>
        </>
    )
}

export default Navbar