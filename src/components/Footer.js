import './Footer.css';
import logo from '../icons/ngrok-black.svg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Footer = () => {
   return (
      <footer className='bg-secondary position-relative'>
         <div className='container p-5'>
            <div className='row pt-3'>
               <div className='col-lg-3 text-center text-lg-start mb-4'>
                  <ul className='list-group footer__nav'>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a className='' href='/'>
                           How it works
                        </a>
                     </li>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a href='/'>Enterprise solutions</a>
                     </li>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a href='/'>Pricing</a>
                     </li>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a href='/'>Docs</a>
                     </li>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a href='/'>Career</a>
                     </li>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a href='/'>Status</a>
                     </li>
                  </ul>
               </div>
               <div className='col-lg-6 text-center mb-4'>
                  <h2 className='h2 fs-5'>Stay focused on coding.</h2>
                  <button className='btn btn-outline-secondary mt-3 py-2 px-4 rounded-pill'>Get started for free</button>
               </div>
               <div className='col-lg-3 text-center text-lg-start mb-4'>
                  <ul className='list-group footer__nav'>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a className='opacity__70' href='/'>
                           Abuse
                        </a>
                     </li>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a className='opacity__70' href='/'>
                           Privacy
                        </a>
                     </li>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a className='opacity__70' href='/'>
                           Security
                        </a>
                     </li>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a className='opacity__70' href='/'>
                           Term of Service
                        </a>
                     </li>
                     <li className='list-group-item footer__navLinks bg-secondary'>
                        <a href='/'>
                           <img className='footer__logo mt-3' src={logo} alt='ngrok-logo' width='130' />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className='container-fluid text-center text-muted py-2'>
            <small className='footer__copyright opacity__70'>&copy; &nbsp;NGROK CLONE 2021</small>
         </div>
         <div className='position-fixed bottom-0 end-0 d-flex justify-content-center align-items-center footer__fixedButton'>
            <MailOutlineIcon />
            <a href='#home' className='px-2'>
               Ask a question
            </a>
         </div>
      </footer>
   );
};

export default Footer;
