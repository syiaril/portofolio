"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function ContactClient() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
    // Reset after 3 seconds
    setTimeout(() => {
      setStatus("idle");
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <div className="pt-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeader 
          title="Get in touch" 
          subtitle="Have a project in mind, a question, or just want to say hi? I'd love to hear from you." 
        />
      </ScrollReveal>

      <div className="max-w-2xl mt-16">
        <ScrollReveal delay={0.1}>
          <div className="glass p-8 md:p-12 rounded-2xl border-border/50 shadow-xl relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[64px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-[64px] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                    placeholder="John Doe"
                    disabled={status !== "idle"}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                    placeholder="john@example.com"
                    disabled={status !== "idle"}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                  placeholder="How can I help you?"
                  disabled={status !== "idle"}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-muted-foreground/50"
                  placeholder="Tell me about your project..."
                  disabled={status !== "idle"}
                />
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2 text-base font-medium rounded-xl h-12 transition-all duration-300"
                  disabled={status !== "idle"}
                >
                  {status === "idle" && (
                     <>
                       Send Message <Send className="w-4 h-4 ml-2" />
                     </>
                  )}
                  {status === "submitting" && (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  )}
                  {status === "success" && (
                    <span className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle className="w-5 h-5" /> Message Sent
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
