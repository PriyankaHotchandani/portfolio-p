"use client";
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Award, Users, Code } from "lucide-react";

export const Recognition = () => {
  const recognitions = [
     {
      title: "J.P. Morgan Code for Good",
      subtitle: "Presenting Participant",
      icon: Code,
      description: "Built a fellowship portal for The Laali Project, streamlining mentorship and workshop coordination for menstrual health awareness.",
      achievement: "National Competition",
      participants: "Presenting Team",
      className: "absolute top-20 right-[18%] rotate-[-3deg]",
    },
    {
      title: "Myntra HackerRamp",
      subtitle: "WeForShe Pre-Finalist",
      icon: Users,
      description: "Top teams nationwide out of 6000+ entries. Built V-SHOP, a collaborative shopping platform that tapped into how people actually shop with friends.",
      achievement: "Top Nationwide",
      participants: "6000+ entries",
      className: "absolute top-32 left-[38%] rotate-[5deg]",
    },
    {
      title: "Google Solution Challenge",
      subtitle: "Global Winner",
      icon: Award,
      description: "Built \"Eye of God,\" a navigation system for visually impaired users. Ranked 1st globally out of 820+ teams, leading to a conversation with Jeff Dean and outreach from Google's accelerator group.",
      achievement: "1st Place Globally",
      participants: "820+ teams",
      className: "absolute top-10 left-[15%] rotate-[-8deg]",
    },
    
   
  ];

  return (
    <div id="recognition" className='pt-16 pb-8'>
      <h2 className="text-xl md:text-2xl font-semibold mb-8">Recognition</h2>
      
      <DraggableCardContainer className="relative flex min-h-[600px] w-full items-center justify-center overflow-visible">
        <p className="absolute top-1/2 mx-auto max-w-2xl -translate-y-1/2 text-center text-xl md:text-2xl font-semibold text-neutral-300 dark:text-neutral-700 px-4">
          Turning ideas into impact, one challenge at a time
        </p>
        
        {recognitions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <DraggableCardBody key={idx} className={item.className}>
              <div className="pointer-events-none relative z-10 w-72 md:w-80 bg-white dark:bg-neutral-900 border-8 border-white dark:border-neutral-800 shadow-2xl">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {item.achievement}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                      {item.participants}
                    </span>
                  </div>
                  
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="h-2 bg-neutral-100 dark:bg-neutral-800"></div>
              </div>
            </DraggableCardBody>
          );
        })}
      </DraggableCardContainer>
    </div>
  );
};