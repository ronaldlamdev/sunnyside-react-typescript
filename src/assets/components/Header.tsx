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
        <FaBars onClick={handleMobileNav} size={22} className='text-white cursor-pointer min-[566px]:hidden' />
        <div className='absolute flex flex-col justify-center items-center w-full max-w-[310px] h-[400px] top-24 mx-auto left-0 right-0'>
          <div className={(mobileNav ? 'block ' : 'hidden ') + 'right-triangle absolute top-0 self-end right-0'} />
          <div className={(mobileNav ? 'block' : 'hidden ') + 'absolute top-8 left-0 right-0 mx-auto w-full max-w-[310px] h-[300px] bg-white shadow-lg rounded-b'}>
          <ul className='w-full h-full flex flex-col items-center justify-evenly'>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <button>Contact</button>
          </ul>
        </div>
        </div>
      </div>



    </div>
  )
}

export default Header