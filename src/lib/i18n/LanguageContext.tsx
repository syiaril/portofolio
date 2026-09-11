"use client";

import { createContext, useContext, useSyncExternalStore, ReactNode } from "react";
import { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (obj: { id: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("langchange", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("langchange", callback);
  };
}

function getSnapshot(): Lang {
  const saved = localStorage.getItem("lang");
  return saved === "en" ? "en" : "id";
}

function getServerSnapshot(): Lang {
  return "id";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = (newLang: Lang) => {
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
    window.dispatchEvent(new Event("langchange"));
  };

  const t = (obj: { id: string; en: string }) => {
    return obj[lang] || obj.id;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
