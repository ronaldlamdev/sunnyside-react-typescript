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

      {/* Navbar  */}
      <nav className='flex justify-between items-center p-8'>
        <a href='/'>
          <img src={Logo} alt='logo'/>
        </a>
        <ul className='hidden min-[565px]:flex items-center'>
          <li className='navbar-link'>About</li>
          <li className='navbar-link'>Services</li>
          <li className='navbar-link'>Projects</li>
          <button className='navbar-button'>Contact</button>
        </ul>
        <FaBars onClick={handleMobileNav} size={22} className='fabars' />

        {/* Mobile menu */}
        <div className='mobile-menu'>
          <div className={(mobileNav ? 'block ' : 'hidden ') + 'right-triangle  self-end'} />
          <div className={(mobileNav ? 'block ' : 'hidden ') + 'mobile-menu-div'}>
          <ul className='w-full h-full flex flex-col items-center justify-evenly'>
            <li className='mobile-menu-link'>About</li>
            <li className='mobile-menu-link'>Services</li>
            <li className='mobile-menu-link'>Projects</li>
            <button className='mobile-menu-button'>Contact</button>
          </ul>
        </div>
        </div>
      </nav>

      {/* Text over background */}
      <div className='w-full flex justify-center h-[200px] items-center'>
        <h1 className='uppercase text-white text-center text-5xl tracking-widest font-["Fraunces"]'>we are creatives</h1>
      </div>

      <div className='w-full flex justify-center relative'>
        <div className='w-[5px] h-[120px] bg-white rounded-t'/>
        <div className='w-[5px] h-10 bg-white absolute bottom-0 rotate-45 origin-bottom-left'/>
        <div className='w-[5px] h-10 bg-white absolute bottom-0 rotate-[-45deg] origin-bottom-right'/>
      </div>
    </div>
  )
}

export default Header