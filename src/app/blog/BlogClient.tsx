"use client";

import { BlogCard } from "@/components/BlogCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { BlogPostMeta } from "@/lib/mdx";

export function BlogClient({ posts }: { posts: BlogPostMeta[] }) {
  const { t } = useLanguage();
  const b = translations.blog;

  return (
    <div className="pt-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeader 
          title={t(b.title)}
          subtitle={t(b.subtitle)}
        />
      </ScrollReveal>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={0.1 + (index * 0.1)}>
              <div className="relative h-full">
                <BlogCard post={post} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-muted-foreground bg-secondary/20 rounded-2xl border border-border/50">
          <p>{t(b.empty)}</p>
        </div>
      )}
    </div>
  );
}
