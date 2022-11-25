import React from 'react'
import { NavLink } from 'react-router-dom'
import './GlobalComponentStyle.css'

const Header = () => {
      return (
            <div className='navbar'>
                  <div className='logo'>
                        <img src='/img/logo.png' alt='logo-pic'/>
                  </div>
                  <ul className='nav-link'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/feature">Feature</NavLink></li>
                        <li><NavLink to="/resume">Resume</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
                  <button className='chat'><NavLink to="/contact">Let's Chat</NavLink></button>
            </div>
      )
}

export default Header
