import BannerImage from '../images/banner-image.svg';
import './Banner.css';
import Typical from 'react-typical';

const Banner = () => {
   return (
      <div className='container'>
         <div className='d-lg-flex justify-content-center align-items-center pt-5'>
            <div className='banner_left text-center text-lg-start'>
               <h1 className='h1 display-5 banner__typingText'>
                  Public URLs for
                  <Typical
                     steps={[
                        'exposing your local web server.',
                        2000,
                        'building webhook integrations.',
                        2000,
                        'SSH access to your Raspberry Pi',
                        2000,
                        'testing on mobile devices',
                        2000,
                        'sending previews to clients.',
                        2000,
                        'testing your chatbot.',
                        2000,
                     ]}
                     loop={Infinity}
                  />
               </h1>
               <p className='mb-4'>
                  Spend more time programming. One command for an instant, secure URL to your localhost server through any NAT or firewall.
               </p>
               <a href='/' className='btn btn-primary mt-3 py-3 px-4 rounded-pill'>
                  Get started for free
               </a>
            </div>
            <div>
               <center>
                  <img className='text-center img-fluid' src={BannerImage} alt='banner' width='500' />
               </center>
            </div>
         </div>
      </div>
   );
};

export default Banner;
