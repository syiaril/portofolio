export type Lang = "id" | "en";

export const translations = {
  navbar: {
    home: { id: "Beranda", en: "Home" },
    about: { id: "Tentang", en: "About" },
    projects: { id: "Proyek", en: "Projects" },
    skills: { id: "Keahlian", en: "Skills" },
    blog: { id: "Blog", en: "Blog" },
    contact: { id: "Kontak", en: "Contact" },
  },
  hero: {
    badge: { id: "Tersedia untuk proyek baru", en: "Available for new projects" },
    greeting: { id: "Hi, I'm", en: "Hi, I'm" },
    role: { id: "Software Engineer.", en: "Software Engineer." },
    description: {
      id: "Pengembang Fullstack & Penggemar Keamanan Siber. Saya menjembatani perangkat keras (IoT) dan perangkat lunak, dengan fondasi kuat dalam aplikasi web dan seluler yang skalabel.",
      en: "Fullstack Developer & Cyber Security Enthusiast. I bridge hardware (IoT) and software, with a strong foundation in scalable web and mobile applications.",
    },
    cta1: { id: "Lihat Karya Saya", en: "View My Work" },
    cta2: { id: "Perjalanan Saya", en: "My Journey" },
    terminal: {
      leadership: { id: "Ketua Pramuka", en: "Scout Leader" },
    },
  },
  featuredProjects: {
    title: { id: "Karya Pilihan", en: "Featured Work" },
    subtitle: {
      id: "Proyek pilihan yang menunjukkan kemampuan pemecahan masalah dan arsitektur saya.",
      en: "Selected projects showcasing my problem-solving and architecture skills.",
    },
    viewAll: { id: "Lihat semua proyek", en: "View all projects" },
  },
  techStack: {
    title: { id: "Teknologi", en: "Technology" },
    subtitle: {
      id: "Teknologi inti yang saya gunakan untuk membangun sistem yang kuat dan dapat diskalakan.",
      en: "Core technologies I use to build robust and scalable systems.",
    },
    viewAll: { id: "Lihat semua keahlian", en: "View all skills" },
  },
  blogPreview: {
    title: { id: "Terbaru dari Blog", en: "Latest from Blog" },
    subtitle: {
      id: "Pemikiran dan tutorial tentang desain sistem, performa, dan praktik terbaik.",
      en: "Thoughts and tutorials on system design, performance, and best practices.",
    },
    viewAll: { id: "Lihat semua artikel", en: "View all articles" },
  },
  about: {
    title: { id: "Tentang Saya", en: "About Me" },
    subtitle: {
      id: "Perjalanan, prinsip, dan apa yang mendorong saya sebagai seorang pengembang perangkat lunak.",
      en: "My journey, principles, and what drives me as a software developer.",
    },
    storyTitle: { id: "Perjalanan SMK & Seterusnya", en: "My Vocational Journey & Beyond" },
    storyP1: {
      id: "Perjalanan saya dimulai di Sekolah Menengah Kejuruan (SMK), di mana saya segera menyadari bahwa TI lebih dari sekadar duduk di belakang meja—ini tentang membangun solusi yang menjembatani kesenjangan antara manusia dan teknologi. Dari merancang basis data kompleks di <strong>MySQL</strong> hingga membangun aplikasi mobile lintas platform dengan <strong>Flutter</strong>, saya telah menghabiskan masa-masa SMK saya mengubah konsep ruang kelas menjadi aplikasi dunia nyata.",
      en: "My journey began at a Vocational High School (SMK), where I quickly realized that IT is more than sitting behind a desk—it's about building solutions that bridge the gap between people and technology. From designing complex databases in <strong>MySQL</strong> to building cross-platform mobile apps with <strong>Flutter</strong>, I spent my vocational years turning classroom concepts into real-world applications.",
    },
    storyP2: {
      id: "Titik balik utama adalah masa magang saya, di mana saya menyelam dalam ke dunia <strong>DevOps dan Keamanan Siber</strong>. Bereksperimen dengan <strong>Coolify</strong> untuk penerapan (deployment) dan menguji kerentanan dengan <strong>Burp Suite</strong> membuka mata saya akan pentingnya infrastruktur yang aman dan dapat diskalakan. Saya tidak hanya menulis kode; saya peduli tentang bagaimana kode itu diterapkan dan bagaimana ia tetap aman.",
      en: "A major turning point was my internship, where I dove deep into <strong>DevOps and Cyber Security</strong>. Experimenting with <strong>Coolify</strong> for deployments and testing vulnerabilities with <strong>Burp Suite</strong> opened my eyes to the importance of secure and scalable infrastructure. I don't just write code; I care about how it's deployed and how it stays secure.",
    },
    storyP3: {
      id: "Di luar terminal, saya menjabat sebagai <strong>Ketua Pramuka (Pemimpin Ambalan)</strong>. Peran ini mengajarkan saya bahwa kepemimpinan adalah tentang pemecahan masalah di bawah tekanan dan mengelola tim untuk mencapai tujuan bersama—keterampilan yang saya bawa ke dalam setiap proyek pengembangan yang saya ikuti.",
      en: "Beyond the terminal, I served as <strong>Scout Leader (Pemimpin Ambalan)</strong>. This role taught me that leadership is about problem-solving under pressure and managing teams toward shared goals—skills I bring to every development project I work on.",
    },
    principlesTitle: { id: "Prinsip Rekayasa", en: "Engineering Principles" },
    principles: [
      {
        title: { id: "Sinergi Perangkat Keras ke Perangkat Lunak", en: "Hardware to Software Synergy" },
        text: {
          id: "IoT tidak hanya tentang sensor; ini tentang aliran data. Saya membangun sistem di mana perangkat fisik dan lapisan digital berkomunikasi dengan tanpa cacat.",
          en: "IoT isn't just about sensors; it's about data flow. I build systems where physical devices and digital layers communicate seamlessly.",
        },
      },
      {
        title: { id: "Keamanan Berdasarkan Desain", en: "Security by Design" },
        text: {
          id: "Keamanan bukanlah renungan. Saya mengintegrasikan penilaian kerentanan dan praktik pengkodean yang aman sejak baris kode pertama.",
          en: "Security isn't an afterthought. I integrate vulnerability assessments and secure coding practices from the first line of code.",
        },
      },
      {
        title: { id: "Pemecahan Masalah Praktis", en: "Practical Problem Solving" },
        text: {
          id: "Sebagai lulusan SMK, saya menghargai solusi yang berfungsi. Saya lebih menyukai framework yang kuat dan teruji lapangan seperti Laravel dan Flutter yang memberikan nilai dengan cepat.",
          en: "As a vocational school graduate, I value solutions that work. I prefer robust, battle-tested frameworks like Laravel and Flutter that deliver value quickly.",
        },
      },
      {
        title: { id: "Kepemimpinan & Kolaborasi", en: "Leadership & Collaboration" },
        text: {
          id: "Perangkat lunak hebat dibangun oleh tim yang hebat. Pengalaman saya dalam kepemimpinan siswa membantu saya berkomunikasi secara efektif dengan pemangku kepentingan teknis maupun non-teknis.",
          en: "Great software is built by great teams. My student leadership experience helps me communicate effectively with both technical and non-technical stakeholders.",
        },
      },
    ],
    cvTitle: { id: "Ingin melihat riwayat profesional lengkap?", en: "Want to see my full professional history?" },
    cvSubtitle: {
      id: "Lihat resume saya secara online atau unduh untuk melihat detail pengalaman dan pendidikan saya.",
      en: "View my resume online or download it to see my detailed experience and education.",
    },
    cvPreview: { id: "Pratinjau CV", en: "Preview CV" },
    cvDownload: { id: "Unduh CV", en: "Download CV" },
  },
  skills: {
    title: { id: "Keahlian Teknis", en: "Technical Skills" },
    subtitle: {
      id: "Gambaran komprehensif tentang keahlian teknis saya, dikategorikan berdasarkan domain. Saya terus belajar dan beradaptasi dengan teknologi baru sesuai kebutuhan.",
      en: "A comprehensive overview of my technical skills, categorized by domain. I continuously learn and adapt to new technologies as needed.",
    },
  },
  projectsPage: {
    title: { id: "Proyek", en: "Projects" },
    subtitle: {
      id: "Pilihan karya terbaik saya, mencakup aplikasi full-stack, backend yang tangguh, dan pengalaman web yang kreatif.",
      en: "A selection of my best work, spanning full-stack applications, robust backends, and creative web experiences.",
    },
    all: { id: "Semua", en: "All" },
    empty: { id: "Tidak ada proyek yang ditemukan dalam kategori ini.", en: "No projects found in this category." },
  },
  projectDetail: {
    back: { id: "Kembali ke proyek", en: "Back to projects" },
    visitSite: { id: "Kunjungi Situs", en: "Visit Live Site" },
    viewSource: { id: "Lihat Kode Sumber", en: "View Source Code" },
    overview: { id: "Ikhtisar", en: "Overview" },
    challenges: { id: "Tantangan", en: "Challenges" },
    architecture: { id: "Arsitektur & Strategi", en: "Architecture & Strategy" },
    architecturePlaceholder: { id: "[ Placeholder Diagram Arsitektur ]", en: "[ Architecture Diagram Placeholder ]" },
    results: { id: "Hasil", en: "Results" },
    lessons: { id: "Pelajaran yang Didapat", en: "Lessons Learned" },
    techStack: { id: "Stack Teknologi", en: "Tech Stack" },
  },
  blog: {
    title: { id: "Catatan & Tulisan", en: "Notes & Writings" },
    subtitle: {
      id: "Pemikiran tentang rekayasa perangkat lunak, desain sistem, dan membangun produk web.",
      en: "Thoughts on software engineering, system design, and building web products.",
    },
    empty: { id: "Belum ada postingan blog yang diterbitkan. Periksa kembali nanti!", en: "No blog posts published yet. Check back later!" },
    backToBlog: { id: "Kembali ke blog", en: "Back to blog" },
    read: { id: "Baca", en: "Read" },
  },
  contact: {
    title: { id: "Hubungi Saya", en: "Contact Me" },
    subtitle: {
      id: "Punya ide proyek, pertanyaan, atau sekadar ingin menyapa? Saya akan sangat senang mendengar dari Anda.",
      en: "Have a project idea, question, or just want to say hello? I'd love to hear from you.",
    },
    infoTitle: { id: "Informasi Kontak", en: "Contact Info" },
    email: { id: "Email", en: "Email" },
    phone: { id: "Telepon", en: "Phone" },
    whatsapp: { id: "Obrolan Langsung", en: "Direct Chat" },
    copied: { id: "Tersalin!", en: "Copied!" },
    copy: { id: "Salin", en: "Copy" },
    nameLabel: { id: "Nama", en: "Name" },
    namePlaceholder: { id: "Budi Santoso", en: "John Doe" },
    emailLabel: { id: "Email", en: "Email" },
    subjectLabel: { id: "Subjek", en: "Subject" },
    subjectPlaceholder: { id: "Ada yang bisa saya bantu?", en: "How can I help you?" },
    messageLabel: { id: "Pesan", en: "Message" },
    messagePlaceholder: { id: "Ceritakan tentang proyek Anda...", en: "Tell me about your project..." },
    send: { id: "Kirim Pesan", en: "Send Message" },
    sending: { id: "Mengirim...", en: "Sending..." },
    sent: { id: "Pesan Terkirim", en: "Message Sent" },
    errorSend: { id: "Gagal mengirim pesan. Silakan coba lagi.", en: "Failed to send message. Please try again." },
    errorNetwork: { id: "Terjadi kesalahan jaringan. Silakan coba lagi.", en: "Network error occurred. Please try again." },
  },
  footer: {
    description: {
      id: "Pengembang Perangkat Lunak yang bersemangat dalam membangun aplikasi web modern dengan fokus pada performa, desain, dan pengalaman pengguna.",
      en: "Software Developer passionate about building modern web applications with a focus on performance, design, and user experience.",
    },
    quickLinks: { id: "Tautan Cepat", en: "Quick Links" },
    connect: { id: "Terhubung", en: "Connect" },
    copyright: { id: "Hak cipta dilindungi.", en: "All rights reserved." },
    builtWith: { id: "Dibangun dengan", en: "Built with" },
  },
  projectCard: {
    readCase: { id: "Baca Studi Kasus", en: "Read Case Study" },
  },
} as const;

// Helper type for bilingual text in data files
export type BilingualText = { id: string; en: string };
