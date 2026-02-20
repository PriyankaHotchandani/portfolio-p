"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
  const navItems = [{
    title: "Experience", href: "/#experience"
  },
  {
    title: "Recognition", href: "/#recognition"
  },
  {
    title: "Projects", href: "/#projects"
  },
  {
    title: "Publications", href: "/#publications"
  },]
  const [hovered, setHovered] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);
  const { scrollY } = useScroll();

  const [shadow, setShadow] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    document.documentElement.style.colorScheme = newIsDark ? 'dark' : 'light';
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  });
  return (
    <motion.nav
      animate={{
        boxShadow: shadow ? "var(--shadow-elegant-lg)" : "var(--shadow-elegant)",
        width: shadow ? "40%" : "90%",
        y: shadow ? 10 : 0
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="fixed inset-x-0 top-4 z-50 mx-auto max-w-6xl p-2.5 rounded-2xl flex items-center justify-between 
                   bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl backdrop-saturate-150
                   border border-neutral-200/50 dark:border-neutral-800/50
                   text-neutral-900 dark:text-neutral-100">
      <img
        src="/logo.svg"
        alt="Logo"
        className="h-7 w-7 dark:invert transition-transform hover:scale-110 duration-300"
      />
      <div className="flex items-center gap-1">
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, idx) => (
            <Link key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              href={item.href}
              className="px-3 py-1.5 text-sm relative text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200">
              {hovered === idx && <motion.span layoutId="hovered-span" className="h-full w-full rounded-lg absolute inset-0 bg-neutral-100/80 dark:bg-neutral-800/80" />}
              <span className="relative z-10 font-medium">{item.title}</span>
            </Link>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-lg hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 transition-all duration-200 group"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
          )}
        </button>
      </div>
    </motion.nav>
  )
}