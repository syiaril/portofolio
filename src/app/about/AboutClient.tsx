"use client";

import { Download, Eye } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function AboutClient() {
  const { t } = useLanguage();
  const a = translations.about;

  return (
    <div className="pt-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeader 
          title={t(a.title)}
          subtitle={t(a.subtitle)}
        />
      </ScrollReveal>

      <div className="space-y-16">
        {/* The Story */}
        <section className="prose prose-lg dark:prose-invert max-w-3xl">
          <ScrollReveal delay={0.1}>
            <h3>{t(a.storyTitle)}</h3>
            <p dangerouslySetInnerHTML={{ __html: t(a.storyP1) }} />
            <p dangerouslySetInnerHTML={{ __html: t(a.storyP2) }} />
            <p dangerouslySetInnerHTML={{ __html: t(a.storyP3) }} />
          </ScrollReveal>
        </section>

        {/* Principles */}
        <section>
          <ScrollReveal delay={0.2}>
            <h3 className="text-2xl font-bold mb-6">{t(a.principlesTitle)}</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {a.principles.map((principle, idx) => (
              <ScrollReveal key={idx} delay={0.3 + (idx * 0.1)} className="glass p-6 rounded-xl">
                <h4 className="font-semibold text-lg text-primary mb-2">{t(principle.title)}</h4>
                <p className="text-muted-foreground">{t(principle.text)}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Experience / CV */}
        <section>
          <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row gap-6 items-center justify-between p-8 glass rounded-2xl border-primary/20">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t(a.cvTitle)}</h3>
              <p className="text-muted-foreground">{t(a.cvSubtitle)}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button asChild size="lg" className="shrink-0 gap-2 font-medium">
                <a href="/documents/CV_Muhamad_Syiaril_Islami.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="w-4 h-4" /> {t(a.cvPreview)}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="shrink-0 gap-2 font-medium glass">
                <a href="/documents/CV_Muhamad_Syiaril_Islami.pdf" download="CV_Muhamad_Syiaril_Islami.pdf">
                  <Download className="w-4 h-4" /> {t(a.cvDownload)}
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
