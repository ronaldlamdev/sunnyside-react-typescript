type CardProp = {
  pfp: string,
  quote: string,
  name: string,
  position: string
}

const TestimonialCard = ({pfp, quote, name, position}:CardProp) => {
  return (
    <div className='flex flex-col items-center text-center mt-8 gap-8'>
      <img className='rounded-full w-[75px] h-[75px]' src={pfp} alt={name} />
      <p className='font-["Barlow"] text-[#5a636c] px-8'>
        {quote}
      </p>
      <div>
        <h1 className='font-["Fraunces"] text-xl mb-2'>{name}</h1>
        <h2 className='font-["Barlow"] text-[#a7abae]'>{position}</h2>
      </div>
    </div>
  )
}

export default TestimonialCard