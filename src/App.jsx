import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components"
import { useRef } from 'react';

function App() {

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar scrollToSection={scrollToSection} />
          <Hero />
        </div>
        <About  ref={aboutRef} />
        {/* <Experience/>   */}
        <Tech />
        <Projects ref={projectRef} />
        {/* <Feedbacks/> */}
        <div className='relative z-0'>
          <Contact ref={contactRef} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
