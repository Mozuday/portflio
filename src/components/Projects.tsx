
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

  const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = [
  {
    title: "E-Commerce Website",
    category: "e-commerce",
    description: "Online shopping website with product listings and cart functionality.",
    details: [
      "Built a responsive user interface.",
      "Implemented product browsing and cart features.",
      "Focused on performance and usability.",
      "Created using modern web technologies."
    ],
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "GeeksForGeeks 160 Days",
    category: "coding",
    description: "Completed the GeeksForGeeks 160 Days DSA challenge.",
    details: [
      "Solved coding problems daily.",
      "Practiced arrays, strings, trees and graphs.",
      "Improved problem-solving skills.",
      "Implemented solutions in Python."
    ],
    technologies: ["Python", "DSA"]
  },
  {
    title: "Simple Calculator",
    category: "web-app",
    description: "Calculator application for basic arithmetic operations.",
    details: [
      "Supports addition, subtraction, multiplication and division.",
      "Responsive design.",
      "Clean user interface.",
      "Built using HTML, CSS and JavaScript."
    ],
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    category: "portfolio",
    description: "Personal portfolio website showcasing projects and skills.",
    details: [
      "Responsive design.",
      "Project showcase section.",
      "Skills and contact sections.",
      "Built using React and TypeScript."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Labour Link Portal",
    category: "web-app",
    description: "Platform connecting workers and employers.",
    details: [
      "Worker and employer profiles.",
      "Job listing functionality.",
      "User authentication system.",
      "Responsive dashboard."
    ],
    technologies: ["React", "TypeScript"]
  },
  {
    title: "Notes App",
    category: "web-app",
    description: "Application for creating and managing notes.",
    details: [
      "Create notes.",
      "Edit notes.",
      "Delete notes.",
      "Simple and clean interface."
    ],
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
  title: "Resume Builder",
  category: "web-app",
  description: "Web application for creating professional resumes.",
  details: [
    "Built an easy-to-use resume creation platform.",
    "Users can enter personal, education, and project details.",
    "Generated professional resume layouts.",
    "Focused on responsive design and usability."
  ],
  technologies: ["React", "TypeScript", "Tailwind CSS"]
},
{
  title: "LCM Calculator",
  category: "web-app",
  description: "Tool for calculating the Least Common Multiple of numbers.",
  details: [
    "Accepts multiple number inputs.",
    "Calculates LCM instantly.",
    "Displays step-by-step results.",
    "Simple and responsive interface."
  ],
  technologies: ["HTML", "CSS", "JavaScript"]
},
{
  title: "Maths Playing Website",
  category: "web-app",
  description: "Interactive website for learning mathematics through games.",
  details: [
    "Designed educational math challenges and quizzes.",
    "Improved arithmetic and problem-solving skills.",
    "Interactive user interface for better engagement.",
    "Responsive design for desktop and mobile users."
  ],
  technologies: ["HTML", "CSS", "JavaScript"]
},
{
  title: "Weather App",
  category: "web-app",
  description: "Weather application showing real-time weather information.",
  details: [
    "Fetched live weather data using APIs.",
    "Displayed temperature, humidity, and conditions.",
    "Search by city functionality.",
    "Responsive user interface."
  ],
  technologies: ["React", "API", "CSS"]
}
];
  
  const categories = [
  { id: "all", label: "All Projects" },
  { id: "e-commerce", label: "E-Commerce" },
  { id: "coding", label: "Coding" },
  { id: "portfolio", label: "Portfolio" },
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
        <div className="mb-4">
  <h3 className="text-xl font-bold mb-2">
    {project.title}
  </h3>
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
