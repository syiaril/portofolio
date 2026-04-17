import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TechIcon } from "@/components/TechIcon";
import { getSkillsByCategory } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills | Syaril",
  description: "Technical skills and expertise.",
};

export default function SkillsPage() {
  const skillsByCategory = getSkillsByCategory();
  const categories = Object.keys(skillsByCategory);

  return (
    <div className="pt-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeader 
          title="Technical Skills" 
          subtitle="A comprehensive overview of my technical expertise, categorized by domain. I constantly learn and adapt to new technologies as needed." 
          className="max-w-3xl"
        />
      </ScrollReveal>

      <div className="mt-16 space-y-24">
        {categories.map((category, catIdx) => (
          <div key={category} className="scroll-mt-24">
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-primary">/</span> {category}
              </h3>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsByCategory[category].map((skill, skillIdx) => (
                <ScrollReveal 
                  key={skill.name} 
                  delay={0.1 + (skillIdx * 0.05)}
                  className="glass p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/80 rounded-lg group-hover:text-primary transition-colors">
                        <TechIcon name={skill.name} className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                    </div>
                    {/* Proficiency indicator */}
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((dot) => {
                        const getActiveLevel = () => {
                          if (skill.level === "Beginner") return 1;
                          if (skill.level === "Intermediate") return 2;
                          if (skill.level === "Advanced") return 3;
                          return 4; // Expert
                        };
                        const isActive = dot <= getActiveLevel();
                        return (
                          <div 
                            key={dot}
                            className={`w-2 h-2 rounded-full ${isActive ? 'bg-primary' : 'bg-muted'}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                  {skill.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
