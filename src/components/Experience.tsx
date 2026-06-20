import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Freelance Full-Stack Developer",
    role: "Fiverr, Upwork & Local Clients",
    duration: "November 2024 – Present",
    points: [
      "Develop responsive websites and full-stack web applications for clients across multiple industries.",
      "Build REST APIs, authentication systems, and database-driven solutions using modern technologies.",
      "Create modern user interfaces with React.js, JavaScript, Tailwind CSS, and Bootstrap.",
      "Manage project requirements, client communication, and timely delivery of high-quality solutions.",
      "Deliver scalable and maintainable applications tailored to business needs.",
    ],
  },
  {
    company: "Rana Sugars Ltd.",
    role: "Software Maintenance Associate (Part-Time)",
    duration: "June 2025 – Present",
    points: [
      "Support software maintenance activities and troubleshoot technical issues across business systems.",
      "Collaborate with teams to identify and resolve software-related challenges.",
      "Assist with software updates, system documentation, and operational improvements.",
      "Maintain reliable software operations and support day-to-day business processes.",
    ],
  },
  {
    company: "Labmentix",
    role: "Web Developer Intern",
    duration: "September 2025 – October 2025",
    points: [
      "Assisted in developing and maintaining responsive web applications using modern technologies.",
      "Collaborated with developers to implement frontend features and improve user experience.",
      "Participated in project delivery workflows and software development best practices.",
      "Gained practical experience working in a professional development environment.",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-theme-purple opacity-10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-theme-pink opacity-10 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="w-20 h-1 bg-gradient mb-6"></div>

          <p className="text-white/70 max-w-3xl mb-12">
            Professional experience spanning freelance development,
            software maintenance, and web application development. Focused
            on building scalable solutions, improving user experiences,
            and delivering reliable software systems.
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-theme-purple/40 hover:bg-white/[0.07] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gradient">
                      {exp.company}
                    </h3>

                    <span className="text-sm text-white/60 mt-2 md:mt-0">
                      {exp.duration}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium text-white/90 mb-6">
                    {exp.role}
                  </h4>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start text-white/80"
                      >
                        <span className="text-theme-pink mr-3 mt-1">
                          ●
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;