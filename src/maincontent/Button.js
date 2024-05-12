import React from 'react'
import './header.css';
import './../assets/icons/phone.svg'

const Button = (props) => {
  return (
    <button className='header-button'>
        <img src={props.src} alt={props.alt}/>
    </button>
  )
}

export default Button
