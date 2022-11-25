import Logo from '../images/logo.svg'
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='w-full h-screen header-bg'>
      <div className='flex justify-between items-center p-8'>
        <img src={Logo} alt='logo'/>
        <FaBars size={22} className='text-white cursor-pointer' />
      </div>
    </div>
  )
}

export default Header