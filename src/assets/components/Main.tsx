import TransformMobile from '../images/mobile/image-transform.jpg';
import TransformDesktop from '../images/desktop/image-transform.jpg';
import StandOutMobile from '../images/mobile/image-stand-out.jpg';
import StandOutDesktop from '../images/desktop/image-stand-out.jpg';
import GraphicDesignMobile from '../images/mobile/image-graphic-design.jpg';
import GraphicDesignDesktop from '../images/desktop/image-graphic-design.jpg';
import PhotographyMobile from '../images/mobile/image-photography.jpg';
import PhotographyDesktop from '../images/desktop/image-photography.jpg';

const Main = () => {
  return (
    <div className="grid w-full grid-cols-1">

      {/* Transform */}
      <div>
        <picture>
          <source srcSet={TransformDesktop} media='(min-width:565px)'/>
          <img src={TransformMobile} alt="egg"/>
        </picture>
        <div>

        </div>
      </div>

      {/* Stand Out */}
      <div>
        <picture>
          <source srcSet={StandOutDesktop} media="(min-width:565px)"/>
          <img src={StandOutMobile} alt="cup"/>
        </picture>
        <div>

        </div>
      </div>

      {/* Graphic Design */}
      <div>
        <picture>
          <source srcSet={GraphicDesignDesktop} media="(min-width:565px)"/>
          <img src={GraphicDesignMobile} alt="cherries"/>
        </picture>
        <div>

        </div>
      </div>

      {/* Photography */}
      <div>
        <picture>
          <source srcSet={PhotographyDesktop} media="(min-width:565px)"/>
          <img src={PhotographyMobile} alt="orange" />
        </picture>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Main