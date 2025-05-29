import { useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import MyProjects from './sections/MyProjects';
import Skills from './sections/Skills';
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    // As Navbar is there with postion sticky,top-5
    const handleLoad = () => {
      const element = document.getElementById('hero');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  });

  return (
    <>
      <div className='container mx-auto'>
        <Navbar />
        <Hero />
        <Skills />
        <AboutMe />
        <MyProjects />
        <ContactMe />
        <Footer />
      </div>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '13px',
          },
        }}
      />
    </>
  );
}

export default App;
