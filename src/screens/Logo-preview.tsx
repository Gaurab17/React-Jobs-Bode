import Logo from '../assets/svgs/logo.svg'

const LandingPage = () => {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <img className='p-20' src={Logo} alt='' />
      </div>
    </>
  )
}

export default LandingPage
