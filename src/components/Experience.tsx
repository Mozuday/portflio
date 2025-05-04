
import { useRef } from "react";
import { useInView } from "framer-motion";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-theme-purple opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-theme-pink opacity-10 blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient mb-10"></div>
          
          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-theme-purple to-theme-pink"></div>
            
            {/* Experience item */}
            <ExperienceItem 
              title="Amazon India"
              role="Affiliate Marketer"
              date="November 2023 - Present"
              description={[
                "Promoted and reviewed products to drive affiliate sales and engagement.",
                "Analysed performance metrics using Amazon Associates Dashboard and Google Analytics.",
                "Implemented SEO strategies to maximize product visibility and conversion rates."
              ]}
              index={0}
              isRight={true}
            />
            
            {/* Add certifications and education as timeline items */}
            <ExperienceItem 
              title="Mind Luster & CodeHelp by Babbar"
              role="MERN-Stack Development Certification"
              date="February 2023"
              description={[
                "Completed comprehensive MERN stack curriculum",
                "Built multiple full-stack web applications",
                "Learned modern JavaScript frameworks and tools"
              ]}
              index={1}
              isRight={false}
            />
            
            <ExperienceItem 
              title="MIMO.org"
              role="Full-Stack Development Certification"
              date="March 2023"
              description={[
                "Mastered front-end and back-end technologies",
                "Developed responsive web applications",
                "Gained expertise in database management"
              ]}
              index={2}
              isRight={true}
            />
            
            <ExperienceItem 
              title="Personal Development"
              role="Self-Study & Projects"
              date="2022 - Present"
              description={[
                "Built multiple full-stack projects including Instagram clone, E-commerce platform, Property rental website, and Ad-revenue website",
                "Continuously learning new technologies and frameworks",
                "Focusing on creating scalable and optimized applications"
              ]}
              index={3}
              isRight={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  title: string;
  role: string;
  date: string;
  description: string[];
  index: number;
  isRight: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, role, date, description, index, isRight }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });
  
  return (
    <div 
      ref={itemRef}
      className={`relative mb-12 ${isRight ? 'md:text-left' : 'md:text-right'}`}
    >
      {/* Content */}
      <div
        className={`
          ml-12 md:ml-0 
          ${isRight ? 'md:ml-[50%] md:pl-10' : 'md:mr-[50%] md:pr-10'} 
          transition-all duration-700 transform
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
        style={{ transitionDelay: `${index * 0.2}s` }}
      >
        <div className={`
          bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10
          hover:border-theme-purple/30 transition-all duration-300
          ${isRight ? 'md:rounded-tl-none' : 'md:rounded-tr-none'}
        `}>
          <h3 className="text-xl font-bold text-gradient">{title}</h3>
          <h4 className="text-lg font-semibold mb-2">{role}</h4>
          <p className="text-white/60 text-sm mb-4">{date}</p>
          
          <ul className="space-y-2">
            {description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-theme-pink mr-2 mt-1">●</span>
                <span className="text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Circle marker */}
      <div 
        className={`
          absolute top-6 left-4 md:left-1/2 transform md:-translate-x-1/2
          w-4 h-4 rounded-full bg-gradient border-4 border-[#120E29] z-10
          transition-all duration-700
          ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
        style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}
      ></div>
      
      {/* Date for desktop */}
      <div
        className={`
          hidden md:block absolute top-6 transform translate-y-1
          ${isRight ? 'left-[calc(50%-80px)]' : 'left-[calc(50%+30px)]'}
          text-sm text-white/60 bg-[#1A1633]/90 px-2 py-1 rounded
          transition-all duration-700
          ${isInView ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ transitionDelay: `${index * 0.2 + 0.1}s` }}
      >
        {date.split(" - ")[0]}
      </div>
    </div>
  );
};

export default Experience;
