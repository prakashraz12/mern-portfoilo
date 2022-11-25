import React from 'react'
import './PagesStyle.css'

const Home = () => {
  return (
    <>
    <div className='home'>
    <img className='top-img' src='img/pricing-right-shape.png' alt='img'/>
      <div className='left'>
        <h5 className='hero-1'>Welcome to My World</h5>
        <h1 className='hero-name'>Hi I'am <span>Jhon.</span></h1>
        <h4 className='hero-title'>Full Stack  <span>& 
        UI/UX Developer.</span></h4>
        <button className="hero-btn">Hire Me</button>
      </div>
      <div className='right'>
      <img className='png-logo-2' src='/img/hero-ps-logo.png' alt='img'/>
      <img  src='/img/hero-ai-logo.png' alt="img"/>
        <img className='hero-img' src='img/hero-right.png' alt='hero-png' />
       <div className='png-logo'>
       <img src='/img/hero-figma-logo.png' alt="img"/>
       </div>
      </div>
    </div>
    </>
  )
}

export default Home
