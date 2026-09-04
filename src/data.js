// ---------------- Edit this file to make the site yours ----------------

export const ROLES = ["Software Engineer", "Full-Stack Developer", "Front-End Developer"];

export const PROJECTS = [
  {
    name: "Small Business Ordering System",
    status: "active",
    type: "Solo Work",
    desc: "A full-stack ordering and POS system for a local lechon manok business. Built with Laravel 11 (REST API, session auth, role-based access control, rate limiting, email verification via Brevo SMTP) and React 19 (SPA, React Router, custom hooks, localStorage cart). Features a customer ordering flow with real-time stock tracking, GCash/Maya/cash checkout, an admin dashboard for inventory and carousel management, and a walk-in staff POS — all backed by PostgreSQL on Supabase.",
    link: "https://github.com/reira-marie/mama-thiks-lechon-manok",
  },
  {
    name: "My Page",
    status: "active",
    type: "Solo Work",
    desc: "A personal notebook app built with React 19, Tailwind CSS v4, and Supabase — styled like a real spiral notebook — where you track movies, books, series, and anime, set time-locked goals, log focus sessions, and get AI-powered or randomized media picks via Gemini, TMDB, and Open Library.",
    link: "https://github.com/yourusername/project-two",
  },
  {
    name: "Gaia: Community-Driven Composting with IoT for Smart Food Waste Management",
    status: "inactive",
    type: "Team Project",
    desc: "A full-stack web application built for San Ildefonso's Municipal Environment and Natural Resources Office (MENRO) to digitize and streamline community composting operations. The system features role-based portals for Super Admins, Municipal Admins, and Barangay Admins — each with scoped access to dashboards, bin tracking and requests, collection scheduling, group management, compost donation tracking, and report generation. Built with React and Firebase (Auth, Firestore, Storage), with audit trail logging, protected routes, and role-based access control across all portals.",
    //link: "https://github.com/yourusername/project-three",
  },
  // {
  //   name: "Project Four",
  //   status: "inactive",
  //   type: "Solo Work",
  //   desc: "A fourth project shown only after clicking 'show more'.",
  //   link: "https://github.com/yourusername/project-four",
  // },
];
export const INITIAL_VISIBLE_PROJECTS = 2;

export const TECH_STACK = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "Java", "C#", "Dart", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "React Native", "Flutter", "FlutterFlow", "Laravel", "Tailwind CSS", "Node.js"],
  },
  {
    category: "Databases & Back-End",
    items: ["PostgreSQL", "MongoDB", "Firestore", "Firebase", "Supabase", "REST APIs", "PayMongo API"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Microsoft Azure", "Docker", "Git", "GitHub", "CI/CD"],
  },
  {
    category: "Tools & Other",
    items: ["VS Code", "Kiro", "Figma", "OWASP ZAP", "IoT", "Arduino", "ESP32", "Agile", "SDLC", "Project Management"],
  },
];


export const EXPERIENCE = [
   
  {
    date: "March 2026 — May 2026",
    role: "Software Engineer Intern",
    org: "Software Development Company",
    desc: "Worked across the SDLC on a 4-person engineering team, from manual testing and security checks to building internal tools. Ran QA testing that cut production defects by 40%, performed penetration testing with OWASP ZAP to catch security vulnerabilities, and built a WordPress job portal and a C# payroll system that digitized HR workflows for 50+ employees.",
  },
  {
    date: "November 2025 — February 2026",
    role: "IT Support",
    org: "Pickup Coffee",
    desc: "Kept store operations running by managing IT assets and troubleshooting hardware, software, and POS systems (Mosaic, Xilnex) across multiple locations. Led an inventory organization project that reduced stock discrepancies and maintained 100% uptime on internal systems.",
  },
  {
    date: "June 2026 — September 2026",
    role: "Amazon Account Assitant Manager",
    org: "Filmlagune",
    desc: "Handled backend operations for Amazon product listings — resolving support tickets, managing flat file data, and ensuring account security and policy compliance.",
  }
];

export const CERTIFICATIONS = [
  { name: "Foundational C# with Microsoft", issuer: "Microsoft, 2026" },
  { name: "SC-900: Security, Compliance, and Identity Fundamentals", issuer: "Microsoft, 2025" },
  //{ name: "Certification Name", issuer: "Issuing Org, 2024" },
];

export const EDUCATION = [
  {
    date: "2022 — 2026",
    role: "B.S. in Information Technology",
    org: "National University",
    desc: "GPA, honors, relevant coursework, or a one-line highlight — replace with your details.",
  },
];

export const BLOGS = [
  { date: "Jan 2026", title: "Blog Post Title Goes Here", excerpt: "One-line teaser describing what the post covers.", link: "#" },
  { date: "Dec 2025", title: "Another Blog Post Title", excerpt: "One-line teaser describing what the post covers.", link: "#" },
  { date: "Nov 2025", title: "A Third Blog Post Title", excerpt: "One-line teaser describing what the post covers.", link: "#" },
];

export const PROFILE = {
  name: "Leila Sanchez",
  brand: "leila",
  photo: "/photo.png",
  location: "Bulacan, Philippines",
  status: "Open to work",
  github: "https://github.com/reira-marie",
  //linkedin: "https://linkedin.com/in/yourusername",
  // x: "https://x.com/yourusername",
  email: "missleilasanchez@gmail.com",
  building: {
    title: "A multi-tenant e-commerce platform",
    desc: "An e-commerce platform any business can spin up and run — small stores, restaurants, or any company that wants to sell online without building a storefront from scratch. Each business gets its own store instance: product catalog, ordering, and payments, without needing to touch code.",
    tags: ["Multi-tenant", "Storefront builder", "Payments", "Order management"],
  },
};
