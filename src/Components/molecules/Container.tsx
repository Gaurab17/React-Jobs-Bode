// import React, { useState } from 'react'
import gif1 from '../../assets/svgs/gif1.svg'
import { Button } from '../atoms'
import SearchBtn from '../atoms/Buttons/searchbtn'
import icon from '../../assets/svgs/icon.svg'
// import search from '../../assets/svgs/search.svg'

// const [search, newSearch] = useState('')

// const searchFunc = ({ e }: { e: any }) => {
//   newSearch(e.target.value)
// }

const clickFunc = () => {
  console.log('Button CLicked')
}
const Container = () => {
  return (
    <div className='h-[430px] w-[500px] bg-[#e6e6e6] flex flex-col items-center justify-center m-12 rounded-[50px]'>
      <img className='w-[320px] h-[200px] px-8 pb-8 pt-[66px]' src={gif1} alt='' />
      <h1 className='text-[#4E4E4E] pb-4 text-xl'>Looking For Job Change?</h1>
      <p className='pb-4 text-center px-8'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consectetur?
      </p>
      {/* <SearchBtn type='submit' placeholder='Search Here' onChange={searchFunc} /> <br /> */}
      <Button
        text='Explore More'
        icon={icon}
        className={'bg-[#6E877A] rounded-2xl h-[40px] w-[150px] flex justify-center items-center'}
        clickFunction={clickFunc}
      />
    </div>
  )
}

export default Container
