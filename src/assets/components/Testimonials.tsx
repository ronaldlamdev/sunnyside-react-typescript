import TestimonialCard from "./TestimonialCard"
import { testimonials } from '../data/data';

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <h1 className='font-["Fraunces"] text-[#a7abae] text-xl tracking-[.2rem] px-8 pb-12'>
        Client Testimonials
      </h1>
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
  )
}

export default Testimonials