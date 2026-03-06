import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-white font-sans overflow-x-hidden selection:bg-primary/30 relative z-0">
      <div className="bg-animated-gradient-grid"></div>
      <CustomCursor />
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
