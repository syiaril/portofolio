"use client";

import * as React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "id" ? "en" : "id")}
      className="p-2 rounded-md hover:bg-secondary/50 transition-colors flex items-center gap-1.5 text-sm font-medium"
      aria-label="Ganti bahasa"
    >
      <span className="uppercase text-xs tracking-wider">{lang === "id" ? "EN" : "ID"}</span>
    </button>
  );
}
