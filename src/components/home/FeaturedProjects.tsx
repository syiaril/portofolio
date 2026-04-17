"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader 
              title="Featured Work" 
              subtitle="Selected projects that showcase my problem-solving and architectural skills."
              className="mb-0"
            />
            <Button variant="ghost" asChild className="hidden md:flex gap-2 text-primary group font-medium">
              <Link href="/projects">
                View all projects 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Button variant="outline" asChild className="gap-2">
            <Link href="/projects">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
