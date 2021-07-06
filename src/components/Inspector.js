import './Inspector.css';
import NgrokProduct from '../images/ngrok-product-2-p-1080.svg';

const Inspector = () => {
   return (
      <div className='container-fluid bg-primary p-5'>
         <div className='container w-75 text-center'>
            <h2 className='h1 fs-6 fw-bold inspector__title'>TAKE ADVANTAGE OF A POWERFUL LOCAL INSPECTOR</h2>
            <p className='mt-3 inspector__text fw-lighter'>
               ngrok provides a real-time web UI where you can introspect all HTTP traffic running over your tunnels. Replay any request against your
               tunnel with one click.
            </p>
            <img className='mt-5 image-fluid' src={NgrokProduct} alt='' />
            <h2 className='h2 display-6 mt-5'>And so much more.</h2>
            <p>
               <span className='text--highlighted'>Explore the docs</span> to see everything ngrok can do.
            </p>
         </div>
      </div>
   );
};

export default Inspector;
