
import { useRef } from "react";
import { useInView } from "framer-motion";
import { fadeUpAnimation, staggerContainerAnimation } from "../utils/animations";
import { motion } from "framer-motion";
import { Book, Calendar, Award, GraduationCap } from "lucide-react";

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-theme-purple opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-theme-pink opacity-10 blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainerAnimation}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient mb-10"></div>
          
          <motion.div 
            variants={fadeUpAnimation}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl hover:border-theme-purple/30 transition-all duration-500"
          >
            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-theme-purple group">
                <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-gradient flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={14} className="text-white" />
                </div>
                <div className="pl-4 transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-xl font-semibold text-gradient">Bachelor of Science (Chemistry & Botany)</h3>
                  <div className="flex items-center text-white/60 mt-1">
                    <Calendar size={14} className="mr-1" />
                    <p>July 2022 - July 2025</p>
                  </div>
                  <p className="mt-1 flex items-center text-white/70">
                    <Award size={14} className="mr-1" />
                    <span>MS University, Saharanpur, Uttar Pradesh</span>
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-theme-purple group">
                <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-gradient flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <Book size={14} className="text-white" />
                </div>
                <div className="pl-4 transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-xl font-semibold text-gradient">Full-Stack Development Certification</h3>
                  <div className="flex items-center text-white/60 mt-1">
                    <Calendar size={14} className="mr-1" />
                    <p>March 2023</p>
                  </div>
                  <p className="mt-1 flex items-center text-white/70">
                    <Award size={14} className="mr-1" />
                    <span>MIMO.org</span>
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-theme-purple group">
                <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-gradient flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <Book size={14} className="text-white" />
                </div>
                <div className="pl-4 transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-xl font-semibold text-gradient">MERN-Stack Development Certification</h3>
                  <div className="flex items-center text-white/60 mt-1">
                    <Calendar size={14} className="mr-1" />
                    <p>February 2023</p>
                  </div>
                  <p className="mt-1 flex items-center text-white/70">
                    <Award size={14} className="mr-1" />
                    <span>Mind Luster & CodeHelp by Babbar</span>
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-theme-purple group">
                <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-gradient flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={14} className="text-white" />
                </div>
                <div className="pl-4 transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-xl font-semibold text-gradient">Senior Secondary Education (12th - PCM)</h3>
                  <div className="flex items-center text-white/60 mt-1">
                    <Calendar size={14} className="mr-1" />
                    <p>July 2022</p>
                  </div>
                  <p className="mt-1 flex items-center text-white/70">
                    <Award size={14} className="mr-1" />
                    <span>The Doon Valley Public School, CBSE</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
