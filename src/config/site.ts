/**
 * Single source of truth for everything résumé-derived on the site.
 * Update this file when the CV changes and every page follows.
 */

export const siteConfig = {
  name: "Mainak Das",
  role: "Senior Full Stack Engineer",
  tagline:
    "I build fast, accessible, end-to-end type-safe products with React, Next.js and TypeScript.",
  summary:
    "Senior full stack developer with 5+ years of experience building and optimizing scalable web applications, AI-powered automation tools, and customer-facing products. I care about performance, accessibility, developer experience, and type safety that holds from the database all the way to the UI.",
  location: "Bengaluru, India",
  email: "mainakdas104@gmail.com",
  phone: "+91 760 587 3677",
  resumeUrl: "/mainak-das-resume.pdf",
  avatar: "https://github.com/dawnmd.png",
  availability: "Open to new opportunities",
  url: "https://mainak.vercel.app",
} as const;

export const socials = [
  {
    name: "GitHub",
    handle: "@DawnMD",
    href: "https://github.com/DawnMD",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "in/mainak1147",
    href: "https://www.linkedin.com/in/mainak1147/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    handle: "@mainak_ds",
    href: "https://twitter.com/mainak_ds",
    icon: "twitter",
  },
  {
    name: "Email",
    handle: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
] as const;

export type Social = (typeof socials)[number];

export const stats = [
  { label: "Years of experience", value: "5+" },
  { label: "Engineers mentored & led", value: "8" },
  { label: "Production platforms shipped", value: "6" },
] as const;

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  period: string;
  current?: boolean;
  internship?: boolean;
  summary: string;
  highlights: { title: string; body: string }[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Codemancers",
    role: "Software Developer",
    location: "Bengaluru, IN",
    start: "2021-10",
    end: "2026-02",
    period: "Oct 2021 — Feb 2026",
    summary:
      "Owned frontend architecture across several customer-facing products, led a small team, and pushed end-to-end type safety and testing into everything we shipped.",
    highlights: [
      {
        title: "Slack standup bot",
        body: "Designed and built a Slack-based standup automation platform with an audit dashboard using Next.js, TypeScript, Express, Prisma, Clerk and Slack Bolt. Established a reusable design system, end-to-end type safety, a monorepo architecture and Playwright E2E tests — improving developer productivity and release reliability.",
      },
      {
        title: "Legacy platform modernization",
        body: "Migrated a large production platform from Gatsby to Next.js and TypeScript. Improved SEO, removed duplicate data fetching, opened up CMS flexibility via Strapi, and optimized rendering with memoization and caching.",
      },
      {
        title: "Customer experience enhancements",
        body: "Shipped add-on features with React, Radix UI and Tailwind CSS, optimized through lazy loading and code splitting, and covered by Jest, Playwright and React Testing Library.",
      },
      {
        title: "Points-based redemption system",
        body: "Built a points-based rewards platform with React, Express and PostgreSQL enabling seamless customer redemption workflows, backed by comprehensive Jest and SuperTest coverage.",
      },
      {
        title: "AI sales automation",
        body: "Built backend APIs powering AI-driven sales workflows and CRM integrations with Salesforce and HubSpot — automating lead enrichment, insight generation and pipeline optimization.",
      },
      {
        title: "Leadership & collaboration",
        body: "Led a team of three engineers, ran code reviews, mentored juniors, and drove technical discussions for feature planning and architecture decisions with product and cross-functional teams.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Playwright",
      "Tailwind CSS",
    ],
  },
  {
    company: "CXDeployer",
    role: "Software Developer Intern",
    location: "Remote",
    start: "2021-08",
    end: "2021-09",
    period: "Aug 2021 — Sep 2021",
    internship: true,
    summary:
      "Built customer journey tooling and the authentication layer for a CX platform.",
    highlights: [
      {
        title: "Customer journey board",
        body: "Developed customer journey visualization and Kanban management interfaces using React and Redux Toolkit, with dynamic form validation powered by React Hook Form.",
      },
      {
        title: "User authentication",
        body: "Implemented JWT-based authentication with Express.js and MongoDB, plus frontend auth and session handling with React, Redux, local storage, session storage and cookies.",
      },
      {
        title: "UX improvements",
        body: "Made sure errors and validation messages were surfaced clearly whenever anything in the application failed.",
      },
    ],
    stack: ["React", "Redux Toolkit", "Express.js", "MongoDB", "JWT"],
  },
  {
    company: "A Plus Topper",
    role: "Frontend Developer Intern",
    location: "Remote",
    start: "2021-03",
    end: "2021-06",
    period: "Mar 2021 — Jun 2021",
    internship: true,
    summary:
      "First frontend role — connected a React interface to an existing Django backend and built the patterns the app used to talk back to its users.",
    highlights: [
      {
        title: "React ↔ Django integration",
        body: "Wired the React frontend to the Django REST API with Axios, handling loading and error states for each call so a failed request showed up in the interface instead of only in the console.",
      },
      {
        title: "Notification and modal layer",
        body: "Built reusable notification modals for confirmations, validation errors and async results, replacing one-off alerts with a single pattern the rest of the screens reused.",
      },
    ],
    stack: ["React", "JavaScript", "Django", "REST APIs", "Axios"],
  },
  {
    company: "Next Generation Technocom",
    role: "Software Developer Intern — Team Lead",
    location: "Remote",
    start: "2020-06",
    end: "2020-12",
    period: "Jun 2020 — Dec 2020",
    internship: true,
    summary:
      "Led a five-person team building an access management platform: single sign-on across data centres, directory-backed user management, and certificates for IoT devices.",
    highlights: [
      {
        title: "Single sign-on across data centres",
        body: "Ran the access management service on Kubernetes so SSO sessions stayed valid across cross-data-centre deployments, with autoscaling handling the load rather than fixed capacity.",
      },
      {
        title: "Directory-backed user management",
        body: "Built Node.js APIs over OpenLDAP covering user, group and permission operations — the create, update and deactivate flows every other part of the platform called into.",
      },
      {
        title: "Certificates for IoT devices",
        body: "Wrote Node.js APIs to generate and validate device certificates so IoT clients could authenticate to the platform without shared credentials.",
      },
      {
        title: "Leading the team",
        body: "Led a team of five — splitting the work, reviewing code and keeping the moving pieces aligned. First time leading engineers rather than just shipping alongside them.",
      },
    ],
    stack: ["Node.js", "Kubernetes", "OpenLDAP", "SSO", "REST APIs"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href?: string;
  repo?: string;
  year: string;
  featured?: boolean;
  highlights: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Better Journal",
    tagline:
      "Private journaling with search, a calendar and a writing dashboard",
    description:
      'A journaling app built around the question "what did I actually write this year?" — a rich-text editor with autosave, full-text search across every entry, a month/week/day calendar of what was written when, and a dashboard that turns a year of writing into streaks, a contribution heatmap and word counts.',
    href: "https://better-journal.vercel.app",
    repo: "https://github.com/DawnMD/better-journal",
    year: "2026",
    featured: true,
    highlights: [
      "End-to-end typed RPC with oRPC over Prisma 7 and PostgreSQL — the client imports the router type, never the implementation, so a renamed field is a compile error at the call site rather than a runtime surprise.",
      "Authorization expressed as a query predicate instead of a check on the result: ownership lives in the WHERE clause, so there is one round trip and no window in which a resource can change hands between the check and the write.",
      "Timezone-correct day bucketing — the reader's zone is an explicit input and every day boundary goes through one helper, so a note written at 02:00 IST files under the right date instead of the previous one.",
      "A month/week/day calendar backed by a single capped range query, with the selected day and view derived from the URL so back/forward navigates it and a day view is linkable.",
      "Postgres full-text search via a generated tsvector column and GIN index — stemming, ranking and highlighted snippets with no second datastore to run or sync.",
      "226 Vitest tests against a real Postgres rather than a mocked Prisma client, covering cross-tenant access, DST-boundary day windows and search ranking, with lint → typecheck → test → build in CI on every push.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "oRPC",
      "Prisma 7",
      "PostgreSQL",
      "Clerk",
      "TanStack Query",
      "Plate",
      "Vitest",
    ],
  },
  {
    name: "Tutor OS",
    tagline: "Multi-tenant SaaS for tuition & coaching centers",
    description:
      "A production multi-tenant platform where owners run their centre — fees, attendance, exams, notes — and students get their own scoped view of the same data.",
    href: "https://tutor-os-xi.vercel.app",
    repo: "https://github.com/DawnMD",
    year: "2026",
    featured: true,
    highlights: [
      "Architected on Next.js 16 (App Router, React 19), TypeScript, oRPC and Prisma 7 over PostgreSQL (Neon) — end-to-end type safety from database to UI with no hand-written API types or fetch clients.",
      "Organization-based multi-tenancy and RBAC (owner/admin vs. student) via Clerk, enforced at both the page and RPC layers, with role-branched routing that reuses shared routes and components.",
      "Fee management with dues computed on the fly and never materialized, keeping owner and student views consistent — plus Razorpay payments with signature-verified webhooks.",
      "Attendance tracking, session logging, exam grading and role-specific KPI dashboards with trend charts (Recharts), and a notes system with file attachments via UploadThing.",
      "Server-first architecture: React Server Components, server-only auth guards and query prefetching.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "oRPC",
      "Prisma 7",
      "PostgreSQL",
      "Clerk",
      "Razorpay",
      "Recharts",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Gatsby",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Headless UI",
      "TanStack Query",
      "Redux",
      "Zustand",
      "Jotai",
      "tRPC",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
      "REST APIs",
      "tRPC",
      "oRPC",
      "Prisma",
      "Django",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Prisma ORM", "Drizzle ORM", "MongoDB"],
  },
  {
    title: "Testing",
    items: [
      "Jest",
      "React Testing Library",
      "Playwright",
      "Vitest",
      "SuperTest",
    ],
  },
  {
    title: "Tools & platforms",
    items: [
      "Salesforce",
      "HubSpot",
      "Slack Bolt",
      "Bull.js",
      "Strapi CMS",
      "Git",
      "Netlify",
      "AWS EC2",
      "AWS S3",
      "Kubernetes",
      "OpenLDAP",
    ],
  },
  {
    title: "Also",
    items: [
      "AI/ML integration",
      "Automation",
      "Performance optimization",
      "Accessibility",
    ],
  },
] as const;

/** Short list used for the scrolling marquee on the home page. */
export const marqueeSkills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "tRPC",
  "oRPC",
  "Tailwind CSS",
  "Playwright",
  "TanStack Query",
  "AWS",
] as const;

export const education = {
  degree: "B.Tech, Computer Science Engineering",
  institution: "Adamas University, Kolkata",
  year: "2021",
} as const;

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Testimonials", href: "/testimonials" },
] as const;
