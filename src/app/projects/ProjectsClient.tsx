"use client";

import { useState } from "react";
import { projects, getAllCategories } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { m as motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ProjectsClient() {
  const { t } = useLanguage();
  const p = translations.projectsPage;
  const [activeCategory, setActiveCategory] = useState<string>(t(p.all));
  const categories = [t(p.all), ...getAllCategories()];

  const filteredProjects = activeCategory === t(p.all)
    ? projects 
    : projects.filter(proj => proj.category === activeCategory);

  return (
    <div className="pt-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeader 
          title={t(p.title)}
          subtitle={t(p.subtitle)}
        />
      </ScrollReveal>

      {/* Filter Bar */}
      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </ScrollReveal>

      {/* Project Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.slug}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-24 text-muted-foreground">
          <p>{t(p.empty)}</p>
        </div>
      )}
    </div>
  );
}
