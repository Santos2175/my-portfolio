import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import MyProjects from './sections/MyProjects';
import Skills from './sections/Skills';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Hero />
      <Skills />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
