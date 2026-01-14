import React, { useState, useRef } from 'react'
import './Navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home")
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }
  
  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className='navbar'>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />

      <div className="logo-text">Riya Bansal</div>

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

        <li>
          <a href="#home" className="anchor-link" onClick={() => setMenu("home")}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="anchor-link" onClick={() => setMenu("about")}>
            About Me
          </a>
        </li>

        <li>
          <a href="#experiences" className="anchor-link" onClick={() => setMenu("experiences")}>
            Experiences
          </a>
        </li>

        <li>
          <a href="#achievements" className="anchor-link" onClick={() => setMenu("achievements")}>
            Achievements
          </a>
        </li>

        <li>
          <a href="#work" className="anchor-link" onClick={() => setMenu("work")}>
            Portfolio
          </a>
        </li>

        <li>
          <a href="#contact" className="anchor-link" onClick={() => setMenu("contact")}>
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-connect">
        <a href="#contact" className="anchor-link" onClick={() => setMenu("contact")}>
          Contact With Me
        </a>
      </div>

    </div>
  )
}

export default Navbar
