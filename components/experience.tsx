"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Experience = () => {
  const workExperiences = [
    {
      "company": "JPMorgan Chase & Co.",
      "role": "Software Engineer",
      "duration": "June 2023 – June 2025",
      "description": "Owned full-cycle delivery for platforms supporting Corporate & Investment Banking. Translated complex business requirements from product owners and bankers into technical decisions, balancing speed, risk, and cost. Drove performance and reliability upgrades that reduced operational risk and increased system throughput. Coordinated across engineering, product, QA, and release to ensure predictable delivery within agile sprints. Measured success in business value delivered rather than code volume.",
      "highlights": [
        "Owned full-cycle delivery for Corporate & Investment Banking platforms",
        "Translated business requirements into technical decisions balancing speed, risk, and cost",
        "Drove performance upgrades reducing operational risk and increasing throughput",
        "Coordinated cross-functionally across engineering, product, QA, and release teams",
        "Delivered predictable outcomes within agile sprints, measuring business value over code volume"
      ]
    },
    {
      "company": "Indian Space Research Organisation (ISRO)",
      "role": "Tech Research Intern",
      "duration": "Aug 2022 – May 2023",
      "description": "Developed real-time rainfall nowcasting models to support meteorological alerts and warning systems. Evaluated model choices based on reliability and operational constraints rather than theoretical accuracy. Preprocessed radar imagery and crowdsourced weather data, automated the live deployment pipeline into MOSDAC, and contributed to a research publication grounded in operational outcomes instead of academic abstraction.",
      "highlights": [
        "Developed real-time rainfall nowcasting models for meteorological alert systems",
        "Evaluated models based on operational reliability over theoretical accuracy",
        "Preprocessed radar imagery and crowdsourced weather data at scale",
        "Automated live deployment pipeline into MOSDAC",
        "Contributed to research publication focused on operational outcomes"
      ]
    },
    {
      "company": "JPMorgan Chase & Co.",
      "role": "Software Engineering Intern",
      "duration": "Jun 2022 – July 2022",
      "description": "Engineered both frontend and backend modules for an internal search platform used by global banking teams. Improved performance and data-retrieval accuracy by redesigning indexing and caching logic with a cost-benefit lens rather than a purely technical one. Worked in 2-week sprints, collaborating with senior engineers to debug, refactor, and deploy features without blocking downstream workflows.",
      "highlights": [
        "Engineered full-stack modules for internal search platform used by global banking teams",
        "Improved performance and data-retrieval accuracy through indexing and caching redesign",
        "Applied cost-benefit analysis to technical decisions",
        "Delivered features in 2-week sprints without blocking downstream workflows",
        "Collaborated with senior engineers on debugging, refactoring, and deployment"
      ]
    }
  ];

  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    if (expandedCard === idx) {
      setExpandedCard(null);
    } else {
      setExpandedCard(idx);
    }
  };

  return (
    <div id="experience" className='pt-12'>
            <h2 className="text-xl md:text-2xl font-semibold mb-8">Experience</h2>
      <p className='text-secondary max-w-lg text-sm md:text-sm mb-6'>
        I turn ambiguity into shipped products, bridging engineering execution with strategic impact.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 items-start">
        {workExperiences.map((work, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: idx * 0.08,
              ease: "easeOut"
            }}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: hoveredCard === idx 
                  ? "var(--shadow-tasteful-lg)" 
                  : "var(--shadow-tasteful)"
              }}
              transition={{
                duration: 0.2,
                ease: "linear"
              }}
              className="relative z-10 h-full p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex flex-col gap-1 mb-3">
                <h2 className="text-base md:text-lg font-semibold">
                  {work.role}
                </h2>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {work.company}
                </p>
                <p className="text-xs text-secondary">
                  {work.duration}
                </p>
              </div>
              
              <button
                onClick={() => toggleExpand(idx)}
                className="w-full flex items-center justify-between text-left text-xs font-medium mb-3 text-secondary hover:text-primary transition-colors"
              >
                <span>{expandedCard === idx ? 'Hide Details' : 'View Details'}</span>
                <motion.div
                  animate={{ rotate: expandedCard === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedCard === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs mb-3 leading-relaxed text-secondary">
                      {work.description}
                    </p>
                    
                    <ul className="space-y-1.5">
                      {work.highlights.map((point, pidx) => (
                        <motion.li
                          key={pidx}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: pidx * 0.03
                          }}
                          className="flex items-start gap-2 text-xs text-secondary"
                        >
                          <span className="text-neutral-400 dark:text-neutral-600 mt-0.5">•</span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};