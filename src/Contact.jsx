import React from 'react'
import "./Contact.css"
import Footer from './Footer'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    e.target.reset()
  }

  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <div className="contact-heading">
            <h1>Contact Us</h1>
            <p>We would love to hear from you. Get in touch with us!</p>
          </div>

          <div className="contact-content">

            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Have any questions about our products?
                Feel free to contact us. We are always here to help you.
              </p>

              <div className="info-box">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h3>Our Location</h3>
                  <span>Karachi, Pakistan</span>
                </div>
              </div>

              <div className="info-box">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h3>Email Address</h3>
                  <span>easyshop@gmail.com</span>
                </div>
              </div>

              <div className="info-box">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <h3>Phone Number</h3>
                  <span>+92 300 1234567</span>
                </div>
              </div>

              <div className="social-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send Us a Message</h2>

              <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Your Name" required />

                <input type="email" placeholder="Your Email" required />

                <input type="text" placeholder="Subject" required />

                <textarea placeholder="Write Your Message..." rows="5" required></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
