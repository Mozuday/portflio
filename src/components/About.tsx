
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120E29] to-[#1A1633] opacity-50"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-theme-purple opacity-10 blur-[100px]"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-theme-pink opacity-10 blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient mb-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-2">
              <p className="text-lg text-white/80 mb-6">
                Passionate Full-Stack Developer with expertise in MERN Stack and a strong
                background in front-end and back-end development, database management, and
                API integration. Committed to continuous learning and delivering scalable, user-
                friendly web applications with optimized performance.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Proficient in various programming languages, with experience in developing and
                maintaining responsive, user-friendly, and visually appealing websites using
                modern web development frameworks and tools.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6a11cb" />
                          <stop offset="100%" stopColor="#ec38bc" />
                        </linearGradient>
                      </defs>
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    Focus Areas
                  </h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start">
                      <span className="text-theme-pink mr-2">●</span>
                      <span>Full-Stack Web Development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-theme-pink mr-2">●</span>
                      <span>MERN Stack Applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-theme-pink mr-2">●</span>
                      <span>Responsive UI/UX Design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-theme-pink mr-2">●</span>
                      <span>RESTful API Development</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6a11cb" />
                          <stop offset="100%" stopColor="#ec38bc" />
                        </linearGradient>
                      </defs>
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    Contact Details
                  </h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <a href="tel:+917906932858" className="hover:text-theme-pink transition-colors">+91 7906932858</a>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <a href="mailto:uday8687@gmail.com" className="hover:text-theme-pink transition-colors">uday8687@gmail.com</a>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Deoband (SRE), Uttar Pradesh, India - 247554</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <a href="https://www.uday-sharma-a36280331/" target="_blank" rel="noopener noreferrer" className="hover:text-theme-pink transition-colors">uday-sharma-a36280331/</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
