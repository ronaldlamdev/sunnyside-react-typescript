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
      <div className='w-full bg-[#458c7e]'>
        <div>
          <img src={Logo} alt="logo"/>
          <ul className='flex'>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <img src={Facebook} alt="Facebook"/>
          <img src={Instagram} alt="Instagram"/>
          <img src={Twitter} alt="Twitter"/>
          <img src={Pinterest} alt="Pinterest"/>
        </div>
      </div>
    </div>
  )
}

export default Footer