import React from 'react'

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2 className="footer-logo">Easy<span>Shop</span></h2>
          <p>
            Your one-stop destination for quality products.
            Shop smarter, shop easier with Easy-Shop.
          </p>

          <div className="footer-social">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#shipping">Shipping Policy</a></li>
            <li><a href="#returns">Return Policy</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact Information</h3>
          <p><i className="fa-solid fa-location-dot"></i> Karachi, Pakistan</p>
          <p><i className="fa-solid fa-envelope"></i> easyshop@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i> +92 300 1234567</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Easy-Shop. All Rights Reserved.</p>
        <p>Designed with <i className="fa-solid fa-heart"></i> for Easy-Shop</p>
      </div>

    </footer>
  )
}

export default Footer