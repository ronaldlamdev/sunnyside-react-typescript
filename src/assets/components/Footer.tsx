import MilkBottlesMobile from '../images/mobile/image-gallery-milkbottles.jpg'
import MilkBottlesDesktop from '../images/desktop/image-gallery-milkbottles.jpg'
import OrangeMobile from '../images/mobile/image-gallery-orange.jpg'
import OrangeDesktop from '../images/desktop/image-gallery-orange.jpg'
import ConeMobile from '../images/mobile/image-gallery-cone.jpg'
import ConeDesktop from '../images/desktop/image-gallery-cone.jpg'
import SugarCubeMobile from '../images/mobile/image-gallery-sugar-cubes.jpg'
import SugarCubeDesktop from '../images/desktop/image-gallery-sugarcubes.jpg'
import Logo from '../images/logo.svg'
import Facebook from '../images/icon-facebook.svg'
import Instagram from '../images/icon-instagram.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'


const Footer = () => {
  return (
    <div className='w-full h-fit'>
      {/* Image gallery */}
      <div className='grid w-full grid-cols-2 min-[565px]:grid-cols-4'>
        <picture>
          <source srcSet={MilkBottlesDesktop} media="(min-width:1024px)"/>
          <img src={MilkBottlesMobile} alt="milk bottles"/>
        </picture>
        <picture>
          <source srcSet={OrangeDesktop} media="(min-width:1024px)"/>
          <img src={OrangeMobile} alt="milk bottles"/>
        </picture>
        <picture>
          <source srcSet={ConeDesktop} media="(min-width:1024px)"/>
          <img src={ConeMobile} alt="milk bottles"/>
        </picture>
        <picture>
          <source srcSet={SugarCubeDesktop} media="(min-width:1024px)"/>
          <img src={SugarCubeMobile} alt="milk bottles"/>
        </picture>
      </div>

      {/* Socials */}
      <div className='w-full bg-[#458c7e]/60 flex flex-col items-center justify-between gap-12 py-12'>
        <div className='flex flex-col items-center text-[#25564b] font-["Barlow"] gap-6'>
          <a href='/'>
            <img src={Logo} className="" alt="logo"/>
          </a>
          <ul className='flex gap-6'>
            <li className='cursor-pointer hover:underline hover:underline-offset-2'>About</li>
            <li className='cursor-pointer hover:underline hover:underline-offset-2'>Services</li>
            <li className='cursor-pointer hover:underline hover:underline-offset-2'>Projects</li>
          </ul>
        </div>
        <div className='flex gap-6'>
          <img className='cursor-pointer hover:opacity-70 hover:scale-125 duration-[400ms]' src={Facebook} alt="Facebook"/>
          <img className='cursor-pointer hover:opacity-70 hover:scale-125 duration-[400ms]' src={Instagram} alt="Instagram"/>
          <img className='cursor-pointer hover:opacity-70 hover:scale-125 duration-[400ms]' src={Twitter} alt="Twitter"/>
          <img className='cursor-pointer hover:opacity-70 hover:scale-125 duration-[400ms]'src={Pinterest} alt="Pinterest"/>
        </div>
      </div>
    </div>
  )
}

export default Footer