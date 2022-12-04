import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h1 className='font-["Fraunces"] text-[#a7abae] text-xl tracking-[.2rem] p-8'>
        Client Testimonials
      </h1>
      <TestimonialCard />
    </div>
  )
}

export default Testimonials