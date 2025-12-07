"use client";
import { Container } from "@/components/container";
import { motion } from "motion/react";
import { useState } from "react";
import { Heart, Sparkles, Youtube, FileText, ArrowLeft } from "lucide-react";

export default function More() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);

  const socialWork = [
    {
      organization: "World Youth Council",
      description: "During the COVID-19 pandemic's second wave, built a real-time tracking system to verify Remdesivir availability across 50+ hospitals and suppliers in Mumbai. Coordinated urgent medical resource distribution by managing direct communication channels between patients' families, hospital administrators, and pharmaceutical distributors. Reduced average response time for critical medication inquiries from 6+ hours to under 30 minutes.",
      icon: Heart
    },
    {
      organization: "GirlUp Aashayein",
      description: "Led 13 digital empowerment initiatives reaching 200+ young women across tier 2 and tier 3 Indian cities as part of the UN Foundation's GirlUp chapter. Designed and executed virtual mentorship programs pairing college students with high school girls for career guidance. Built a sustainable engagement model using Airtable for participant tracking, Slack for community building, and Google Analytics to measure program impact—achieving 78% sustained participation rate over 6 months.",
      icon: Sparkles
    }
  ];

  const extras = [
    "Played guard on the college basketball team",
    "Copy-edited articles for the campus editorial board",
    "Served as School Head Girl, leading 800+ students",
    "Managed public relations and event coordination",
    "Wrote creative pieces and technical documentation",
    "Assistant directed short films and creative productions"
  ];

  const additionalContent = [
    {
      title: "Google DSC Eye of God - Demo",
      type: "YouTube",
      link: "https://www.youtube.com/watch?v=mmprcC3SH_A&t=1s",
      icon: Youtube
    },
    {
      title: "Google Developers Blog Feature",
      type: "Article",
      link: "https://developers.googleblog.com/en/meet-the-students-coding-their-way-to-a-better-world/",
      icon: FileText
    },
    {
      title: "Short Film",
      type: "YouTube",
      link: "https://www.youtube.com/watch?v=mKhFDlJqFcA",
      icon: Youtube
    },
    {
      title: "JP Morgan CFG Hackathon",
      type: "Document",
      link: "https://drive.google.com/file/d/1lGEf-3EHN3DelHFQ4ztAexWOBvc7ZjDz/view?usp=sharing",
      icon: FileText
    },
    {
      title: "Myntra HackerRamp",
      type: "Document",
      link: "https://drive.google.com/file/d/1y2IHa5ZlgS8WmWDy6Da2MOn-MUzprpS4/view?usp=drive_link",
      icon: FileText
    },
    {
      title: "Brain Tumor Detection & Classification",
      type: "Document",
      link: "https://drive.google.com/file/d/1T9gygByt9z0L5uBp-6xcZ5NTHFVVIPBW/view?usp=sharing",
      icon: FileText
    }
  ];

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen items-start justify-start md:pt-20 md:pb-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors group mb-8"
        >
          <span className="inline-block group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span>Back to home</span>
        </a>

        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">More About Me</h1>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-sm mb-12 max-w-lg">
          Beyond the professional work, community impact, creative pursuits, and additional projects.
        </p>

        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-8">Social Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {socialWork.map((work, idx) => {
              const Icon = work.icon;
              return (
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
                    className="h-full p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold">
                        {work.organization}
                      </h3>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">
                      {work.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Beyond the Code</h2>
          <p className="text-secondary text-sm mb-6 max-w-2xl">
            From captaining college basketball to editing campus publications, from leading a school of 800+ students as Head Girl to directing creative productions, these roles taught me how to lead teams, communicate across audiences, and juggle competing priorities long before I wrote my first line of production code.
          </p>
          <div className="flex flex-wrap gap-3">
            {extras.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: idx * 0.05,
                  ease: "easeOut"
                }}
                onMouseEnter={() => setHoveredBadge(idx)}
                onMouseLeave={() => setHoveredBadge(null)}
              >
                <motion.div
                  animate={{
                    boxShadow: hoveredBadge === idx 
                      ? "var(--shadow-tasteful-lg)" 
                      : "var(--shadow-tasteful)"
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "linear"
                  }}
                  className="px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-default"
                >
                  • {item}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Featured Work</h2>
          <p className="text-secondary text-sm mb-6 max-w-2xl">
            Video demos of working prototypes, press features from Google's engineering blog, hackathon pitch decks that won over judges, and technical documentation showing how the systems actually work. This is what shipped products look like in practice.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalContent.map((content, idx) => {
              const Icon = content.icon;
              return (
                <motion.a
                  key={idx}
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: idx * 0.05,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    boxShadow: "var(--shadow-tasteful-lg)"
                  }}
                  className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group"
                  style={{ boxShadow: "var(--shadow-tasteful)" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                    </div>
                    <span className="text-xs font-medium text-secondary">
                      {content.type}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold  transition-colors">
                    {content.title}
                  </h3>
                </motion.a>
              );
            })}
          </div>
        </section>
      </Container>
    </div>
  );
}