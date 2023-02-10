import React from 'react'
import { ButtonDataProps } from './types'

const Button = ({ type, text, icon, className, clickFunction, btnType }: ButtonDataProps) => {
  return (
    <button
      type={type}
      className={`${btnType === 'primary' ? 'bg-[#6E877A]' : 'bg-[#345267]'} ${className}`}
      onClick={clickFunction}
    >
      <span>{text}</span>
      <img src={icon} alt='' className='pl-[23px]' />
    </button>
  )
}

export default Button
