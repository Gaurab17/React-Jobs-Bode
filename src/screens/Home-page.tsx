import React from 'react'
// import Container from '../Components/molecules/Container'
import container from '../assets/svgs/container.svg'
import Navbar from '../Components/molecules/Navbar'

const HomePage = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <img className='h-[665px] w-full' src={container} alt='' />
    </div>
  )
}

export default HomePage
