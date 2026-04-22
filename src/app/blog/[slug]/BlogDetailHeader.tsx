"use client";

import Link from "next/link";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { enUS } from "date-fns/locale";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { BlogPostMeta } from "@/lib/mdx";

interface BlogDetailHeaderProps {
  meta: BlogPostMeta;
}

export function BlogDetailHeader({ meta }: BlogDetailHeaderProps) {
  const { lang, t } = useLanguage();

  let formattedDate = meta.date;
  try {
    formattedDate = format(new Date(meta.date), "d MMMM yyyy", { locale: lang === "id" ? idLocale : enUS });
  } catch (e) {}

  return (
    <>
      <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
        <Link href="/blog" className="gap-2">
          <ArrowLeft className="w-4 h-4" /> {t(translations.blog.backToBlog)}
        </Link>
      </Button>

      <header className="mb-12 border-b border-border pb-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {meta.tags.map(tag => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground leading-tight">
          {t(meta.title)}
        </h1>
        
        <div className="flex items-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={meta.date}>{formattedDate}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{t(meta.readingTime)}</span>
          </div>
        </div>
      </header>
    </>
  );
}
