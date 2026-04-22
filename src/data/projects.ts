export interface Project {
  slug: string;
  title: string;
  description: { id: string; en: string };
  longDescription: { id: string; en: string };
  category: "Web" | "Mobile" | "Backend" | "Fullstack" | "IoT" | "Security";
  techStack: string[];
  imageUrl: string;
  featured: boolean;
  date: string;
  challenges: { id: string; en: string }[];
  architecture: { id: string; en: string };
  results: { id: string; en: string }[];
  lessons: { id: string; en: string }[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "kedai-species",
    title: "Kedai Species (Scout E-Commerce)",
    description: {
      id: "Platform e-commerce komprehensif untuk peralatan pramuka dengan aplikasi mobile Flutter, backend Express.js & Supabase, dan panel admin Next.js.",
      en: "A comprehensive e-commerce platform for scout equipment featuring a Flutter mobile app, Express.js & Supabase backend, and a Next.js admin panel.",
    },
    longDescription: {
      id: "Dikembangkan sebagai proyek andalan, Kedai Species memberikan pengalaman berbelanja perlengkapan pramuka yang mulus. Aplikasi ini mencakup aplikasi mobile Flutter untuk pengguna utama, backend tangguh menggunakan Express.js dan Supabase, serta dashboard admin web modern yang dibangun dengan Next.js dan shadcn/ui untuk manajemen operasional.",
      en: "Developed as a flagship project, Kedai Species delivers a seamless scout equipment shopping experience. It includes a Flutter mobile app for end users, a robust Express.js and Supabase backend, and a modern web admin dashboard built with Next.js and shadcn/ui for operational management.",
    },
    category: "Fullstack",
    techStack: ["Flutter", "Express.js", "Supabase", "Next.js", "shadcn/ui"],
    imageUrl: "/projects/kedai-species.jpg",
    featured: true,
    date: "2024 - 2025",
    challenges: [
      { id: "Mengintegrasikan aplikasi Flutter dengan backend Express.js dan manajemen data real-time menggunakan Supabase.", en: "Integrating the Flutter app with an Express.js backend and real-time data management using Supabase." },
      { id: "Merancang database untuk menangani alur e-commerce yang kompleks seperti keranjang belanja dan transaksi pesanan.", en: "Designing a database to handle complex e-commerce flows such as shopping carts and order transactions." },
      { id: "Membangun dashboard admin yang interaktif dan modern dengan Next.js menggunakan komponen shadcn/ui.", en: "Building an interactive and modern admin dashboard with Next.js using shadcn/ui components." },
    ],
    architecture: {
      id: "Sistem menggunakan Express.js terintegrasi Supabase sebagai penyedia REST API. Aplikasi mobile Flutter bertindak sebagai klien utama (frontend), sementara aplikasi Next.js (dengan shadcn/ui) menangani pengelolaan data internal sebagai web admin.",
      en: "The system uses Express.js integrated with Supabase as the REST API provider. The Flutter mobile app serves as the primary client (frontend), while the Next.js app (with shadcn/ui) handles internal data management as the web admin.",
    },
    results: [
      { id: "Berhasil mendemonstrasikan end-to-end pemesanan barang secara real-time.", en: "Successfully demonstrated end-to-end real-time item ordering." },
      { id: "Pengembangan panel admin dipercepat dan terlihat profesional berkat Next.js dan shadcn/ui.", en: "Admin panel development was accelerated and looks professional thanks to Next.js and shadcn/ui." },
      { id: "Aplikasi mobile terasa sangat ringan dan asli berkat Flutter.", en: "Mobile app feels lightweight and native thanks to Flutter." },
    ],
    lessons: [
      { id: "Kombinasi arsitektur terpisah (mobile user app & web admin app) memudahkan manajemen proyek yang kompleks.", en: "Separated architecture (mobile user app & web admin app) simplifies complex project management." },
      { id: "Supabase sangat efisien ketika digabungkan dengan Express.js untuk kebutuhan autentikasi dan database real-time.", en: "Supabase is highly efficient when combined with Express.js for authentication and real-time database needs." },
      { id: "Penggunaan shadcn/ui mempermudah membangun UI admin yang konsisten tanpa mengorbankan fleksibilitas kode.", en: "Using shadcn/ui makes building consistent admin UIs easy without sacrificing code flexibility." },
    ],
    githubUrl: "https://github.com/syiaril/kedai-species",
  },

  {
    slug: "peminjaman-barang-ukk",
    title: "Sistem Peminjaman Barang (UKK)",
    description: {
      id: "Sistem manajemen logistik yang dibangun untuk ujian kompetensi kejuruan (UKK) guna melacak peminjaman aset dengan sistem role multi-tier.",
      en: "A logistics management system built for vocational competency exams (UKK) to track asset loans with a multi-tier role system.",
    },
    longDescription: {
      id: "Dibuat untuk menyelesaikan masalah pelacakan selama ujian UKK saya, aplikasi berbasis Laravel ini mengelola proses persetujuan, peminjaman, dan pengembalian aset sekolah. Sistem ini dirancang dengan autentikasi multi-pengguna yang membagi hak akses ke dalam 3 role utama: Admin (manajemen master data), Petugas (manajemen transaksi), dan Peminjam (pengguna akhir).",
      en: "Built to solve tracking issues during my UKK exam, this Laravel-based application manages the approval, borrowing, and return of school assets. The system features multi-user authentication dividing access into 3 main roles: Admin (master data management), Officer (transaction management), and Borrower (end user).",
    },
    category: "Web",
    techStack: ["Laravel", "Tailwind CSS", "MySQL", "Blade"],
    imageUrl: "/projects/peminjaman-ukk.jpg",
    featured: false,
    date: "2025",
    challenges: [
      { id: "Membangun middleware dan sistem otorisasi yang aman untuk memisahkan hak akses antara Admin, Petugas, dan Peminjam.", en: "Building secure middleware and authorization system to separate access rights between Admin, Officer, and Borrower." },
      { id: "Menerapkan validasi alur kerja agar barang hanya bisa dipinjam jika disetujui oleh Petugas.", en: "Implementing workflow validation so items can only be borrowed when approved by an Officer." },
      { id: "Memastikan antarmuka yang intuitif bagi Peminjam sekaligus komprehensif bagi Admin.", en: "Ensuring an intuitive interface for Borrowers while comprehensive for Admins." },
    ],
    architecture: {
      id: "Aplikasi Laravel monolitik yang menerapkan pola desain MVC. Blade templates menyajikan antarmuka yang responsif, sedangkan Laravel Eloquent menangani relasi database terpusat untuk user role dan riwayat transaksi peminjaman.",
      en: "A monolithic Laravel application implementing the MVC design pattern. Blade templates serve responsive interfaces, while Laravel Eloquent handles centralized database relations for user roles and loan transaction history.",
    },
    results: [
      { id: "Lulus ujian kompetensi kejuruan (UKK) dengan nilai sempurna.", en: "Passed the vocational competency exam (UKK) with a perfect score." },
      { id: "Mendigitalkan dan mengamankan alur peminjaman dengan sistem approval dari Petugas.", en: "Digitized and secured the borrowing flow with an Officer approval system." },
      { id: "Mencegah kehilangan barang melalui sistem log dan pelaporan riwayat peminjam.", en: "Prevented item loss through logging and borrower history reporting." },
    ],
    lessons: [
      { id: "Manajemen Role dan Permission (Hak Akses) adalah fondasi penting dalam aplikasi level instansi/perusahaan.", en: "Role and Permission management is a critical foundation for enterprise-level applications." },
      { id: "Rancangan database relasional yang kuat sangat memudahkan ketika kita perlu melakukan tracking atau audit data.", en: "Strong relational database design greatly simplifies data tracking and auditing." },
      { id: "Membuat sistem lebih mudah digunakan oleh non-teknis (Petugas) memastikan aplikasi tersebut benar-benar dipakai di lapangan.", en: "Making the system easy to use for non-technical users (Officers) ensures real-world field adoption." },
    ],
    githubUrl: "https://github.com/syiaril/ukk-peminjaman",
  },
  {
    slug: "pojok-lab",
    title: "Pojok Lab (Barcode-Based Loan System)",
    description: {
      id: "Sistem inventarisasi modern untuk laboratorium sekolah dengan fitur pemindaian barcode untuk barang dan identitas peminjam.",
      en: "A modern inventory system for school laboratories featuring barcode scanning for items and borrower identification.",
    },
    longDescription: {
      id: "Dirancang khusus untuk lab TI sekolah saya, sistem Pojok Lab membantu asisten lab memantau lalu lintas peralatan. Aplikasi ini mengandalkan pemindaian barcode untuk memverifikasi item fisik dan ID siswa secara instan, didukung dengan antarmuka dua peran: Admin (untuk manajemen inventaris) dan Peminjam.",
      en: "Designed specifically for my school's IT lab, the Pojok Lab system helps lab assistants monitor equipment traffic. The app relies on barcode scanning to instantly verify physical items and student IDs, supported by a two-role interface: Admin (for inventory management) and Borrower.",
    },
    category: "Web",
    techStack: ["Next.js", "shadcn/ui", "Tailwind CSS", "Barcode API"],
    imageUrl: "/projects/pojok-lab.jpg",
    featured: false,
    date: "2024",
    challenges: [
      { id: "Mengintegrasikan pembacaan barcode fisik/kamera ke dalam komponen antarmuka web Next.js.", en: "Integrating physical/camera barcode reading into Next.js web interface components." },
      { id: "Menangani transaksi peminjaman frekuensi tinggi secara cepat untuk mencegah antrian siswa di lab.", en: "Handling high-frequency loan transactions quickly to prevent student queues in the lab." },
      { id: "Merancang dashboard Admin yang padat data sekaligus responsif untuk digunakan di komputer lab pengawas.", en: "Designing a data-rich yet responsive Admin dashboard for use on lab supervisor computers." },
    ],
    architecture: {
      id: "Dibangun menggunakan arsitektur web Next.js modern. Antarmuka dirangkai secara presisi dengan komponen shadcn/ui dan Tailwind CSS, menyajikan pengalaman UI admin yang rapi serta scanner interface yang reaktif.",
      en: "Built using modern Next.js web architecture. The interface is precisely assembled with shadcn/ui and Tailwind CSS components, delivering a clean admin UI experience and reactive scanner interface.",
    },
    results: [
      { id: "Secara rutin digunakan di lab untuk melacak 200+ peralatan fisik menggunakan barcode.", en: "Routinely used in the lab to track 200+ physical equipment items using barcodes." },
      { id: "Mencegah human error secara drastis melalui metode pemindaian ID dan label barang.", en: "Drastically prevented human error through ID and item label scanning methods." },
      { id: "Memangkas waktu serah terima perangkat dari beberapa menit menjadi hitungan detik.", en: "Cut device handover time from several minutes to just seconds." },
    ],
    lessons: [
      { id: "Menghubungkan input perangkat lunak berbasis web dengan input perangkat keras (seperti scanner) menuntut pengelolaan fokus (focus management) DOM yang teliti di React.", en: "Connecting web-based software input with hardware input (like scanners) requires careful DOM focus management in React." },
      { id: "Koleksi komponen shadcn/ui adalah pilihan yang sangat sangat efisien untuk dashboard internal bergaya profesional tanpa bloatware framework.", en: "The shadcn/ui component collection is an extremely efficient choice for professional-looking internal dashboards without framework bloatware." },
      { id: "Usability yang tinggi lewat proses satu langkah (seperti scan & go) sangat disukai pengguna sistem dibanding mengisi form manual.", en: "High usability through one-step processes (like scan & go) is highly preferred by users over manual form filling." },
    ],
    githubUrl: "https://github.com/syiaril/loans-app-for-labs",
  },
];

export function getFeaturedProjects() {
  return projects.filter(p => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}

export function getAllCategories() {
  const categories = new Set(projects.map(p => p.category));
  return Array.from(categories);
}
