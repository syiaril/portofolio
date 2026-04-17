import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/SocialIcons"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Project } from "@/data/projects"
import { TechIcon } from "@/components/TechIcon"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden group border-border/50 hover:border-border transition-colors duration-300">
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-muted">
        {project.imageUrl && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
        )}
        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end bg-gradient-to-t from-background to-transparent">
          <Badge className="w-fit mb-2 shadow-sm" variant="secondary">{project.category}</Badge>
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
      </div>
      
      <CardHeader className="py-4 pb-2">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.description}
        </p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <div 
              key={tech} 
              title={tech}
              className="p-1.5 rounded-md border border-border/50 bg-secondary/30 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <TechIcon name={tech} className="w-4 h-4" />
            </div>
          ))}
          {project.techStack.length > 6 && (
            <div className="p-1.5 rounded-md border border-border/50 bg-secondary/30 text-xs text-muted-foreground flex items-center justify-center font-medium">
              +{project.techStack.length - 6}
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 pb-6 flex items-center justify-between border-t border-border/50 mt-auto">
        <Link 
          href={`/projects/${project.slug}`} 
          className="text-sm font-medium hover:text-primary transition-colors hover:underline hover:underline-offset-4"
        >
          Read Case Study
        </Link>
        <div className="flex gap-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
