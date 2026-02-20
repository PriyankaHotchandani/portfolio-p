"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";

export const Projects = () => {
  const allProjects = [
    {
      title: "MedEx",
      category: "HealthTech & Digital Delivery",
      description: "Mobile application for medicine delivery logistics, leveraging Flutter/Firebase to streamline patient access to necessary drugs.",
      link: "https://github.com/PriyankaHotchandani/MedEx"
    },
    {
      title: "Brain-Tumor-Detection",
      category: "HealthTech & Digital Delivery",
      description: "AI-powered web tool that automates initial brain tumor detection from patient scans, focusing on diagnostics automation.",
      link: "https://github.com/PriyankaHotchandani/Brain-Tumor-Detection"
    },
    {
      title: "DocuShare",
      category: "FinTech & Blockchain",
      description: "Blockchain solution for secure, digitized e-signature, document ownership, and acceptance control.",
      link: "https://github.com/PriyankaHotchandani/DocuShare"
    },
    {
      title: "Charithereum",
      category: "FinTech & Blockchain",
      description: "Decentralized application (DApp) ensuring transparent and traceable charity transactions on the Ethereum network.",
      link: "https://github.com/PriyankaHotchandani/Charithereum"
    },
    {
      title: "DSC-Eye-of-God",
      category: "Accessibility & Social Impact",
      description: "Developed a \"virtual-cane\" navigation system for the visually impaired to enhance independent mobility.",
      link: "https://github.com/PriyankaHotchandani/DSC-Eye-of-God"
    },
    {
      title: "CodeForHer-Hackathon",
      category: "Accessibility & Social Impact",
      description: "Created a community platform and interactive forum to support and connect members of a non-profit organization (\"Aspire For Her\").",
      link: "https://github.com/PriyankaHotchandani/CodeForHer-Hackathon"
    },
    {
      title: "Ascent-Again",
      category: "Accessibility & Social Impact",
      description: "Digital resource platform for women in distress, consolidating localized access to job searches, mental health services, and legal empowerment information across four major Indian metros.",
      link: "https://github.com/PriyankaHotchandani/Ascent-Again"
    },
    {
      title: "Myntra-HackerRamp (V-Shop)",
      category: "E-commerce & Marketplaces",
      description: "Engineered a social commerce platform facilitating virtual group shopping and enhancing customer experience.",
      link: "https://github.com/PriyankaHotchandani/Myntra-HackerRamp-WeForShe-"
    },
    {
      title: "iTravel",
      category: "E-commerce & Marketplaces",
      description: "Created a marketplace connecting users with unique, state-specific travel products from local small businesses.",
      link: "https://github.com/PriyankaHotchandani/iTravel"
    },
    {
      title: "txt.wav-AudioSteganography",
      category: "Cybersecurity & Core Tech",
      description: "Program utilizing Audio Steganography to embed and hide sensitive text messages within audio files.",
      link: "https://github.com/PriyankaHotchandani/txt.wav-AudioSteganography"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 2) % allProjects.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 2 + allProjects.length) % allProjects.length);
  };

  const currentProjects = [
    allProjects[currentIndex],
    allProjects[(currentIndex + 1) % allProjects.length]
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      y: -80,
      opacity: 0,
      rotateY: direction > 0 ? 35 : -35,
      rotateX: 15,
      z: -400,
      scale: 0.7
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      y: 80,
      opacity: 0,
      rotateY: direction < 0 ? 35 : -35,
      rotateX: -15,
      z: -400,
      scale: 0.7
    })
  };

  return (
    <div id="projects" className='pt-20 pb-8 relative'>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent">Projects</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
      </div>

      <div className="relative">
        <div
          className="relative h-[400px] md:h-[350px] mb-16 overflow-visible"
          style={{ perspective: '2000px', perspectiveOrigin: 'center center' }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                y: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.25 },
                rotateY: { type: "spring", stiffness: 180, damping: 22 },
                rotateX: { type: "spring", stiffness: 180, damping: 22 },
                z: { type: "spring", stiffness: 180, damping: 22 },
                scale: { duration: 0.25 }
              }}
              style={{
                transformStyle: 'preserve-3d',
                position: 'absolute',
                inset: 0
              }}
            >
              <div className="grid md:grid-cols-2 gap-6 h-full">
                {currentProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="relative group"
                    onMouseEnter={() => setHoveredProject(idx)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <motion.div
                      whileHover={{
                        boxShadow: "var(--shadow-elegant-xl)",
                        scale: 1.03,
                        z: 50
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 h-full p-7 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm 
                               border border-neutral-200/60 dark:border-neutral-800/60 
                               group-hover:border-neutral-400 dark:group-hover:border-neutral-600
                               flex flex-col justify-between"
                      style={{
                        boxShadow: "var(--shadow-elegant-md)",
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-500 mb-2 block uppercase tracking-wider">
                              {project.category}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-neutral-900 dark:text-neutral-50">
                              {project.title}
                            </h3>
                          </div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 hover:scale-110"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </div>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm 
                       border-2 border-neutral-300 dark:border-neutral-700 
                       flex items-center justify-center 
                       hover:border-neutral-400 dark:hover:border-neutral-600 
                       hover:bg-neutral-50 dark:hover:bg-neutral-800 
                       hover:scale-105 active:scale-95
                       transition-all duration-300"
            style={{ boxShadow: "var(--shadow-elegant-md)" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="px-5 py-2.5 rounded-xl bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm 
                         border border-neutral-200/60 dark:border-neutral-700/60 text-sm font-semibold">
            {currentIndex + 1}-{currentIndex + 2} / {allProjects.length}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm 
                       border-2 border-neutral-300 dark:border-neutral-700 
                       flex items-center justify-center 
                       hover:border-neutral-400 dark:hover:border-neutral-600 
                       hover:bg-neutral-50 dark:hover:bg-neutral-800 
                       hover:scale-105 active:scale-95
                       transition-all duration-300"
            style={{ boxShadow: "var(--shadow-elegant-md)" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};