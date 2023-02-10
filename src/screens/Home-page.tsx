import containerImg from '../assets/svgs/container.svg'
import Navbar from '../Components/molecules/Navbar'
import { Container } from '../Components/atoms'
import gif1 from '../assets/svgs/gif1.svg'
import gif2 from '../assets/svgs/gif2.svg'

const HomePage = () => {
  return (
    <div className='h-full w-full relative '>
      <img className='h-[900px] w-full object-cover absolute' src={containerImg} alt='' />
      <Navbar />
      <h1 className='text-[56px] text-[#4E4E4E] text-center mt-[79px] pb-[76px]'>
        What Are You Looking For?
      </h1>
      <div className='flex flex-row items-center justify-center'>
        <Container text='Looking For Job Change?' image={gif1} btnColor='primary' />
        <Container text='Looking For Service Solution?' image={gif2} btnColor='secondary' />
      </div>
    </div>
  )
}

export default HomePage
