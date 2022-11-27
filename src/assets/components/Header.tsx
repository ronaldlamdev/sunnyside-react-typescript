import Logo from '../images/logo.svg'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {

  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  }

  return (
    <div className='w-full h-screen header-bg'>
      <div className='flex justify-between items-center p-8'>
        <a href='/'>
          <img src={Logo} alt='logo'/>
        </a>
        <ul className='hidden min-[565px]:flex items-center'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <button>Contact</button>
        </ul>
        <FaBars onClick={handleMobileNav} size={22} className='text-white cursor-pointer min-[565px]:hidden' />
        <div className='absolute flex min-[565px]:hidden flex-col justify-start w-full max-w-[310px] min-[480px]:max-w-[400px] h-[330px] top-20 mx-auto left-0 right-0'>
          <div className={(mobileNav ? 'block ' : 'hidden ') + 'right-triangle  self-end'} />
          <div className={(mobileNav ? 'block' : 'hidden ') + 'mx-auto w-full h-[300px] bg-white shadow-lg rounded-b rounded-tl'}>
          <ul className='w-full h-full flex flex-col items-center justify-evenly'>
            <li className='cursor-pointer font-["Barlow"] text-[#5a636c]'>About</li>
            <li className='cursor-pointer font-["Barlow"] text-[#5a636c]'>Services</li>
            <li className='cursor-pointer font-["Barlow"] text-[#5a636c]'>Projects</li>
            <button className='bg-[#fad400] px-6 py-3 rounded-3xl font-["Fraunces"]'>Contact</button>
          </ul>
        </div>
        </div>
      </div>



    </div>
  )
}

export default Header