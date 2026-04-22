export interface Skill {
  name: string;
  icon?: string;
  category: "Languages" | "Frontend" | "Backend" | "Database" | "DevOps & Tools" | "Architecture" | "Cyber Security" | "IoT & Automation";
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description?: { id: string; en: string };
}

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages", level: "Advanced", description: { id: "Static typing, generics, tipe utility lanjutan.", en: "Static typing, generics, advanced utility types." } },
  { name: "JavaScript (ES6+)", category: "Languages", level: "Expert", description: { id: "Pemahaman mendalam tentang event loop, closures, dan pemrograman async.", en: "Deep understanding of event loop, closures, and async programming." } },
  { name: "PHP", category: "Languages", level: "Advanced", description: { id: "Logika backend untuk aplikasi Laravel & PHP native.", en: "Backend logic for Laravel & native PHP applications." } },
  { name: "Dart", category: "Languages", level: "Advanced", description: { id: "Bahasa utama untuk membangun aplikasi mobile Flutter.", en: "Primary language for building Flutter mobile applications." } },
  { name: "Python", category: "Languages", level: "Intermediate", description: { id: "Pemrosesan data, FastAPI, scripting.", en: "Data processing, FastAPI, scripting." } },
  { name: "SQL", category: "Languages", level: "Advanced", description: { id: "Query kompleks, relasi tabel kompleks, optimasi database.", en: "Complex queries, complex table relations, database optimization." } },
  
  // Frontend
  { name: "Flutter", category: "Frontend", level: "Advanced", description: { id: "Pengembangan aplikasi mobile lintas platform yang efisien.", en: "Efficient cross-platform mobile application development." } },
  { name: "React", category: "Frontend", level: "Advanced", description: { id: "Hooks, context, optimasi performa, internal komponen.", en: "Hooks, context, performance optimization, component internals." } },
  { name: "Next.js", category: "Frontend", level: "Advanced", description: { id: "App Router, SSR, SSG, API routes, middleware.", en: "App Router, SSR, SSG, API routes, middleware." } },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced", description: { id: "Desain utility-first, konfigurasi custom yang fleksibel.", en: "Utility-first design, flexible custom configuration." } },
  { name: "Framer Motion", category: "Frontend", level: "Intermediate", description: { id: "Transisi halaman yang kompleks, animasi gestur.", en: "Complex page transitions, gesture animations." } },
  
  // Backend
  { name: "Laravel", category: "Backend", level: "Expert", description: { id: "Desain sistem backend yang kuat termasuk Filament & API.", en: "Robust backend system design including Filament & API." } },
  { name: "Laravel Filament", category: "Backend", level: "Advanced", description: { id: "Membangun panel admin dan sistem manajemen yang kompleks.", en: "Building complex admin panels and management systems." } },
  { name: "Node.js", category: "Backend", level: "Advanced", description: { id: "Express, desain API yang stabil, streams.", en: "Express, stable API design, streams." } },
  { name: "REST APIs", category: "Backend", level: "Expert", description: { id: "Integrasi sistem antara Flutter dan Laravel.", en: "System integration between Flutter and Laravel." } },
  { name: "Supabase", category: "Backend", level: "Intermediate", description: { id: "Database realtime dan autentikasi untuk aplikasi IoT/web.", en: "Realtime database and authentication for IoT/web apps." } },
  
  // Databases
  { name: "MySQL", category: "Database", level: "Advanced", description: { id: "Desain database dengan pemetaan relasional yang kompleks.", en: "Database design with complex relational mapping." } },
  { name: "PostgreSQL", category: "Database", level: "Advanced", description: { id: "Pemodelan relasional, indexing, dan manajemen transaksi.", en: "Relational modeling, indexing, and transaction management." } },
  
  // DevOps & Tools
  { name: "Linux/Bash", category: "DevOps & Tools", level: "Advanced", description: { id: "Administrasi server, shell scripting, otomatisasi sistem.", en: "Server administration, shell scripting, system automation." } },
  { name: "aaPanel", category: "DevOps & Tools", level: "Advanced", description: { id: "Penyederhanaan web hosting dan manajemen server.", en: "Simplified web hosting and server management." } },
  { name: "Coolify", category: "DevOps & Tools", level: "Advanced", description: { id: "Self-hosting dan PaaS untuk alur kerja DevOps.", en: "Self-hosting and PaaS for DevOps workflows." } },
  { name: "Proxmox", category: "DevOps & Tools", level: "Intermediate", description: { id: "Virtualisasi dan manajemen server internal/home server.", en: "Virtualization and internal/home server management." } },
  { name: "Docker", category: "DevOps & Tools", level: "Intermediate", description: { id: "Kontainerisasi dan deployment menggunakan docker-compose.", en: "Containerization and deployment using docker-compose." } },
  
  // Cyber Security
  { name: "Ethical Hacking", category: "Cyber Security", level: "Intermediate", description: { id: "Keamanan ofensif dasar dan pengujian penetrasi (pentest).", en: "Basic offensive security and penetration testing." } },
  { name: "Burp Suite", category: "Cyber Security", level: "Intermediate", description: { id: "Analisis sistem login dan pengujian kerentanan.", en: "Login system analysis and vulnerability testing." } },
  { name: "Hydra", category: "Cyber Security", level: "Intermediate", description: { id: "Simulasi brute force dan pengujian eskalasi hak istimewa.", en: "Brute force simulation and privilege escalation testing." } },
  { name: "Vulnerability Assessment", category: "Cyber Security", level: "Intermediate", description: { id: "Menganalisis kelemahan sistem dan keamanan login.", en: "Analyzing system weaknesses and login security." } },

  // IoT & Automation
  { name: "ESP32", category: "IoT & Automation", level: "Advanced", description: { id: "Integrasi perangkat keras dengan API dan sistem realtime.", en: "Hardware integration with APIs and realtime systems." } },
  { name: "IoT Integration", category: "IoT & Automation", level: "Advanced", description: { id: "Menghubungkan perangkat fisik dengan layanan cloud (Supabase/API).", en: "Connecting physical devices with cloud services (Supabase/API)." } },
  { name: "AI Prompting", category: "IoT & Automation", level: "Expert", description: { id: "Memanfaatkan AI untuk coding, desain, dan pemecahan masalah (ChatGPT/Claude).", en: "Leveraging AI for coding, design, and problem-solving (ChatGPT/Claude)." } },
];

export function getSkillsByCategory() {
  const result: Record<string, Skill[]> = {};
  
  skills.forEach(skill => {
    if (!result[skill.category]) {
      result[skill.category] = [];
    }
    result[skill.category].push(skill);
  });
  
  return result;
}
