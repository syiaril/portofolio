"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 mix-blend-screen animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-indigo-500/10 rounded-full blur-[128px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium mb-6 text-foreground/80 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Hi, I'm <span className="heading-gradient">Syiaril</span>
              <br />
              Software Engineer.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed text-balance">
              I specialize in building scalable web applications, robust backend systems, and crafting responsive user interfaces with a focus on clean architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full font-medium">
                <Link href="/projects" className="gap-2">
                  View Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full font-medium glass hover:bg-secondary/20">
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-lg hidden lg:block"
          >
            {/* Terminal Mockup */}
            <div className="rounded-xl overflow-hidden glass border-white/10 shadow-2xl bg-[#0d0d12]/90 backdrop-blur-xl">
              <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-2 px-2 flex items-center gap-2 text-xs text-white/40 font-mono">
                  <Terminal className="w-3 h-3" /> zsh
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-loose">
                <div className="flex text-emerald-400">
                  <span className="mr-2">~</span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="text-indigo-300 mt-1 mb-4">"Muhamad Syi'aril Islami"</div>
                
                <div className="flex text-emerald-400">
                  <span className="mr-2">~</span>
                  <span className="text-white">curl -s https://api.mhmdsyiaril.my.id/skills</span>
                </div>
                <div className="text-indigo-300 mt-1">
                  {"{"}
                  <div className="pl-4">
                    "frontend": ["React", "Next.js", "Tailwind"],<br />
                    "backend": ["Node.js", "Go", "PostgreSQL"],<br />
                    "architecture": "Microservices"
                  </div>
                  {"}"}
                </div>
                <div className="mt-4 flex">
                  <span className="text-emerald-400 mr-2">~</span>
                  <span className="text-white border-r inline-block animate-pulse w-2 h-4 bg-white self-center"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
