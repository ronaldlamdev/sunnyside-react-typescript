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
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency
            specializing in helping brands grow fast. 
            Engage your clients through compelling 
            visuals that do most of the marketing for
            you. 
          </p>
          <span>learn more</span>
        </div>
      </div>

      {/* Stand Out */}
      <div>
        <picture>
          <source srcSet={StandOutDesktop} media="(min-width:565px)"/>
          <img src={StandOutMobile} alt="cup"/>
        </picture>
        <div>
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers,
            researchers, photographers, videographers,
            and copywriters, we'll build and extend your
            brand in digital places.
          </p>
          <span>learn more</span>
        </div>
      </div>

      {/* Graphic Design and Photography*/}
      <div>
        <div>
          <picture>
            <source srcSet={GraphicDesignDesktop} media="(min-width:565px)"/>
            <img src={GraphicDesignMobile} alt="cherries"/>
          </picture>
          <div>
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable. We deliver
              artwork that underscores your brand message and
              captures potential clients' attention.
            </p>
          </div>
        </div>
        <div>
          <picture>
            <source srcSet={PhotographyDesktop} media="(min-width:565px)"/>
            <img src={PhotographyMobile} alt="orange" />
          </picture>
          <div>
            <h1>Photography</h1>
            <p>
              Increase your credibility by getting the most
              stunning, high-quality photos that improve your
              business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main