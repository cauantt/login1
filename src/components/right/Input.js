import React from 'react'
import './Input.css'

function Input({label,type,placeholder}) {
  return (
    <div className='input'>
      <label>{label}</label>
      <input placeholder={placeholder} type={type}></input>
      
    </div>
  )
}

export default Input
