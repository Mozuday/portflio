import { useRef } from "react";
import { useInView } from "framer-motion";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const frontendSkills = [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript (ES6+)", icon: "javascript" },
    { name: "React.js", icon: "react" },
    { name: "Vue.js", icon: "vuejs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Responsive Design", icon: "html5" }
  ];
  
  const backendSkills = [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "PHP", icon: "php" },
    { name: "Python", icon: "python" },
    { name: "RESTful APIs", icon: "nodejs" },
    { name: "Authentication", icon: "express" },
    { name: "Authorization", icon: "express" }
  ];
  
  const databaseSkills = [
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" }
  ];
  
  const devOpsSkills = [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" }
  ];
  
  const otherSkills = [
    { name: "AI Tools", icon: "python" },
    { name: "Ethical Hacking", icon: "linux" },
    { name: "Microsoft Power BI", icon: "microsoftsqlserver" }
  ];
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A1633 0%, #120E29 100%)"
      }}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-theme-purple blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-theme-pink blur-[100px]"></div>
        
        <div className="absolute top-40 right-40 text-white/5 text-8xl font-bold">HTML</div>
        <div className="absolute bottom-60 left-40 text-white/5 text-8xl font-bold">CSS</div>
        <div className="absolute top-1/2 left-1/3 text-white/5 text-8xl font-bold">JS</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <SkillCard 
              title="Frontend Development" 
              skills={frontendSkills} 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#skillGradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="skillGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6a11cb" />
                      <stop offset="100%" stopColor="#ec38bc" />
                    </linearGradient>
                  </defs>
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              }
              delay={0}
            />
            
            {/* Backend Development */}
            <SkillCard 
              title="Backend Development" 
              skills={backendSkills} 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#skillGradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="skillGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6a11cb" />
                      <stop offset="100%" stopColor="#ec38bc" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="22" y1="8" x2="22" y2="8"></line>
                  <line x1="2" y1="8" x2="2" y2="8"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                </svg>
              }
              delay={0.2}
            />
            
            {/* Database Management */}
            <SkillCard 
              title="Database Management" 
              skills={databaseSkills} 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#skillGradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="skillGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6a11cb" />
                      <stop offset="100%" stopColor="#ec38bc" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              }
              delay={0.4}
            />
            
            {/* DevOps & Tools */}
            <SkillCard 
              title="DevOps & Tools" 
              skills={devOpsSkills} 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#skillGradient4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="skillGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6a11cb" />
                      <stop offset="100%" stopColor="#ec38bc" />
                    </linearGradient>
                  </defs>
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              }
              delay={0.6}
            />
            
            {/* Other Technical Skills */}
            <SkillCard 
              title="Other Technical Skills" 
              skills={otherSkills} 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#skillGradient5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="skillGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6a11cb" />
                      <stop offset="100%" stopColor="#ec38bc" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              }
              delay={0.8}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  skills: { name: string; icon: string }[];
  icon: React.ReactNode;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  return (
    <div 
      ref={cardRef}
      className={`bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-theme-purple/30 transition-all duration-500 transform ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${delay}s`,
        boxShadow: "0 10px 30px -15px rgba(106, 17, 203, 0.2)"
      }}
    >
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="skill-pill flex items-center"
          >
            <img 
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} 
              alt={skill.name} 
              className="w-4 h-4 mr-1"
              onError={(e) => {
                e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`;
              }}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
