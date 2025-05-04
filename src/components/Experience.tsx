
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "../utils/animations";

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
          
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-theme-purple/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gradient">Amazon India</h3>
                <p className="text-white/60 text-sm md:text-base">November 2023 - Present</p>
              </div>
              
              <h4 className="text-xl font-medium mb-4">Affiliate Marketer</h4>
              
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className="text-theme-pink mr-2 mt-1">●</span>
                  <span className="text-white/80">Promoted and reviewed products to drive affiliate sales and engagement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-theme-pink mr-2 mt-1">●</span>
                  <span className="text-white/80">Analysed performance metrics using Amazon Associates Dashboard and Google Analytics.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-theme-pink mr-2 mt-1">●</span>
                  <span className="text-white/80">Implemented SEO strategies to maximize product visibility and conversion rates.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
