type CardProp = {
  pfp: string,
  quote: string,
  name: string,
  position: string
}

const TestimonialCard = ({pfp, quote, name, position}:CardProp) => {
  return (
    <div className='flex flex-col items-center text-center gap-8'>
      <img className='rounded-full w-[75px] min-[565px]:w-[100px] h-[75px] min-[565px]:h-[100px] lg:w-[150px] lg:h-[150px]' src={pfp} alt={name} />
      <p className='font-["Barlow"] text-[#5a636c] min-[565px]:text-xl lg:text-2xl px-8 md:px-20 lg:px-8'>
        {quote}
      </p>
      <div>
        <h1 className='font-["Fraunces"] text-xl min-[565px]:text-2xl lg:text-3xl mb-2'>{name}</h1>
        <h2 className='font-["Barlow"] text-[#a7abae] min-[565px]:text-xl lg:text-2xl'>{position}</h2>
      </div>
    </div>
  )
}

export default TestimonialCard