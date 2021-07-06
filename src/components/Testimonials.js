import TestimonialCard from './TestimonialCard';
// https://randomuser.me/api/portraits/women/10.jpg
const Testimonials = () => {
   return (
      <div className='container p-5 my-5'>
         <div className='text-center mb-5'>
            <h2 className='h2 fs-5 fw-bold'>Join the hundreds of thousands of developers who love ngrok</h2>
            <h3 className='h3 fs-5 mt-3'>Here’s some kind words from a few of them.</h3>
         </div>
         <div className='row g-4 justify-content-center'>
            <div className='col-lg-4 col-md-6'>
               <TestimonialCard
                  src='https://randomuser.me/api/portraits/women/10.jpg'
                  email='@johndoe'
                  text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint ullam ist'
               />
            </div>
            <div className='col-lg-4 col-md-6'>
               <TestimonialCard
                  src='https://randomuser.me/api/portraits/men/12.jpg'
                  email='@roxy24'
                  text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint ullam ist'
               />
            </div>
            <div className='col-lg-4 col-md-6'>
               <TestimonialCard
                  src='https://randomuser.me/api/portraits/women/13.jpg'
                  email='@rin'
                  text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint ullam ist'
               />
            </div>
            <div className='col-lg-4 col-md-6'>
               <TestimonialCard
                  src='https://randomuser.me/api/portraits/men/11.jpg'
                  email='@morbious'
                  text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint ullam ist'
               />
            </div>
            <div className='col-lg-4 col-md-6'>
               <TestimonialCard
                  src='https://randomuser.me/api/portraits/men/17.jpg'
                  email='@javars'
                  text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint ullam ist'
               />
            </div>
            <div className='col-lg-4 col-md-6'>
               <TestimonialCard
                  src='https://randomuser.me/api/portraits/women/18.jpg'
                  email='@maedoe'
                  text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint ullam ist'
               />
            </div>
         </div>
      </div>
   );
};

export default Testimonials;
