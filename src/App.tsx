import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import MyProjects from './sections/MyProjects';
import Skills from './sections/Skills';
import { Toaster } from 'react-hot-toast';

function App() {
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
