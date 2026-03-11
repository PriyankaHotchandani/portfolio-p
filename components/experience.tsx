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
      "description": "Spearheaded 0 to 1 digital transformations for global B2B and B2C brands. Acted as a fractional Product Manager to digitize legacy offline revenue streams, bridging the gap between non technical founders and technical execution to launch high conversion digital MVPs.",
      "highlights": [
        "Authored comprehensive Product Requirement Documents (PRDs) and directed full stack architecture for a multi geographical portfolio across Europe and India, generating an estimated $1.2M in aggregate client revenue.",
        "Architected custom digital platforms integrating advanced analytics, reducing time to market by 28% and driving a 42% average increase in user conversion rates for international product launches.",
        "Defined Go To Market (GTM) strategies and led technical pre sales, translating complex business drivers into automated workflows that boosted client operational efficiency by 38%.",
        "Managed cross functional stakeholder expectations, ensuring product scopes aligned with budget constraints and business timelines while delivering scalable technical roadmaps."
      ]
    },
    {
      "company": "JPMorgan Chase & Co.",
      "role": "Full Stack Developer, CIB",
      "duration": "Aug 2023 – June 2025",
      "description": "Drove the end to end product execution for global Corporate & Investment Banking platforms. Acted as the crucial bridge between business stakeholders and technical deployment, ensuring complex engineering features delivered measurable operational value.",
      "highlights": [
        "Engineered and scaled Dealworks, a core enterprise CRM platform utilized by 5,000+ corporate bankers across NA, EMEA, and APAC, facilitating the processing of $50B+ in annual global transaction volume.",
        "Translated complex business requirements into scalable full stack architectures utilizing ReactJS, Java, SpringBoot, Oracle DB, and PostgreSQL.",
        "Optimized workflow automation pipelines and database queries, slashing system latency by 22% and saving an estimated 11,500+ hours of manual processing time annually.",
        "Collaborated with QA, design, and release teams to streamline system monitoring workflows with Splunk and Grafana, reducing production blocker resolution time by 46% and ensuring 99.99% platform uptime."
      ]
    },
    {
      "company": "Indian Space Research Organisation (ISRO)",
      "role": "Technical Project Intern",
      "duration": "Aug 2022 – May 2023",
      "description": "Productized complex meteorological data into actionable, real time alert systems for national weather monitoring. Prioritized operational constraints, system reliability, and end user deployment over pure theoretical academic accuracy.",
      "highlights": [
        "Managed the deployment pipeline into the MOSDAC system, processing IMD meteorological inputs and 5 years of crowdsourced Twitter data to increase forecasting reliability by an estimated 27%.",
        "Built data driven BI dashboards and nowcasting models from the ground up, improving operational decision making speed by 33% for internal data analytics teams.",
        "Conducted rigorous technical scoping to successfully deploy 3 forecasting tools, which reduced manual data extraction efforts by 54%.",
        "Co authored AI driven weather prediction research, successfully translating technical complexity into practical, operational use cases for meteorologists."
      ]
    },
    {
      "company": "JPMorgan Chase & Co.",
      "role": "Software Engineering Intern",
      "duration": "Jun 2022 – Aug 2022",
      "description": "Engineered critical modules for an enterprise-wide search platform, utilizing a product mindset to prioritize features based on user impact, global team efficiency, and system performance constraints.",
      "highlights": [
        "Redesigned indexing and caching logic for an internal global search tool, directly improving data-retrieval accuracy by 35%.",
        "Applied a cost-benefit framework to technical decisions, ensuring infrastructure upgrades aligned with broader business efficiency goals.",
        "Delivered full-stack features within strict agile sprints, optimizing downstream workflows for banking teams without causing deployment blockers."
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
        I turn ambiguity into shipped products, bridging engineering execution with strategic impact.
      </p>

      <div className="grid md:grid-cols-2 gap-6 items-start">
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
            className="relative group"
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
              className="relative z-10 h-full p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 
                         backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-800/60
                         group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors"
            >
              <div className="flex flex-col gap-1.5 mb-4">
                <h2 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  {work.role}
                </h2>
                <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  {work.company}
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-500 font-medium">
                  {work.duration}
                </p>
              </div>

              <button
                onClick={() => toggleExpand(idx)}
                className="w-full flex items-center justify-between text-left text-sm font-semibold mb-4 
                          text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 
                          transition-all duration-200 group"
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