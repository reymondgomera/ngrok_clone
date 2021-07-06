import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import IconsServices from './components/IconsServices';
import Inspector from './components/Inspector';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
   return (
      <div className='app'>
         <NavBar />
         <Banner />
         <IconsServices />
         <Inspector />
         <Testimonials />
         <Footer />
      </div>
   );
}

export default App;
