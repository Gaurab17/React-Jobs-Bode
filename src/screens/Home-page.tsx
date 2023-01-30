import React from 'react'
// import Container from '../Components/molecules/Container'
import container from '../assets/svgs/container.svg'
import Container from '../Components/molecules/Container'
import Navbar from '../Components/molecules/Navbar'

const HomePage = () => {
  return (
    <div className='h-[565px] w-full relative '>
      <img className=' w-full h-full object-cover absolute' src={container} alt='' />
      <Navbar />
      <h1 className='text-[40px] text-[#4E4E4E] text-center pt-8'>What Are You Looking For?</h1>
      <div className='flex flex-row items-center justify-center'>
        <Container />
        <Container />
      </div>
    </div>
  )
}

export default HomePage
