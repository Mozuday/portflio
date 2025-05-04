
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = [
    {
      title: "Instagram Clone",
      category: "social-media",
      description: "A full-stack Instagram clone with core social media features.",
      details: [
        "Implemented user authentication, post creation, likes, and comments.",
        "Used React.js, Firebase, Node.js, MongoDB for a scalable backend and responsive UI.",
        "Designed real-time update system for seamless interaction.",
        "Ensured secure authentication and optimized database performance."
      ],
      technologies: ["React.js", "Firebase", "Node.js", "MongoDB"],
      image: "https://picsum.photos/id/1/600/400"
    },
    {
      title: "E-commerce Website",
      category: "e-commerce",
      description: "A full-stack e-commerce platform with secure payment integration.",
      details: [
        "Built a full-stack e-commerce platform with secure payment integration.",
        "Implemented features like product listing, search functionality, shopping cart, and checkout.",
        "Used React.js, Node.js, Express.js, MongoDB for smooth performance.",
        "Integrated UPI payment gateway for seamless transactions."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "UPI Gateway"],
      image: "https://picsum.photos/id/3/600/400"
    },
    {
      title: "Property Rental Website",
      category: "real-estate",
      description: "A real estate rental platform with search filters and location-based property listings.",
      details: [
        "Designed and developed a real estate rental platform with search filters and location-based property listings.",
        "Integrated Google Maps API for better user experience.",
        "Built a back-end system for property management using MongoDB & Node.js."
      ],
      technologies: ["React.js", "Node.js", "Google Maps API", "MongoDB"],
      image: "https://picsum.photos/id/12/600/400"
    },
    {
      title: "Advertisement Revenue Website",
      category: "web-app",
      description: "A website where users earn rewards by watching ads.",
      details: [
        "Developed a website where users earn rewards by watching ads.",
        "Implemented user authentication and a secure account management system.",
        "Built a back-end for ad inventory, user data, and reward tracking."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      image: "https://picsum.photos/id/20/600/400"
    }
  ];
  
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "social-media", label: "Social Media" },
    { id: "e-commerce", label: "E-Commerce" },
    { id: "real-estate", label: "Real Estate" },
    { id: "web-app", label: "Web Apps" }
  ];
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-[#120E29]"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-theme-purple opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-theme-pink opacity-10 blur-[120px]"></div>
      
      {/* Background code */}
      <div className="absolute inset-0 opacity-5">
        <pre className="text-xs font-mono leading-tight">
          {`
function Project() {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    // Initialize project
    setIsActive(true);
    return () => {
      // Cleanup
      setIsActive(false);
    };
  }, []);

  return (
    <div className={isActive ? 'project active' : 'project'}>
      <h2>Amazing Project</h2>
      <p>Built with React, Node.js, and MongoDB</p>
      <button onClick={() => console.log('Clicked!')}>
        View Details
      </button>
    </div>
  );
}
          `}
        </pre>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient mb-6"></div>
          
          <p className="text-lg text-white/80 mb-10 max-w-3xl">
            Here are some of the projects I've worked on. Each project reflects my dedication to creating 
            scalable, user-friendly applications with clean code and optimized performance.
          </p>
          
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === category.id 
                    ? 'bg-gradient text-white font-medium'
                    : 'bg-white/5 hover:bg-white/10 text-white/80'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectProps {
  project: {
    title: string;
    category: string;
    description: string;
    details: string[];
    technologies: string[];
    image: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      ref={cardRef}
      className={`project-card relative overflow-hidden transition-all duration-500 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="group">
        <div className="relative h-52 mb-4 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors duration-300">{project.title}</h3>
        <p className="text-white/70 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="skill-pill">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="skill-pill">+{project.technologies.length - 3}</span>
          )}
        </div>
        
        <button 
          className="text-theme-pink hover:text-theme-purple transition-colors flex items-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Learn More"}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      
      {/* Expanded details */}
      <div 
        className={`
          mt-4 pt-4 border-t border-white/10 overflow-hidden transition-all duration-500
          ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <h4 className="text-lg font-semibold mb-2">Project Details:</h4>
        <ul className="space-y-2 text-white/70">
          {project.details.map((detail, i) => (
            <li key={i} className="flex items-start">
              <span className="text-theme-pink mr-2">●</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        
        <h4 className="text-lg font-semibold mt-4 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="skill-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
