import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import MatClass from './components/MatClass';
import ContentCreator from './components/ContentCreator';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div>
      <AnimatePresence>
        <Hero />
        <About />
        <Journey />
        <MatClass />
        <ContentCreator />
        <Gallery />
        <Contact />
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
