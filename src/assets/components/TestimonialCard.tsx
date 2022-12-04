import Emily from '../images/image-emily.jpg'

const TestimonialCard = () => {
  return (
    <div className='flex flex-col items-center text-center mt-8 gap-8'>
      <img className='rounded-full w-[75px] h-[75px]' src={Emily} alt="Emily" />
      <p className='font-["Barlow"] text-[#5a636c] px-8'>
        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
      </p>
      <div>
        <h1 className='font-["Fraunces"] text-2xl'>Emily R.</h1>
        <h2 className='font-["Barlow"] text-[#a7abae]'>Marketing Director</h2>
      </div>
    </div>
  )
}

export default TestimonialCard