"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { FileText, ExternalLink } from "lucide-react";

export const Publications = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const publications = [
    {
      type: "Conference Article",
      status: "Peer-reviewed Published",
      title: "Smartphone Based Tactile Feedback System Providing Navigation and Obstacle Avoidance to the Blind and Visually Impaired",
      venue: "2022 5th International Conference on Advances in Science and Technology (IEEE - ICAST)",
      link: "https://ieeexplore.ieee.org/abstract/document/10039535"
    },
    {
      type: "Journal Article",
      status: "Peer-reviewed Published",
      title: "Crowdsourcing Approaches for Weather Nowcasting: A Review",
      venue: "International Journal of Research in Engineering and Science (IJRES)",
      link: "https://www.ijres.org/papers/Volume-10/Issue-12/1012110115.pdf"
    }
  ];

  return (
    <div id="publications" className='pt-20 pb-8 relative'>
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent">Publications</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {publications.map((pub, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.1,
              ease: "easeOut"
            }}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative group"
          >
            <motion.a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
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
              className="block h-full p-6 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm 
                         border border-neutral-200/60 dark:border-neutral-800/60 
                         group-hover:border-neutral-400 dark:group-hover:border-neutral-600 relative z-10 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
                  <FileText className="w-5 h-5 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-500 block uppercase tracking-wider">
                        {pub.type}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 inline-block mt-2 border border-neutral-200 dark:border-neutral-700">
                        {pub.status}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-all duration-300 group-hover:scale-110 shrink-0" />
                  </div>
                </div>
              </div>

              <h3 className="text-base font-bold mb-3 leading-snug text-neutral-900 dark:text-neutral-50 transition-colors">
                {pub.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {pub.venue}
              </p>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};