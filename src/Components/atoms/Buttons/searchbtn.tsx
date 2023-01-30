import React from 'react'
import { SearchButtonProps } from './types'
const SearchBtn = ({ type, icon, placeholder, className }: SearchButtonProps) => {
  return (
    <div className=''>
      <input placeholder={placeholder} typeof={type} className={className} />
      icon:{icon}
    </div>
  )
}

export default SearchBtn
