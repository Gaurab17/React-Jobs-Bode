import React from 'react'
import { ButtonDataProps } from './types'

const Button = ({ type, text, icon, className, clickFunction }: ButtonDataProps) => {
  return (
    <button type={type} className={className} onClick={clickFunction}>
      <svg className='fill-current w-4 h-4 mr-2'>
        <path d={icon} />
      </svg>
      <span>{text}</span>
    </button>
  )
}

export default Button
