// import React from 'react'
import MainLogo from '../../assets/svgs/mainlogo.svg'
import { Button } from '../atoms'

const Navbar = () => {
  return (
    <div className=' mt-4 h-[40px] w-full flex flex-row items-center justify-end'>
      <img className=' h-5' src={MainLogo} alt='' />
      <ul className=' flex flex-row text-xl p-16'>
        <li className='px-4'>About</li>
        <li className='px-4'>Contact Us</li>
        <li className='px-4'>Privacy Policy</li>
      </ul>

      <button className='text-xl pr-5'>
        <Button type='submit' text='Login' className='mx-4 bg-white w-[93px] h-full' />
        <Button type='submit' text='Sign Up' className='mx-2 bg-white w-[93px] h-full' />
      </button>
    </div>
  )
}

export default Navbar
