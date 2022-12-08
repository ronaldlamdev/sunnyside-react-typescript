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
    <div className="flex h-full flex-col w-full justify-between items-center">

      {/* Transform */}
      <div className='transform-container'>
        <picture>
          <source srcSet={TransformDesktop} media='(min-width:565px)'/>
          <img className='h-full w-full object-cover min-[565px]:order-last' src={TransformMobile} alt="egg"/>
        </picture>
        <div className='transform-text-div'>
          <h1 className='text-[#23303e] text-4xl font-["Fraunces"]'>
            Transform your brand
          </h1>
          <p className='text-[#5a636c] font-["Barlow"] xl:text-2xl my-4'>
            We are a full-service creative agency
            specializing in helping brands grow fast. 
            Engage your clients through compelling 
            visuals that do most of the marketing for
            you. 
          </p>
          <span className='learn-more transform-text-shadow'>
            learn more
          </span>
        </div>
      </div>

      {/* Stand Out */}
      <div className='standout-container'>
        <picture>
          <source srcSet={StandOutDesktop} media="(min-width:565px)"/>
          <img className='h-full w-full object-cover' src={StandOutMobile} alt="cup"/>
        </picture>
        <div className='standout-text-div'>
          <h1 className='text-[#23303e] text-4xl font-["Fraunces"]'>
            Stand out to the right audience
          </h1>
          <p className='text-[#5a636c] font-["Barlow"] xl:text-2xl my-4'>
            Using a collaborative formula of designers,
            researchers, photographers, videographers,
            and copywriters, we'll build and extend your
            brand in digital places.
          </p>
          <span className='learn-more stand-out-text-shadow'>
            learn more
          </span>
        </div>
      </div>

      {/* Graphic Design and Photography*/}
      <div className='graphic-design-and-photography-div'>

        {/* Graphic Design */}
        <div className='w-full h-full relative'>
          <picture>
            <source srcSet={GraphicDesignDesktop} media="(min-width:565px)"/>
            <img className='min-[565px]:w-full min-[565px]:h-full object-cover' src={GraphicDesignMobile} alt="cherries"/>
          </picture>
          <div className='graphic-design-text-container'>
            <h1 className='font-["Fraunces"] text-3xl'>Graphic Design</h1>
            <p className='font-["Barlow"] xl:text-xl 2xl:text-2xl'>
              Great design makes you memorable. We deliver
              artwork that underscores your brand message and
              captures potential clients' attention.
            </p>
          </div>
        </div>

        {/* Photography */}
        <div className='w-full h-full relative'>
          <picture>
            <source srcSet={PhotographyDesktop} media="(min-width:565px)"/>
            <img className='min-[565px]:w-full min-[565px]:h-full object-cover' src={PhotographyMobile} alt="orange" />
          </picture>
          <div className='photography-text-container'>
            <h1 className='font-["Fraunces"] text-3xl'>Photography</h1>
            <p className='font-["Barlow"] xl:text-xl 2xl:text-2xl'>
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