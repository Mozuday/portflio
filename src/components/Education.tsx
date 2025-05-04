
import { useRef } from "react";
import { useInView } from "framer-motion";
import { fadeUpAnimation, staggerContainerAnimation } from "../utils/animations";
import { motion } from "framer-motion";

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
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
          >
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-theme-purple">
                <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-theme-pink"></div>
                <h3 className="text-xl font-semibold">Bachelor of Science (Chemistry & Botany)</h3>
                <p className="text-white/60">MS University, Saharanpur, Uttar Pradesh</p>
                <p className="text-white/60">July 2022 - July 2025</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-theme-purple">
                <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-theme-pink"></div>
                <h3 className="text-xl font-semibold">Full-Stack Development Certification</h3>
                <p className="text-white/60">MIMO.org</p>
                <p className="text-white/60">March 2023</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-theme-purple">
                <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-theme-pink"></div>
                <h3 className="text-xl font-semibold">MERN-Stack Development Certification</h3>
                <p className="text-white/60">Mind Luster & CodeHelp by Babbar</p>
                <p className="text-white/60">February 2023</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-theme-purple">
                <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-theme-pink"></div>
                <h3 className="text-xl font-semibold">Senior Secondary Education (12th - PCM)</h3>
                <p className="text-white/60">The Doon Valley Public School, CBSE</p>
                <p className="text-white/60">July 2022</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
