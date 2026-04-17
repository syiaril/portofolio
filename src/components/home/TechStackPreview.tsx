"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TechIcon } from "@/components/TechIcon";
import { Button } from "@/components/ui/Button";

const primaryTech = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Go", category: "Language" },
];

export function TechStackPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader 
              title="Tech Stack" 
              subtitle="The core technologies I use to build robust and scalable systems."
              className="mb-0 max-w-xl"
            />
            <Button variant="outline" asChild className="hidden md:flex gap-2">
              <Link href="/skills">
                View all skills <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {primaryTech.map((tech, index) => (
            <ScrollReveal 
              key={tech.name} 
              delay={index * 0.05}
              className="glass p-6 rounded-2xl border-border/50 hover:bg-secondary/40 transition-colors flex flex-col items-center justify-center gap-4 group"
            >
              <div className="p-4 rounded-full bg-secondary/50 text-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                <TechIcon name={tech.name} className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="font-semibold">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
          <Button variant="outline" asChild className="gap-2 w-full">
            <Link href="/skills">
              View all skills <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
