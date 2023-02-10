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
const Container = ({ text, image, btnColor }: ContainerProps) => {
  return (
    <div className='h-[830px] w-[800px] bg-[#efeded] flex flex-col items-center justify-center m-12 rounded-[50px]'>
      <img className=' h-[200px] w-[429px] mx-[175px] mb-[80px]' src={image} alt='' />
      <h1 className='text-[#697A8C] pb-4 text-[46px]'>{(text = text)}</h1>
      <p className='pt-[30px] pb-4 text-center text-[24px] px-[93px]'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consectetur?
      </p>

      <SearchBtn
        className='mt-[46px] mb-[54px] h-[80px] w-[441px] text-[20px] pl-[20px] bg-[#E6EBF3] rounded-[15px]'
        placeholder='Search Service Here...'
        icon={search}
      />

      <Button
        text='Explore More'
        btnType={btnColor}
        className={
          'rounded-[56px] h-[75px] w-[287px] text-[27px] text-[#FFFFFF] flex justify-center items-center'
        }
        clickFunction={clickFunc}
        icon={icon}
      />
    </div>
  )
}

export default Container
