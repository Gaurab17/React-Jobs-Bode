// import React, { useState } from 'react'
import { Button } from '../atoms'
import SearchBtn from '../atoms/Buttons/searchbtn'
import icon from '../../assets/svgs/icon.svg'
import search from '../../assets/svgs/search.svg'
import { ContainerProps } from '../atoms/Buttons/types'

// const [search, newSearch] = useState('')

// const searchFunc = ({ e }: { e: any }) => {
//   newSearch(e.target.value)
// }

const clickFunc = () => {
  console.log('Button CLicked')
}
const Container = ({ text, image, subText, btnColor, searchBtnType }: ContainerProps) => {
  return (
    <div className='h-[830px] w-[800px] bg-[#fff] flex flex-col items-center justify-center m-12 rounded-[50px] drop-shadow-3xl'>
      <img className=' h-[200px] w-[429px] mx-[175px] mb-[80px]' src={image} alt='' />
      <h1 className='text-[#697A8C] pb-4 text-[46px]'>{text}</h1>
      <p className='pt-[30px] pb-4 text-center text-[24px] px-[93px]'>{subText}</p>

      <SearchBtn
        className=''
        placeholder='Search Service Here...'
        icon={search}
        searchBtnType={searchBtnType}
      />
      <Button text='Explore More' btnType={btnColor} clickFunction={clickFunc} icon={icon} />
    </div>
  )
}

export default Container
