import './TestimonialsCard.css';

const TestimonialCard = ({ src, email, text }) => {
   return (
      <div className='card card--bgColor'>
         <div className='card-body p-4'>
            <img className='my-2 rounded-circle' src={src} width='60' alt='user' />
            <h5 className='card-title mt-2 fs-6 fw-bold'>{email}</h5>
            <p className='card-text fs-6'>{text}</p>
         </div>
      </div>
   );
};

export default TestimonialCard;
