import logo from '../icons/ngrok-black.svg';
import './Navbar.css';

const NavBar = () => {
   return (
      <header className='mb-5'>
         <nav className='navbar navbar-expand-lg navbar-light shadow-sm'>
            <div className='container'>
               <div className='d-flex flex-wrap w-100 justify-content-between align-items-center'>
                  <div>
                     <a className='navbar-brand' href='/'>
                        <img id='home' src={logo} alt='ngrok-logo' width='130' />
                     </a>
                  </div>
                  <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                     <span className='navbar-toggler-icon'></span>
                  </button>
                  <div className='nav__collapse'>
                     <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                           <li className='nav-item py-2 py-lg-0'>
                              <a className='nav-link me-3' aria-current='page' href='/'>
                                 How it works
                              </a>
                           </li>
                           <li className='nav-item py-2 py-lg-0'>
                              <a className='nav-link me-3' href='/'>
                                 Pricing
                              </a>
                           </li>
                           <li className='nav-item py-2 py-lg-0'>
                              <a className='nav-link me-3' href='/'>
                                 Enterprise solutions
                              </a>
                           </li>
                           <li className='nav-item py-2 py-lg-0'>
                              <a className='nav-link me-3' href='/'>
                                 Docs
                              </a>
                           </li>
                           <li className='nav-item py-2 py-lg-0'>
                              <a className='nav-link me-3' href='/'>
                                 Download &#8595;
                              </a>
                           </li>
                           <div className='d-flex align-items-center d-lg-none d-md-flex'>
                              <li className='nav-item py-2 py-lg-0'>
                                 <a href='/' className='nav-link'>
                                    Login
                                 </a>
                              </li>
                              <li className='nav-item'>
                                 <a href='/'>
                                    <button className='btn btn-outline-dark py-2 px-5 rounded-pill ms-3'>Sign up</button>
                                 </a>
                              </li>
                           </div>
                        </ul>
                     </div>
                  </div>

                  <div className='d-flex align-items-center d-none d-lg-flex'>
                     <ul className='navbar-nav d-flex align-items-center'>
                        <li className='nav-item'>
                           <a href='/' className='nav-link'>
                              Login
                           </a>
                        </li>
                        <li className='nav-item'>
                           <a href='/'>
                              <button className='btn btn-outline-dark py-2 px-4 rounded-pill ms-3'>Sign up</button>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default NavBar;
