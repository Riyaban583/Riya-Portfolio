import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    formData.append("access_key", "4b7d3a8c-1b8b-4b09-86c7-375eecef5431")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json())

      if (res.success) {
        toast.success("Message sent successfully ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark"
        })

        form.reset() // ✅ clear form
      } else {
        toast.error("Something went wrong ❌", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark"
        })
      }

    } catch (error) {
      toast.error("Network error ❌", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark"
      })
    }
  }

  return (
    <div id='contact' className='contact'>

      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am currently available for full-stack development opportunities,
            internships, and collaborative projects. Feel free to reach out if
            you’d like to connect or discuss potential work.
          </p>

          <div className="contact-details">

            <a href="mailto:riyabnsl2004@gmail.com" className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>riyabnsl2004@gmail.com</p>
            </a>

            <a href="tel:+919587359405" className="contact-detail">
              <img src={call_icon} alt="phone" />
              <p>+91 9587359405</p>
            </a>

            <a
              href="https://www.google.com/maps?q=Bharatpur,Rajasthan,India"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <img src={location_icon} alt="location" />
              <p>India</p>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={onSubmit} className="contact-right">

          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>

      </div>

      {/* TOAST */}
      <ToastContainer />
    </div>
  )
}

export default Contact
