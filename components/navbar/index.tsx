"use client";
import {motion, useMotionValueEvent, useScroll} from "motion/react"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
const navItems = [ {  
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
const {scrollY} = useScroll();

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
            boxShadow: shadow ? "var(--shadow-tasteful)" : "none",
            width: shadow? "40%" : "90%",
            y: shadow ? 10 : 0
        }}
        transition={{
            duration: 0.3,
            ease: "linear",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto max-w-4xl p-2 rounded-full flex items-center justify-between bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
            <img 
                src="/logo.svg" 
                alt="Logo" 
                className="h-7 w-7 dark:invert" 
              />
             <div className="flex items-center gap-2">
                {navItems.map((item, idx) => (
                    <Link key={idx}
                    onMouseEnter={()=>setHovered(idx)}
                    onMouseLeave={()=>setHovered(null)}
                     href={item.href} 
                    className="px-2 py-1 text-sm relative text-neutral-900 dark:text-neutral-100">
                        {hovered === idx && <motion.span layoutId="hovered-span" className="h-full w-full rounded-md absolute inset-0 bg-neutral-100 dark:bg-neutral-800"/>}
                        <span className="relative z-10">{item.title}</span>
                    </Link>
                ))}
                
                <button
                  onClick={toggleTheme}
                  className="ml-2 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? (
                    <Sun className="w-4 h-4 text-yellow-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-slate-700" />
                  )}
                </button>
             </div>
        </motion.nav>
)
}