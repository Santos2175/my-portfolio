import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import Hero from './sections/Hero';
import Skills from './sections/Skills';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar />
      <Hero />
      <Skills />
      <AboutMe />
    </div>
  );
}

export default App;
