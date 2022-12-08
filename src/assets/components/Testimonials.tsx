import TestimonialCard from "./TestimonialCard"
import { testimonials } from '../data/data';

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col h-fit lg:h-screen lg:justify-center lg:gap-20 min-[1684px]:mt-40 items-center py-4">
      <h1 className='font-["Fraunces"] text-[#a7abae] text-xl lg:text-4xl tracking-[.2rem] px-8'>
        Client Testimonials
      </h1>
      <div className="flex pt-20 lg:pt-0 flex-col items-center gap-16 lg:gap-0 lg:grid lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard 
            key={testimonial.id}
            pfp={testimonial.clientImg}
            quote={testimonial.quote}
            name={testimonial.name}
            position={testimonial.position}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials