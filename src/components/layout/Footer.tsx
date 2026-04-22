"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const f = translations.footer;
  const nav = translations.navbar;

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="font-bold text-xl tracking-tighter inline-block mb-4">
              <span className="heading-gradient">Syaril</span>
              <span className="text-foreground">.</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              {t(f.description)}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t(f.quickLinks)}</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: t(nav.about) },
                { href: "/projects", label: t(nav.projects) },
                { href: "/skills", label: t(nav.skills) },
                { href: "/blog", label: t(nav.blog) },
                { href: "/contact", label: t(nav.contact) },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t(f.connect)}</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/syiaril" target="_blank" rel="noreferrer" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/muhamad-syiaril-1762ba403" target="_blank" rel="noreferrer" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mhmdsyiaril" target="_blank" rel="noreferrer" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6285606585418" target="_blank" rel="noreferrer" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a href="mailto:muhamad.syiaril@gmail.com" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Muhamad Syi&apos;aril Islami. {t(f.copyright)}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{t(f.builtWith)}</span>
            <span className="font-medium text-foreground">Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
