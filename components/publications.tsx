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
    <div id="publications" className='pt-16 pb-8'>
      <h2 className="text-xl md:text-2xl font-semibold mb-8">Publications</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
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
          >
            <motion.a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                boxShadow: hoveredCard === idx 
                  ? "var(--shadow-tasteful-lg)" 
                  : "var(--shadow-tasteful)"
              }}
              transition={{
                duration: 0.2,
                ease: "linear"
              }}
              className="block h-full p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-200" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-medium text-secondary block">
                        {pub.type}
                      </span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 inline-block mt-1">
                        {pub.status}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-secondary group-hover:text-primary transition-colors shrink-0" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-base font-semibold mb-3 leading-snug  transition-colors">
                {pub.title}
              </h3>
              
              <p className="text-xs text-secondary leading-relaxed">
                {pub.venue}
              </p>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};