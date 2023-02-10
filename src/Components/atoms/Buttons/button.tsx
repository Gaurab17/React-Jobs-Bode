import React from 'react'
import { ButtonDataProps } from './types'

const Button = ({ type, text, icon, className, clickFunction }: ButtonDataProps) => {
  return (
    <button type={type} className={className} onClick={clickFunction}>
      <span>{text}</span>
      <img src={icon} alt='' className='pl-[23px]' />
    </button>
  )
}

export default Button
