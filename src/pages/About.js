import React, { useState } from 'react'
// import AboutButton from '../Components/AboutButton'
import './PagesStyle.css'

const About = () => {
  // const[aboutTxt , setAboutTxt] = useState([])
  // const clickMenu =() =>{
    //  setAboutTxt = 

  // const Soft =()=>{

  // }
  // const Education = ()=>{

  // }
  return (
    <>
    <div className='about'>
      <div className='right'>
        <img src='/img/about-shape-1.png' alt='img' />
        <img src='/img/about-left.png' alt='img' />
      </div>
      <div className='left'>
        <h5 className=' about-title'>About Jhon Herdbar</h5>
        <h1 className='exp-title'>5 Year's Experience on <span>Ui/UX & Web Development</span>.</h1>
        <p className='about-para'>Seasoned creative with a lot of experience in
          web design, branding, graphic and motion design</p>
        <div className='about-main'>
          <div className='about-button'>
            {/* <AboutButton label="Main Skills" click={clickMenu}/> */}
            {/* <AboutButton label="Awards" click={Soft}/> */}
            {/* <AboutButton label="Education" click={Education}/> */}
          </div>
          <ul className='about-ul'>
      
          </ul>
        </div>
      </div>
    </div>
    <img  style={{height:"300px"}}src='/img/pricing-left-shape.png' alt='img'/>
    <div className='about-mid'>
    <h4 className='about-4'>
      What I Do ?
    </h4>
    <h1 className='about-h1'></h1>
    </div>
    </>
  )
}

export default About
