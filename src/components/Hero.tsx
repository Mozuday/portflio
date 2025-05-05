
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #120E29 0%, #1A1633 100%)"
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-theme-purple blur-[80px]" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-theme-pink blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-theme-lightblue blur-[120px]" />
        
        {/* Code snippets in background */}
        <div className="absolute top-1/4 right-10 text-white/10 font-mono text-sm transform rotate-12">
          <pre>{`const Portfolio = () => {
  return (
    <div className="awesome">
      <h1>Uday Sharma</h1>
      <p>Full-Stack Developer</p>
    </div>
  );
}`}</pre>
        </div>
        
        <div className="absolute bottom-1/4 left-10 text-white/10 font-mono text-sm transform -rotate-12">
          <pre>{`import { Skills } from './components';

const skills = [
  'MERN Stack',
  'JavaScript',
  'React',
  'Node.js'
];`}</pre>
        </div>
      </div>
      
      {/* Hero content */}
      <div 
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 z-10"
        style={{
          transform: `translateY(${parallaxOffset}px)`
        }}
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="text-sm font-medium bg-white/10 text-white w-fit px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            FULL-STACK DEVELOPER & MERN SPECIALIST
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Uday <span className="text-gradient">Sharma</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-light mb-8 max-w-lg">
            Passionate Full-Stack Developer with expertise in MERN Stack creating scalable, user-friendly web applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-gradient text-white px-6 py-3 rounded-md font-semibold hover:shadow-lg hover:shadow-theme-purple/30 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="bg-white/10 text-white backdrop-blur-sm px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-4">
            <div className="text-white/60">Find me on:</div>
            <div className="flex space-x-3">
              <a
                href="https://github.com/Mozuday"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-theme-purple transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 .297a12 12 0 00-3.794 23.4c.6.113.82-.26.82-.577v-2.22c-3.338.725-4.042-1.61-4.042-1.61a3.18 3.18 0 00-1.335-1.753c-1.09-.745.082-.73.082-.73a2.53 2.53 0 011.846 1.242 2.57 2.57 0 003.51 1 2.57 2.57 0 01.764-1.616c-2.667-.3-5.467-1.334-5.467-5.933a4.64 4.64 0 011.235-3.213 4.3 4.3 0 01.117-3.169s1.007-.322 3.3 1.23a11.4 11.4 0 016 0c2.29-1.552 3.296-1.23 3.296-1.23a4.3 4.3 0 01.118 3.169 4.64 4.64 0 011.234 3.213c0 4.61-2.803 5.63-5.475 5.922a2.87 2.87 0 01.819 2.223v3.293c0 .32.218.694.825.576A12 12 0 0012 .297z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/uday-sharma-a36780321/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-theme-purple transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:uday8687@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-theme-pink transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center relative"
        >
          <div className="relative h-[400px] w-[400px]">
            {/* Profile image with glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 animate-pulse-glow">
                <img 
                  src="/lovable-uploads/udaysharma.jpg"
                  alt="Uday Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Orbit elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-theme-purple rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-theme-pink rounded-full"></div>
            </div>
            
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-theme-purple rounded-full"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-theme-pink rounded-full"></div>
            </div>
            
            {/* Tech icons floating around */}
            <div className="absolute top-10 right-20 p-2 bg-[#1A1633]/80 backdrop-blur-sm rounded-lg animate-float">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="30" />
            </div>
            
            <div className="absolute bottom-20 right-10 p-2 bg-[#1A1633]/80 backdrop-blur-sm rounded-lg animate-float" style={{ animationDelay: '1s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="30" />
            </div>
            
            <div className="absolute bottom-40 left-10 p-2 bg-[#1A1633]/80 backdrop-blur-sm rounded-lg animate-float" style={{ animationDelay: '2s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="30" />
            </div>
            
            <div className="absolute top-20 left-20 p-2 bg-[#1A1633]/80 backdrop-blur-sm rounded-lg animate-float" style={{ animationDelay: '1.5s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="30" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-white/60 text-sm mb-2">Scroll Down</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
