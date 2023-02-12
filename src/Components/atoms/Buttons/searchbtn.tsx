import React from 'react'
import { SearchButtonProps } from './types'
const SearchBtn = ({ type, icon, placeholder, searchBtnType }: SearchButtonProps) => {
  return (
    <div
      className={`flex justify-end items-center relative mt-[46px] mb-[54px] h-[80px] w-[441px] text-[20px] px-[20px] rounded-[15px] 
      ${searchBtnType === 'primary' ? 'bg-[#e5f3ed]' : 'bg-[#e6ebf3]'}`}
    >
      <input
        placeholder={placeholder}
        typeof={type}
        className={'w-[calc(100%_-_50px)] bg-transparent italic text-xl outline-none'}
      />
      <img src={icon} alt='' className={'h-[50px] w-[50px]'} />
    </div>
  )
}

export default SearchBtn
