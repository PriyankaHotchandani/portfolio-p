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
      "description": "Spearheaded 0-to-1 digital transformations for global B2B and B2C brands. Acted as a fractional Product Manager to digitize legacy offline revenue streams, bridging the gap between non-technical founders and technical execution to launch high-conversion digital MVPs.",
      "highlights": [
        "Authored comprehensive Product Requirement Documents (PRDs) and directed full-stack architecture for a multi-geographical portfolio across Europe and India, generating an estimated $1.2M in aggregate client revenue.",
        "Architected custom digital platforms integrating advanced analytics, reducing time-to-market by 28% and driving a 42% average increase in user conversion rates for international product launches.",
        "Defined Go-To-Market (GTM) strategies and led technical pre-sales, translating complex business drivers into automated workflows that boosted client operational efficiency by 38%.",
        "Managed cross-functional stakeholder expectations, ensuring product scopes aligned with budget constraints and business timelines while delivering scalable technical roadmaps."
      ]
    },
    {
      "company": "JPMorgan Chase & Co.",
      "role": "Full Stack Developer, Corporate & Investment Banking Technology",
      "duration": "Aug 2023 – June 2025",
      "description": "Drove the end to end product execution for global Corporate & Investment Banking platforms. Acted as the crucial bridge between business stakeholders and technical deployment, ensuring complex engineering features delivered measurable operational value.",
      "highlights": [
        "Engineered and scaled Dealworks, the core enterprise CRM platform used by ~4,200 corporate bankers across NA, EMEA, and APAC, processing $80B+ in annual global transaction volume.",
        "Translated complex business requirements into scalable full-stack architectures utilizing ReactJS, Java, Spring Boot, Oracle DB, and PostgreSQL.",
        "Led full-stack optimization initiatives across database and application layers, reducing critical path latency by 22% and delivering ~30,000 hours of annual productivity gains for bankers.",
        "Collaborated with QA, design, and release teams to enhance API integrations and observability workflows (Splunk, Grafana, automated runbooks), cutting production blocker resolution time by 52% and achieving 99.99% platform uptime for global coverage and trading desks."
      ]
    },
    {
      "company": "Indian Space Research Organisation (Space Applications Center)",
      "role": "Technical Project Intern",
      "duration": "Aug 2022 – May 2023",
      "description": "Productized complex meteorological data into actionable, real-time alert systems for national weather monitoring. Prioritized operational constraints, system reliability, and end-user deployment over pure theoretical academic accuracy.",
      "highlights": [
        "Led product scoping and delivery of a crowdsourced nowcasting model under Dr. Bipasha Paul Shukla, integrating 5 years of geo-tagged social media data with IMD meteorological inputs into ISRO's MOSDAC operational platform.",
        "Drove cross-functional stakeholder alignment between SAC's data analytics, meteorology, and IT teams, accelerating operational decision-making speed by 33% and reducing manual data extraction workflows by 54%.",
        "Delivered a 27% improvement in extreme rainfall forecasting reliability (POD), enabling faster disaster preparedness response for government agencies across peninsular India; project cited as a flagship crowdsourced meteorology initiative at SAC.",
        "Built data-driven BI dashboards from the ground up, translating technical complexity into practical deployment use cases for internal meteorology teams."
      ]
    },
    {
      "company": "JPMorgan Chase & Co.",
      "role": "Software Engineering Intern, Global Technology Infrastructure",
      "duration": "Jun 2022 – Aug 2022",
      "description": "Engineered mission-critical search functionality for an internal enterprise search platform used by 2,300+ investment bankers to locate deal documents, client data, and market research across global repositories. Prioritized features using a user-impact matrix, ensuring 100% of delivered work aligned with top business pain points.",
      "highlights": [
        "Redesigned Elasticsearch indexing and Redis caching pipelines, increasing search precision from 68% to 92% (+35%) and cutting average query latency from 2.1 seconds to 0.8 seconds for 10,000+ daily queries; validated results via A/B testing across 150 beta users.",
        "Conducted cost-benefit analysis of cloud-vs-on-prem infrastructure options; selected AWS Elasticsearch Service, reducing annual infrastructure costs by $18,000 while maintaining 99.9% SLA compliance.",
        "Delivered 4 full-stack features (React UI + Java/Spring Boot API) within strict 2-week agile sprints, achieving 100% on-time delivery and zero critical (P1) deployment blockers across 8 consecutive sprints."
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