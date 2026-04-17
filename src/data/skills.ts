export interface Skill {
  name: string;
  icon?: string;
  category: "Languages" | "Frontend" | "Backend" | "Database" | "DevOps & Tools" | "Architecture";
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description?: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages", level: "Advanced", description: "Static typing, generics, advanced utility types." },
  { name: "JavaScript (ES6+)", category: "Languages", level: "Expert", description: "Deep understanding of the event loop, closures, and async programming." },
  { name: "Python", category: "Languages", level: "Intermediate", description: "Data processing, FastAPI, scripting." },
  { name: "Go", category: "Languages", level: "Intermediate", description: "Concurrency, microservices, CLI tools." },
  { name: "SQL", category: "Languages", level: "Advanced", description: "Complex queries, window functions, optimization." },
  
  // Frontend
  { name: "React", category: "Frontend", level: "Expert", description: "Hooks, context, performance optimization, internals." },
  { name: "Next.js", category: "Frontend", level: "Advanced", description: "App Router, SSR, SSG, API routes, middleware." },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced", description: "Utility-first design, custom configurations." },
  { name: "Framer Motion", category: "Frontend", level: "Intermediate", description: "Complex page transitions, gesture animations." },
  { name: "HTML/CSS", category: "Frontend", level: "Expert", description: "Semantic markup, CSS Grid/Flexbox, accessibility." },
  
  // Backend
  { name: "Node.js", category: "Backend", level: "Advanced", description: "Express, robust API design, streams." },
  { name: "REST APIs", category: "Backend", level: "Expert", description: "Best practices, versioning, hypermedia." },
  { name: "GraphQL", category: "Backend", level: "Intermediate", description: "Schema design, Apollo Server/Client, dataloaders." },
  { name: "WebSockets", category: "Backend", level: "Advanced", description: "Real-time communication, Socket.io." },
  
  // Databases
  { name: "PostgreSQL", category: "Database", level: "Advanced", description: "Relational modeling, indexing, transactions." },
  { name: "MongoDB", category: "Database", level: "Intermediate", description: "Document modeling, aggregation pipeline." },
  { name: "Redis", category: "Database", level: "Intermediate", description: "Caching strategies, pub/sub, session management." },
  
  // DevOps & Tools
  { name: "Git", category: "DevOps & Tools", level: "Advanced", description: "Branching strategies, rebasing, bisect." },
  { name: "Docker", category: "DevOps & Tools", level: "Intermediate", description: "Containerization, multi-stage builds, docker-compose." },
  { name: "CI/CD (GitHub Actions)", category: "DevOps & Tools", level: "Intermediate", description: "Automated testing, build pipelines, deployments." },
  { name: "Linux/Bash", category: "DevOps & Tools", level: "Intermediate", description: "Server administration, shell scripting." },
  
  // Architecture
  { name: "System Design", category: "Architecture", level: "Advanced", description: "Scalability patterns, load balancing, caching." },
  { name: "Microservices", category: "Architecture", level: "Intermediate", description: "Service decomposition, inter-service communication." },
  { name: "Event-Driven", category: "Architecture", level: "Intermediate", description: "Message queues, pub/sub patterns." },
  { name: "Clean Architecture", category: "Architecture", level: "Advanced", description: "Separation of concerns, dependency injection, SOLID." },
];

export function getSkillsByCategory() {
  const result: Record<string, Skill[]> = {};
  
  skills.forEach(skill => {
    if (!result[skill.category]) {
      result[skill.category] = [];
    }
    result[skill.category].push(skill);
  });
  
  return result;
}
