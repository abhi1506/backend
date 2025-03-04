import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css';

export  function Button({name, redirect, buttonClass, icon }) {
  return (
    <>
      <Link  to={`${redirect}`}  className={`about-get-value ${buttonClass}`} data-aos="fade-up">
                 {name} <span className='button-icon'>{icon}</span>
              </Link>
    </>
  )
}
