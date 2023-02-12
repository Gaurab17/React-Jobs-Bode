import React from 'react'
import { ButtonDataProps } from './types'

const Button = ({ type, text, icon, className, clickFunction, btnType }: ButtonDataProps) => {
  return (
    <button
      type={type}
      className={`rounded-[56px] h-[75px] w-[287px] text-[27px] text-[#FFFFFF] flex justify-center items-center ${
        btnType === 'primary' ? 'bg-[#6E877A]' : 'bg-[#345267]'
      } ${className}
      hover:bg-slate-700
      `}
      onClick={clickFunction}
    >
      <span>{text}</span>
      <img src={icon} alt='' className='pl-[23px]' />
    </button>
  )
}

export default Button
