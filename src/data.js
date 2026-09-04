// ---------------- Edit this file to make the site yours ----------------

export const ROLES = ["Software Engineer", "Full-Stack Developer", "Front-End Developer"];

export const PROJECTS = [
  {
    name: "Project One",
    status: "active",
    type: "Solo Work",
    desc: "Short description of what this project does and the problem it solves. Replace with your real project copy.",
    link: "https://example.com",
  },
  {
    name: "Project Two",
    status: "active",
    type: "Team Project",
    desc: "Short description of what this project does and the problem it solves. Replace with your real project copy.",
    link: "https://github.com/yourusername/project-two",
  },
  {
    name: "Project Three",
    status: "inactive",
    type: "Solo Work",
    desc: "Short description of what this project does and the problem it solves. Replace with your real project copy.",
    link: "https://github.com/yourusername/project-three",
  },
  {
    name: "Project Four",
    status: "inactive",
    type: "Solo Work",
    desc: "A fourth project shown only after clicking 'show more'.",
    link: "https://github.com/yourusername/project-four",
  },
];
export const INITIAL_VISIBLE_PROJECTS = 3;

export const TECH_STACK = [
  "Next.js", "React", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker", "Git",
];

export const EXPERIENCE = [
   
  {
    date: "March 2026 — June 2026",
    role: "Software Engineer Intern",
    org: "Company Name",
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
    org: "Asia - Tel",
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
  name: "Leil Sanchez",
  brand: "leila",
  photo: "https://via.placeholder.com/200x200.png?text=Photo",
  location: "Bulacan, Philippines",
  status: "Open to work",
  github: "https://github.com/reira-marie",
  //linkedin: "https://linkedin.com/in/yourusername",
  x: "https://x.com/yourusername",
  email: "missleilasanchez@gmail.com",
  building: {
    title: "A multi-tenant e-commerce platform",
    desc: "An e-commerce platform any business can spin up and run — small stores, restaurants, or any company that wants to sell online without building a storefront from scratch. Each business gets its own store instance: product catalog, ordering, and payments, without needing to touch code.",
    tags: ["Multi-tenant", "Storefront builder", "Payments", "Order management"],
  },
};
