import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Chatbot from './components/Chatbot';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact', 'resume'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* All sections in a single scrollable page */}
      <div id="home">
        <Home />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      <div id="resume">
        <Resume />
      </div>
      
      <Chatbot />
    </div>
  );
}

export default App;