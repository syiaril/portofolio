"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

interface Props {
  idContent: React.ReactNode;
  enContent: React.ReactNode;
}

export function BlogContentClient({ idContent, enContent }: Props) {
  const { lang } = useLanguage();
  
  return <>{lang === "id" ? idContent : enContent}</>;
}
