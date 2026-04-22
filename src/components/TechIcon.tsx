import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, 
  SiNodedotjs, SiPostgresql, SiDocker, SiGo, SiPython, SiMongodb, 
  SiRedis, SiExpress, SiRabbitmq, SiKubernetes, SiFastapi, SiSocketdotio,
  SiHtml5, SiCss, SiGit, SiGnubash, SiLinux, SiFlutter, SiSupabase,
  SiShadcnui, SiLaravel, SiMysql, SiPhp, SiDart
} from "react-icons/si";
import { Code2, Database, Globe, Hexagon, Layers, Server, Terminal, Cpu } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const iconProps = { className: cn("w-5 h-5", className) };
  
  const n = name.toLowerCase();
  
  if (n.includes("flutter")) return <SiFlutter {...iconProps} />;
  if (n.includes("dart")) return <SiDart {...iconProps} />;
  if (n.includes("supabase")) return <SiSupabase {...iconProps} />;
  if (n.includes("shadcn")) return <SiShadcnui {...iconProps} />;
  if (n.includes("laravel")) return <SiLaravel {...iconProps} />;
  if (n.includes("mysql")) return <SiMysql {...iconProps} />;
  if (n.includes("php")) return <SiPhp {...iconProps} />;
  if (n.includes("esp32") || n.includes("iot")) return <Cpu {...iconProps} />;

  if (n.includes("react")) return <SiReact {...iconProps} />;
  if (n.includes("next")) return <SiNextdotjs {...iconProps} />;
  if (n.includes("typescript")) return <SiTypescript {...iconProps} />;
  if (n.includes("javascript")) return <SiJavascript {...iconProps} />;
  if (n.includes("tailwind")) return <SiTailwindcss {...iconProps} />;
  if (n.includes("node")) return <SiNodedotjs {...iconProps} />;
  if (n.includes("postgres") || n.includes("sql")) return <SiPostgresql {...iconProps} />;
  if (n.includes("docker")) return <SiDocker {...iconProps} />;
  if (n.includes("go") && !n.includes("google")) return <SiGo {...iconProps} />;
  if (n.includes("python")) return <SiPython {...iconProps} />;
  if (n.includes("mongo")) return <SiMongodb {...iconProps} />;
  if (n.includes("redis")) return <SiRedis {...iconProps} />;
  if (n.includes("express")) return <SiExpress {...iconProps} />;
  if (n.includes("rabbit")) return <SiRabbitmq {...iconProps} />;
  if (n.includes("kuber")) return <SiKubernetes {...iconProps} />;
  if (n.includes("fastapi")) return <SiFastapi {...iconProps} />;
  if (n.includes("socket")) return <SiSocketdotio {...iconProps} />;
  if (n.includes("html")) return <SiHtml5 {...iconProps} />;
  if (n.includes("css")) return <SiCss {...iconProps} />;
  if (n.includes("git")) return <SiGit {...iconProps} />;
  if (n.includes("bash")) return <SiGnubash {...iconProps} />;
  if (n.includes("linux") || n.includes("aapanel") || n.includes("coolify") || n.includes("proxmox")) return <SiLinux {...iconProps} />;

  // Fallbacks
  if (n.includes("server") || n.includes("backend")) return <Server {...iconProps} />;
  if (n.includes("database")) return <Database {...iconProps} />;
  if (n.includes("web") || n.includes("api")) return <Globe {...iconProps} />;
  if (n.includes("architecture")) return <Layers {...iconProps} />;
  
  return <Hexagon {...iconProps} />;
}
