
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative overflow-hidden bg-[#0C091F]">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-theme-purple blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-theme-pink blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="pb-8 mb-8 border-b border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gradient">Uday.dev</h2>
              <p className="text-white/60 mt-2">Full-Stack Developer & MERN Specialist</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/uday-sharma-a36280331/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-theme-pink transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:uday8687@gmail.com"
                className="text-white/70 hover:text-theme-pink transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Uday Sharma. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#hero" className="text-white/60 hover:text-white transition-colors text-sm">Home</a>
            <a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">About</a>
            <a href="#skills" className="text-white/60 hover:text-white transition-colors text-sm">Skills</a>
            <a href="#projects" className="text-white/60 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
