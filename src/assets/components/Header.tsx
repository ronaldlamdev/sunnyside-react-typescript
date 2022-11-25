import Logo from '../images/logo.svg'
import {FaBars} from 'react-icons/fa'

const Header = () => {
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
        <FaBars size={22} className='text-white cursor-pointer min-[566px]:hidden' />
      </div>



    </div>
  )
}

export default Header