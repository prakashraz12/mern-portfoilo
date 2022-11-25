import React from 'react'

const AboutButton = (props) => {
  return (
      <button className='btn-ab' onClick={props.click}>{props.label}</button>
  )
}

export default AboutButton
