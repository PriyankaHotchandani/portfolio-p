"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Experience = () => {
  const workExperiences = [
    {
      "company": "The Head Story",
      "role": "Technical Product Consultant",
      "duration": "Aug 2025 – Present",
      "description": "Lead end-to-end product strategy and delivery for a multi-geographical client portfolio spanning Retail, Healthcare, and Media across Europe and India. Partner directly with leadership teams to convert business goals into shipped digital products and measurable commercial outcomes.",
      "highlights": [
        "Directed product strategy, delivery planning, and execution governance across international client accounts, generating EUR 750K in aggregate client revenue through digital transformation initiatives.",
        "Led pre-sales discovery, requirements scoping, and contract negotiations to secure enterprise engagements by translating complex business drivers into automation-first workflow solutions.",
        "Defined product roadmaps and go-to-market strategies for international platform launches, driving an average 42% increase in user conversion across digital channels.",
        "Partnered with cross-functional teams across engineering, design, and business operations to prioritize value-driven features and improve client operational efficiency by 35%."
      ]
    },
    {
      "company": "JPMorgan Chase & Co.",
      "role": "Full-Stack Developer, CIB Technology",
      "duration": "Aug 2023 – June 2025",
      "description": "Drove product and engineering delivery for Dealworks, JPMorgan's core Corporate & Investment Banking platform. Collaborated with front-office, compliance, and engineering stakeholders to deliver global workflows that balanced regulatory rigor with business velocity.",
      "highlights": [
        "Led requirements analysis and delivery planning for Dealworks, used by 3,000+ corporate bankers across NA, EMEA, and APAC and supporting USD 50B in annual global deal volume.",
        "Owned end-to-end delivery of Dodd-Frank regulatory capabilities, translating change requests into detailed system requirements and coordinating rollout with front-office stakeholders.",
        "Delivered critical workflows in the Legal & Compliance (LnC) module to ensure deal-level adherence to internal controls and external regulatory frameworks across regions.",
        "Bridged product intent and technical execution by aligning business, compliance, and engineering teams on release scope, acceptance criteria, and production readiness."
      ]
    },
    {
      "company": "Indian Space Research Organisation (Space Applications Centre)",
      "role": "Project Intern",
      "duration": "Aug 2022 – May 2023",
      "description": "Led product scoping and delivery for a real-time nowcasting platform at the Space Applications Centre, converting research-grade meteorological models into operational alerting workflows for public-sector decision makers.",
      "highlights": [
        "Scoped requirements under Dr. Bipasha Paul Shukla and delivered a severe-rainfall nowcasting platform that issues alerts for the next 60 minutes across 6 national cities.",
        "Owned the data strategy roadmap, orchestrating automated ingestion of IMD radar imagery and 5 years of crowdsourced social media data for robust event classification pipelines.",
        "Delivered 98.18% predictive accuracy for meteorological event classification by aligning data engineering, model validation, and alert-threshold design.",
        "Integrated actionable alert frameworks into ISRO's MOSDAC ecosystem, accelerating real-time disaster preparedness for government agencies and emergency responders."
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
    <div id="experience" className='pt-16 relative'>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent">Experience</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>
      <p className='text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-10 leading-relaxed'>
        I build products at the intersection of strategy, delivery, and measurable business impact.
      </p>

      <div className="grid md:grid-cols-2 gap-6 items-stretch">
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
            className="relative group h-full"
          >
            <motion.div
              animate={{
                boxShadow: hoveredCard === idx
                  ? "var(--shadow-elegant-lg)"
                  : "var(--shadow-elegant-md)",
                scale: hoveredCard === idx ? 1.02 : 1
              }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className={`relative z-10 flex flex-col p-4 rounded-2xl bg-white/80 dark:bg-neutral-900/80 
                         backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-800/60
                         group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors ${expandedCard === idx ? "h-auto" : "h-[220px]"}`}
            >
              <div className="flex flex-col gap-1.5 mb-2 h-[96px]">
                <h2 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-50 line-clamp-2">
                  {work.role}
                </h2>
                <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 line-clamp-2">
                  {work.company}
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-500 font-medium">
                  {work.duration}
                </p>
              </div>

              <button
                onClick={() => toggleExpand(idx)}
                className={`w-full flex items-center justify-between text-left text-sm font-semibold mt-auto 
                          text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 
                          transition-all duration-200 group ${expandedCard === idx ? "mb-4" : "mb-0"}`}
              >
                <span>{expandedCard === idx ? 'Hide Details' : 'View Details'}</span>
                <motion.div
                  animate={{ rotate: expandedCard === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="group-hover:scale-110 transition-transform"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedCard === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {work.description}
                    </p>

                    <ul className="space-y-2">
                      {work.highlights.map((point, pidx) => (
                        <motion.li
                          key={pidx}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: pidx * 0.05
                          }}
                          className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="text-neutral-400 dark:text-neutral-600 mt-1 font-bold">•</span>
                          <span className="leading-relaxed">{point}</span>
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