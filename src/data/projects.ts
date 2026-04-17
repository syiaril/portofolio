export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Web" | "Mobile" | "Backend" | "Fullstack";
  techStack: string[];
  imageUrl: string;
  featured: boolean;
  date: string;
  challenges: string[];
  architecture: string;
  results: string[];
  lessons: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "e-commerce-microservices",
    title: "E-Commerce Microservices",
    description: "A scalable e-commerce backend built with microservices architecture, handling thousands of concurrent users.",
    longDescription: "This project aimed to rebuild a monolithic e-commerce application into a robust microservices architecture. It handles user authentication, product catalog, inventory management, and order processing across independently deployable services.",
    category: "Backend",
    techStack: ["Node.js", "Go", "Docker", "Kubernetes", "PostgreSQL", "Redis", "RabbitMQ"],
    imageUrl: "/projects/ecommerce-backend.jpg",
    featured: true,
    date: "Jan 2025 - Mar 2025",
    challenges: [
      "Ensuring data consistency across distributed services without distributed transactions.",
      "Managing complex service-to-service communication and mitigating network failures.",
      "Optimizing database query performance for high-traffic endpoints."
    ],
    architecture: "The system uses an API Gateway routing requests to specialized services. Event-driven architecture with RabbitMQ ensures loose coupling, while Redis caches frequent read operations.",
    results: [
      "Reduced average response time by 40% under peak load.",
      "Achieved 99.99% uptime during promotional events.",
      "Improved deployment time from hours to minutes per service."
    ],
    lessons: [
      "The complexity of microservices should not be underestimated; robust CI/CD and observability are prerequisites.",
      "Eventual consistency is often an acceptable trade-off for higher availability.",
      "Thorough load testing is critical before migrating production traffic."
    ],
    githubUrl: "https://github.com/syiaril/ecommerce-ms",
  },
  {
    slug: "ai-finance-dashboard",
    title: "AI Finance Dashboard",
    description: "An intelligent dashboard for personal finance management, featuring AI-powered spending insights and predictions.",
    longDescription: "A full-stack application that helps users track their expenses, categorize transactions automatically using machine learning, and predict future spending habits to help them save better.",
    category: "Fullstack",
    techStack: ["Next.js", "React", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL"],
    imageUrl: "/projects/finance-dashboard.jpg",
    featured: true,
    date: "Sep 2024 - Dec 2024",
    challenges: [
      "Building a responsive and intuitive data visualization interface handling large datasets in the browser.",
      "Integrating a Python machine learning service with a Node/Next.js frontend efficiently.",
      "Ensuring high performance for complex data aggregations on the database side."
    ],
    architecture: "Next.js handles the frontend and BFF (Backend-for-Frontend) API routes. A separate Python FastAPI service runs the ML models for categorization and forecasting, communicating via REST.",
    results: [
      "Achieved >95% accuracy in automatic transaction categorization.",
      "Processed over 100k transactions per user without UI lag.",
      "Received positive feedback from initial beta testers regarding ease of use."
    ],
    lessons: [
      "Separating heavy computational tasks from the main API improves user experience.",
      "Client-side caching is crucial for interactive data visualization.",
      "Prioritizing UX in data-heavy apps makes complex information accessible."
    ],
    githubUrl: "https://github.com/syiaril/finance-dash",
    liveUrl: "https://finance-dash.example.com",
  },
  {
    slug: "realtime-collaboration-tool",
    title: "Realtime Collaboration Workspace",
    description: "A collaborative whiteboard and note-taking application supporting real-time multiplayer editing.",
    longDescription: "Designed for distributed teams, this tool provides a shared digital workspace. Users can draw, write notes, and see each other's cursors and changes in real-time with zero noticeable latency.",
    category: "Web",
    techStack: ["React", "TypeScript", "Zustand", "Socket.io", "Express", "MongoDB"],
    imageUrl: "/projects/collab-workspace.jpg",
    featured: true,
    date: "Mar 2024 - Jul 2024",
    challenges: [
      "Implementing Operational Transformation (OT) or CRDTs to handle concurrent edits without conflicts.",
      "Optimizing WebSocket connections for efficiency to prevent server overload.",
      "Managing complex client-side state for the drawing canvas."
    ],
    architecture: "A Node.js/Express server manages WebSocket connections via Socket.io. The React frontend uses Zustand for state management and an optimized HTML5 Canvas implementation for rendering.",
    results: [
      "Supported up to 50 concurrent users in a single workspace smoothly.",
      "Achieved sub-50ms latency for drawing updates across continents.",
      "Successfully implemented robust conflict resolution for text editing."
    ],
    lessons: [
      "WebSockets require careful optimization and error handling for connection drops.",
      "State management in collaborative apps is fundamentally different from CRUD apps.",
      "Canvas rendering performance depends heavily on minimizing draw calls."
    ],
    liveUrl: "https://collab.example.com"
  }
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
