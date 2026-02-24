import { Container } from "@/components/container";
import { Inter } from "next/font/google";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Recognition } from "@/components/recognition";
import { Publications } from "@/components/publications";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div id="about" className="flex min-h-screen items-start justify-start relative overflow-hidden">
      {/* Floating decorative elements - Dark mode */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-400/[0.07] to-purple-400/[0.05] rounded-full blur-3xl opacity-0 dark:opacity-100 transition-opacity" />
      <div className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/[0.06] to-orange-400/[0.05] rounded-full blur-3xl opacity-0 dark:opacity-100 transition-opacity" />
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-amber-400/[0.05] to-orange-400/[0.04] rounded-full blur-3xl opacity-0 dark:opacity-100 transition-opacity" />

      {/* Floating decorative elements - Light mode */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/20 rounded-full blur-3xl opacity-100 dark:opacity-0 transition-opacity" />
      <div className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/25 to-pink-200/20 rounded-full blur-3xl opacity-100 dark:opacity-0 transition-opacity" />
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-amber-200/20 to-orange-200/15 rounded-full blur-3xl opacity-100 dark:opacity-0 transition-opacity" />

      <Container className="min-h-[200vh] items-start justify-start md:pt-28 md:pb-12 pt-32 relative z-10">
        <div className="mb-16 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 
                             bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-neutral-50 dark:to-neutral-300 
                             bg-clip-text text-transparent leading-tight">
                Priyanka Hotchandani
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed md:text-justify">
                Product-minded engineer with CIB experience at JPMorgan, applying a technical foundation to solve business problems through data, systems thinking, and execution.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/priyanka-hotchandani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl 
                         bg-[#0A66C2] hover:bg-[#0858A8]
                         text-white font-semibold 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
                         border-2 border-[#0A66C2] hover:border-[#0858A8]"
                >
                  <Linkedin className="w-5 h-5 text-white fill-white stroke-none" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/PriyankaHotchandani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl 
                         bg-neutral-700 hover:bg-neutral-600 dark:bg-neutral-600 dark:hover:bg-neutral-500
                         font-semibold 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neutral-500/25
                         border-2 border-neutral-600 dark:border-neutral-500 hover:border-neutral-500 dark:hover:border-neutral-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" className="w-5 h-5 fill-white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                  </svg>
                  <span className="text-white">GitHub</span>
                </a>
              </div>
            </div>

            {/* Profile image */}
            <div className="flex-shrink-0">
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-neutral-200 dark:ring-neutral-700 shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Priyanka Hotchandani"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full scale-145"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <Experience />
        <Recognition />
        <Projects />
        <Publications />

        <div className="mt-16 mb-8 flex justify-center">
          <a
            href="/more"
            className="group inline-flex items-center gap-2 text-base font-semibold 
                       px-8 py-4 rounded-xl
                       bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600
                       text-white
                       transition-all duration-300 
                       hover:scale-105 hover:shadow-xl hover:shadow-neutral-500/25
                       border-2 border-neutral-700 dark:border-neutral-600 hover:border-neutral-800 dark:hover:border-neutral-500"
          >
            <span>Know More About Me</span>
            <span className="inline-block group-hover:translate-x-2 transition-transform duration-300 text-lg">
              →
            </span>
          </a>
        </div>
      </Container>
    </div>

  );
}