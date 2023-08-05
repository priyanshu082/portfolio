import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {About ,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"
import { useRef } from 'react';

function App() {
 
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    let targetElement = null;
  
    if (section === "about") targetElement = aboutRef.current;
    if (section === "projects") targetElement = projectRef.current;
    if (section === "contact") targetElement = contactRef.current;
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, null, `#${section}`);
    }
  };
  


  return (
  <BrowserRouter>
  <div className='relative z-0 bg-primary'>
   <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    <Navbar scrollToSection={scrollToSection}/>
    <Hero/>
   </div>
   <About ref={aboutRef}/>
     {/* <Experience/>   */}
   <Tech/>
    <Works ref={projectRef}/> 
  
   {/* <Feedbacks/> */}
  <div className='relative z-0'>
    <Contact ref={contactRef}/>
    <StarsCanvas/>
  </div>
  </div>
  </BrowserRouter> 
  )
}

export default App
