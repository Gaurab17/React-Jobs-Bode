import New from '../assets/New.png'
import Logo from '../assets/Logo.png'

const Landingpage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='h-56 w-60 p-5 bg-white rounded-3xl'>
        <img className='h-full w-full object-cover' src={Logo} alt='' />
      </div>
      <img className='p-5' src={New} alt='' />
    </div>
  )
}

export default Landingpage
