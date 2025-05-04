
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { motion } from 'framer-motion';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-[#120E29]">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#120E29] z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="text-gradient">Uday Sharma</span>
        </h1>
        <p className="text-white/70 text-center mt-2">Full-Stack Developer & MERN Specialist</p>
      </motion.div>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '300px' }}
        transition={{ duration: 1.5 }}
        className="bg-white/10 h-1 rounded-full relative overflow-hidden"
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute top-0 left-0 bottom-0 right-0 bg-gradient"
          style={{ width: '50%' }}
        />
      </motion.div>
    </div>
  );
};

export default Index;
