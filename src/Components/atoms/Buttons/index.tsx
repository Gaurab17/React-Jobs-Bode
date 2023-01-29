import React from 'react'
import { ButtonDataProps } from './types'

const Button = ({ type, text, className }: ButtonDataProps) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  )
}

export default Button
