import React from 'react'
// import { SearchBtn } from '../Components/atoms'
import icon from '../assets/svgs/icon.svg'
import gif from '../assets/svgs/signupgif.svg'
import back from '../assets/svgs/back.svg'
// import login from '../assets/svgs/login.svg'
// import { Select, Option } from '@material-tailwind/react'
import { Button } from '../Components/atoms'
import Logo from '../assets/svgs/logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockIcon from '@mui/icons-material/Lock'
import VisibilityIcon from '@mui/icons-material/Visibility'

const Login = () => {
  const buttonClick = () => {
    console.log('Button CLicked')
  }
  return (
    <div className='h-[1350px] w-full flex flex-row'>
      <div className='flex flex-col w-[40%]'>
        <div className='pl-[128px] pt-[83px] flex flex-row items-center justify-between'>
          <img className='h-[40px] w-[40px]' src={back} alt='' />
          <h3>Already a member? Sign In</h3>
        </div>
        <form className='h-auto w-[880px] flex flex-col pl-[128px]'>
          <h1 className='text-[56px] text-[#3F464E] pt-[114px] pb-[23px]'>Sign Up</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className='w-[686px] border-b-4 border-[#E2E2E2]'>
            <PersonOutlineRoundedIcon
              style={{ paddingBottom: '6px', height: '30px', width: '30px' }}
            />
            <select
              className=' bg-white text-[#4E4E4E] mt-[67px] pt-[4px] pr-[4px] pb-[4px]'
              placeholder='Select Role'
            >
              <option>Customer</option>
              <option>Owner</option>
            </select>
          </div>
          <div className='w-[686px] border-b-4 border-[#E2E2E2]'>
            <MailOutlineIcon style={{ paddingBottom: '6px', height: '30px', width: '30px' }} />
            <input
              className='mt-[67px] pl-2 text-[#4E4E4E] '
              type='email'
              name=''
              id=''
              placeholder='Email '
            />
          </div>

          <div className='w-[686px] border-b-4 border-[#E2E2E2]'>
            <LockIcon style={{ paddingBottom: '6px', height: '30px', width: '30px' }} />

            <input
              className='mt-[67px] pl-2 pr-[360px] text-[#4E4E4E] '
              type='password'
              name=''
              id=''
              placeholder='Password '
            />
            <VisibilityIcon style={{ justifyContent: 'space-between' }} />
          </div>
          <div className='w-[686px] border-b-4 border-[#E2E2E2]'>
            <LockIcon style={{ paddingBottom: '6px', height: '30px', width: '30px' }} />
            <input
              className='mt-[67px] pl-2 pr-[360px] text-[#4E4E4E] '
              type='password'
              name=''
              id=''
              placeholder='Confirm Password '
            />
            <VisibilityIcon />
          </div>
          <div className='flex flex-row items-center justify-start pt-[67px] '>
            <Button
              text='Sign Up'
              icon={icon}
              type='submit'
              className='bg-gradient-to-r from-[#365A6C] to-[#519F9D] rounded-[56px] h-[75px] w-[287px] text-[27px] mr-[12px] text-[#FFFFFF] flex justify-center items-center '
              clickFunction={buttonClick}
            />
            <p className='text-[20px] text-[#AFAFAF] mr-[28px]'>Or sign up with</p>
            <div>
              <GoogleIcon style={{ fontSize: '48px', marginRight: '26px' }} />
            </div>
            <div>
              <FacebookIcon style={{ color: 'blue', fontSize: '48px' }} />
            </div>
          </div>
        </form>
      </div>

      <div className="h-full w-ful bg-[url('/bg.png')] bg-cover">
        <div className='flex flex-col pl-[280px] pt-[340px] items-center align-middle'>
          <img className='h-[460px] w-[460px]' src={gif} alt='' />
          <img className='h-[78px] mt-[71px] w-[343px]' src={Logo} alt='' />
          <p className='text-center mt-[54px] px-[237px] text-[white] text-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod necessitatibus
            quasi explicabo distinctio molestias temporibus porro ex, repudiandae illo!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
