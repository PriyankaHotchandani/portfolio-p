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
    <div className="flex min-h-screen items-start justify-start relative overflow-hidden">
      {/* Floating decorative elements - Dark mode */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-400/[0.07] to-purple-400/[0.05] rounded-full blur-3xl opacity-0 dark:opacity-100 transition-opacity" />
      <div className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/[0.06] to-orange-400/[0.05] rounded-full blur-3xl opacity-0 dark:opacity-100 transition-opacity" />
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-amber-400/[0.05] to-orange-400/[0.04] rounded-full blur-3xl opacity-0 dark:opacity-100 transition-opacity" />

      {/* Floating decorative elements - Light mode */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/20 rounded-full blur-3xl opacity-100 dark:opacity-0 transition-opacity" />
      <div className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/25 to-pink-200/20 rounded-full blur-3xl opacity-100 dark:opacity-0 transition-opacity" />
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-amber-200/20 to-orange-200/15 rounded-full blur-3xl opacity-100 dark:opacity-0 transition-opacity" />

      <Container className="min-h-screen items-start justify-start md:pt-24 md:pb-12 pt-20 relative z-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300 
                     hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 
                     px-4 py-2 rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 group mb-10"
        >
          <span className="inline-block group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          <span>Back to Home</span>
        </a>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent">More About Me</h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-16 max-w-5xl leading-relaxed">
          Beyond the professional work, community impact, creative pursuits, and additional projects.
        </p>

        <section className="mb-20">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent">Social Work</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
          </div>
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
                        ? "var(--shadow-elegant-lg)"
                        : "var(--shadow-elegant-md)",
                      scale: hoveredCard === idx ? 1.02 : 1
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="h-full p-6 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm 
                               border border-neutral-200/60 dark:border-neutral-800/60
                               hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0 border border-neutral-200 dark:border-neutral-700">
                        <Icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-50">
                        {work.organization}
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {work.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent">Beyond the Code</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8 leading-relaxed text-justify">
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
                      ? "var(--shadow-elegant-md)"
                      : "var(--shadow-elegant)",
                    scale: hoveredBadge === idx ? 1.05 : 1
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm 
                             border border-neutral-200/60 dark:border-neutral-800/60 
                             hover:border-neutral-300 dark:hover:border-neutral-700
                             text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-default transition-colors"
                >
                  • {item}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent">Featured Work</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8 leading-relaxed text-justify">
            Video demos of working prototypes, press features from Google's engineering blog, hackathon pitch decks that won over judges, and technical documentation showing how the systems actually work. This is what shipped products look like in practice.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    boxShadow: "var(--shadow-elegant-lg)",
                    scale: 1.02
                  }}
                  className="p-6 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm 
                             border border-neutral-200/60 dark:border-neutral-800/60 
                             hover:border-neutral-300 dark:hover:border-neutral-700 group"
                  style={{ boxShadow: "var(--shadow-elegant-md)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-200 dark:border-neutral-700">
                      <Icon className="w-4 h-4 text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-500 uppercase tracking-wider">
                      {content.type}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-50 transition-colors">
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