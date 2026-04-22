"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ContactClient() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const { t } = useLanguage();
  const c = translations.contact;

  const copyEmail = () => {
    navigator.clipboard.writeText("muhamad.syiaril@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("085606585418");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          (e.target as HTMLFormElement).reset();
        }, 3000);
      } else {
        setStatus("idle");
        alert(t(c.errorSend));
      }
    } catch (error) {
      setStatus("idle");
      alert(t(c.errorNetwork));
    }
  };

  return (
    <div className="pt-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeader 
          title={t(c.title)}
          subtitle={t(c.subtitle)}
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <ScrollReveal delay={0.1}>
            <div className="glass p-6 rounded-2xl border-border/50">
              <h3 className="text-lg font-semibold mb-6">{t(c.infoTitle)}</h3>
              <div className="space-y-6">
                <div className="relative group">
                  <a 
                    href="mailto:muhamad.syiaril@gmail.com" 
                    className="flex items-center gap-4 group text-muted-foreground hover:text-primary transition-colors flex-1"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground uppercase tracking-wider">{t(c.email)}</p>
                      <p className="text-sm">muhamad.syiaril@gmail.com</p>
                    </div>
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-xs font-medium bg-secondary/80 hover:bg-secondary text-foreground rounded-lg border border-border transition-all opacity-0 group-hover:opacity-100"
                  >
                    {copied ? t(c.copied) : t(c.copy)}
                  </button>
                </div>

                <div className="relative group">
                  <a 
                    href="tel:085606585418" 
                    className="flex items-center gap-4 group text-muted-foreground hover:text-primary transition-colors flex-1"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground uppercase tracking-wider">{t(c.phone)}</p>
                      <p className="text-sm">0856-0658-5418</p>
                    </div>
                  </a>
                  <button 
                    onClick={copyPhone}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-xs font-medium bg-secondary/80 hover:bg-secondary text-foreground rounded-lg border border-border transition-all opacity-0 group-hover:opacity-100"
                  >
                    {phoneCopied ? t(c.copied) : t(c.copy)}
                  </button>
                </div>

                <a 
                  href="https://wa.me/6285606585418" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
                    <WhatsAppIcon className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground uppercase tracking-wider">WhatsApp</p>
                    <p className="text-sm">{t(c.whatsapp)}</p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <ScrollReveal delay={0.2}>
          <div className="glass p-8 md:p-12 rounded-2xl border-border/50 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[64px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-[64px] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    {t(c.nameLabel)}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                    placeholder={t(c.namePlaceholder)}
                    disabled={status !== "idle"}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    {t(c.emailLabel)}
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
                  {t(c.subjectLabel)}
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                  placeholder={t(c.subjectPlaceholder)}
                  disabled={status !== "idle"}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  {t(c.messageLabel)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-muted-foreground/50"
                  placeholder={t(c.messagePlaceholder)}
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
                       {t(c.send)} <Send className="w-4 h-4 ml-2" />
                     </>
                  )}
                  {status === "submitting" && (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t(c.sending)}
                    </span>
                  )}
                  {status === "success" && (
                    <span className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle className="w-5 h-5" /> {t(c.sent)}
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
