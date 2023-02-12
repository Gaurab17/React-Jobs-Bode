// import React from 'react'
import gif1 from '../../assets/svgs/mainlogo.svg'
import { Button } from '../atoms'

const buttonClick = () => {
  console.log('Hello World')
}

const Navbar = () => {
  return (
    <div className='pt-[107px] h-[40px] w-full flex flex-row items-center justify-between'>
      <img className='pl-[156px]' src={gif1} alt='Some Pics' />
      <div className='flex flex-row items-center justify-center'>
        <ul className=' flex flex-row text-xl pr-[31px]'>
          <li className='px-4'>About</li>
          <li className='px-4'>Contact Us</li>
          <li className='px-4'>Privacy Policy</li>
        </ul>

        <Button
          clickFunction={buttonClick}
          type='submit'
          text='Login'
          btnType='secondary'
          className=' text-[#ffffff] text-[22px] h-[48px] w-[111px] mx-[19px] rounded-[10px]'
        />
        <Button
          clickFunction={buttonClick}
          type='submit'
          text='Sign Up'
          btnType='primary'
          className=' text-[#ffffff] text-[22px] h-[48px] w-[111px] mr-[128px] rounded-[10px]'
        />
      </div>
    </div>
  )
}

export default Navbar
