import { Container } from "@/components/container";
import { Inter } from "next/font/google";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Recognition } from "@/components/recognition";
import { Publications } from "@/components/publications";

export default function Home() {
  return (
    <div id="about" className="flex min-h-screen items-start justify-start">
      <Container className=" min-h-[200vh] items-start justify-start md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">Priyanka Hotchandani</h1>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-sm pt-4 max-w-lg">
Product-minded engineer with CIB experience at JPMorgan, applying a technical foundation to solve business problems through data, systems thinking, and execution.      
        </p>
        
        <Experience />
        <Recognition/>
        <Projects />
        <Publications />

        <div className="mt-12 mb-8">
          <a
            href="/more"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors group"
          >
            <span>Know more</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </Container>
    </div>
  
  );
}