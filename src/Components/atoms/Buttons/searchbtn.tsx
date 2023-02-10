import React from 'react'
import { SearchButtonProps } from './types'
const SearchBtn = ({ type, icon, placeholder, className }: SearchButtonProps) => {
  return (
    <div className='flex justify-end items-center relative'>
      <input placeholder={placeholder} typeof={type} className={className} />
      <img src={icon} alt='' className={'absolute h-[50px] w-[50px] pr-[12px]'} />
    </div>
  )
}

export default SearchBtn
