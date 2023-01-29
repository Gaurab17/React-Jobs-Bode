import Logo from '../assets/svgs/logo.svg'
import { Button } from '../Components/atoms'

const LandingPage = () => {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <img className='p-20' src={Logo} alt='' />
      </div>
      <Button text='Click Here' type='submit' />
    </>
  )
}

export default LandingPage
