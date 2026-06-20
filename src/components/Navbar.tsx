
import { useState, useEffect } from "react";
import { Mail, Linkedin, File, Github } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-[#120E29]/90 backdrop-blur-lg shadow-lg" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-gradient">Uday's Portfolio</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        
        {/* Social icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://github.com/Mozuday"
            target="_blank"
            className="text-white hover:text-theme-pink transition-colors"
            aria-label="Github"
          >
            <Github size ={20}/>
          </a>
          <a 
            href="mailto:uday8687@gmail.com"
            className="text-white hover:text-theme-pink transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://www.uday-sharma-a36780321/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-theme-pink transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
  href="/resume.pdf"
  download="Uday_Sharma_Resume.pdf"
  className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4M4 4h16" />
  </svg>
  <span>Resume</span>
</a>

        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-[#1A1633]/95 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
          <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</MobileNavLink>
          <MobileNavLink href="#education" onClick={() => setIsMenuOpen(false)}>Education</MobileNavLink>
          <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          
          <div className="flex items-center space-x-4 pt-2 border-t border-white/10">
            <a 
              href="mailto:uday8687@gmail.com"
              className="text-white hover:text-theme-pink transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.uday-sharma-a36780321/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-theme-pink transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-white hover:text-theme-pink transition-colors relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-theme-pink before:origin-left before:transform before:scale-x-0 before:transition-transform hover:before:scale-x-100"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-white hover:text-theme-pink transition-colors text-lg font-medium py-2"
  >
    {children}
  </a>
);

export default Navbar;
