import { Metadata } from "next";
import { Download } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About | Syaril",
  description: "Learn more about Muhamad Syiaril Islami, a passionate software engineer.",
};

export default function AboutPage() {
  return (
    <div className="pt-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeader 
          title="About Me" 
          subtitle="My journey, principles, and what drives me as a software engineer." 
        />
      </ScrollReveal>

      <div className="space-y-16">
        {/* The Story */}
        <section className="prose prose-lg dark:prose-invert max-w-3xl">
          <ScrollReveal delay={0.1}>
            <h3>The Story So Far</h3>
            <p>
              I didn't start coding because I liked computers; I started because I wanted to solve problems. 
              My journey began when I was trying to automate a tedious data entry task at a local business. 
              Writing that first script felt like magic—the ability to turn logic into a tool that saved 
              hours of human effort. Since then, I've been hooked on building systems.
            </p>
            <p>
              Currently, I focus on full-stack development with an emphasis on scalable backends and highly 
              interactive frontends. I believe that good engineering is about trade-offs, and there is no 
              "perfect" tech stack—only the right tools for the specific business context.
            </p>
            <p>
              When I'm not writing code or designing architectures, you can find me reading about system 
              design, experimenting with new UI frameworks, or contributing to open-source projects.
            </p>
          </ScrollReveal>
        </section>

        {/* Principles */}
        <section>
          <ScrollReveal delay={0.2}>
            <h3 className="text-2xl font-bold mb-6">Engineering Principles</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "User-Centric Design",
                text: "The best systems are invisible to the user. Performance and reliability are features."
              },
              {
                title: "Keep It Simple",
                text: "Complexity is a liability. I prefer simple, maintainable architectures over trendy tools."
              },
              {
                title: "Observable by Default",
                text: "If a system breaks, we should know exactly why. Logs, metrics, and tracing are not optional."
              },
              {
                title: "Iterative Delivery",
                text: "Deliver value early and often. Perfect is the enemy of shipped."
              }
            ].map((principle, idx) => (
              <ScrollReveal key={idx} delay={0.3 + (idx * 0.1)} className="glass p-6 rounded-xl">
                <h4 className="font-semibold text-lg text-primary mb-2">{principle.title}</h4>
                <p className="text-muted-foreground">{principle.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Experience / CV */}
        <section>
          <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row gap-6 items-center justify-between p-8 glass rounded-2xl border-primary/20">
            <div>
              <h3 className="text-2xl font-bold mb-2">Want the full professional history?</h3>
              <p className="text-muted-foreground">Download my resume for a detailed view of my experience and education.</p>
            </div>
            <Button size="lg" className="shrink-0 gap-2 font-medium">
              <Download className="w-4 h-4" /> Download CV
            </Button>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
