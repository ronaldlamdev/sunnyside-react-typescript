import MilkBottlesMobile from '../images/mobile/image-gallery-milkbottles.jpg'
import MilkBottlesDesktop from '../images/desktop/image-gallery-milkbottles.jpg'
import OrangeMobile from '../images/mobile/image-gallery-orange.jpg'
import OrangeDesktop from '../images/desktop/image-gallery-orange.jpg'
import ConeMobile from '../images/mobile/image-gallery-cone.jpg'
import ConeDesktop from '../images/desktop/image-gallery-cone.jpg'
import SugarCubeMobile from '../images/mobile/image-gallery-sugar-cubes.jpg'
import SugarCubeDesktop from '../images/desktop/image-gallery-sugarcubes.jpg'


const Footer = () => {
  return (
    <div className='w-full h-screen'>
      <div className='grid w-full grid-cols-2'>
        <picture>
          <source srcSet={MilkBottlesDesktop} media="(min-width:565px)"/>
          <img src={MilkBottlesMobile} alt="milk bottles"/>
        </picture>
        <picture>
          <source srcSet={OrangeDesktop} media="(min-width:565px)"/>
          <img src={OrangeMobile} alt="milk bottles"/>
        </picture>
        <picture>
          <source srcSet={ConeDesktop} media="(min-width:565px)"/>
          <img src={ConeMobile} alt="milk bottles"/>
        </picture>
        <picture>
          <source srcSet={SugarCubeDesktop} media="(min-width:565px)"/>
          <img src={SugarCubeMobile} alt="milk bottles"/>
        </picture>
      </div>
      <div></div>
    </div>
  )
}

export default Footer