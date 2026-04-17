import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { projects, getProjectBySlug } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TechIcon } from "@/components/TechIcon";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pb-24">
      {/* Hero Header */}
      <header className="relative pt-8 pb-16 bg-secondary/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button variant="ghost" asChild className="mb-8 -ml-4 gap-2 text-muted-foreground hover:text-foreground">
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4" /> Back to projects
            </Link>
          </Button>
          
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary">{project.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center">{project.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button asChild className="gap-2 rounded-full">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="w-4 h-4" /> Visit Live Site
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild className="gap-2 rounded-full">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <GithubIcon className="w-4 h-4" /> View Source Code
                  </a>
                </Button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Case Study */}
          <div className="md:col-span-2 space-y-16">
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div className="prose dark:prose-invert prose-lg max-w-none text-muted-foreground">
                  <p>{project.longDescription}</p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <section>
                <h2 className="text-2xl font-bold mb-6">Challenges</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex gap-4 p-4 glass rounded-xl border border-red-500/10">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-muted-foreground pt-1">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <section>
                <h2 className="text-2xl font-bold mb-4">Architecture & Strategy</h2>
                <div className="p-6 bg-secondary/30 rounded-2xl border border-border/50 mb-6 font-mono text-sm text-center text-muted-foreground">
                  [ Architecture Diagram Placeholder ]
                </div>
                <div className="prose dark:prose-invert prose-lg max-w-none text-muted-foreground">
                  <p>{project.architecture}</p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <section>
                <h2 className="text-2xl font-bold mb-6">Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="p-6 glass rounded-xl border-l-4 border-l-emerald-500">
                      <p className="text-foreground font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
            
            <ScrollReveal delay={0.5}>
              <section>
                <h2 className="text-2xl font-bold mb-6">Lessons Learned</h2>
                <ul className="space-y-3 list-disc list-inside text-muted-foreground text-lg">
                  {project.lessons.map((lesson, idx) => (
                    <li key={idx}>{lesson}</li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-8">
            <ScrollReveal delay={0.2}>
              <div className="sticky top-24 glass p-6 rounded-2xl border-border/50">
                <h3 className="font-bold text-lg mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <div key={tech} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/50 bg-secondary/20 text-sm hover:bg-secondary/40 transition-colors">
                      <TechIcon name={tech} className="w-4 h-4 text-primary" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </article>
  );
}
