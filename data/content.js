// ═══════════════════════════════════════════════════════════════
//  EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
//  All personal info lives here — nothing else needs to change.
// ═══════════════════════════════════════════════════════════════

export const content = {
  // ─── BASIC INFO ─────────────────────────────────────────────
  name: "Rohan Singh",
  role: "Full-Stack Developer",
  location: "South Jakarta, ID",
  timezone: "Asia/Jakarta",
  availability: "open", // "open" | "booked" | "closed"

  // Path to profile photo in /public. Set to null to hide it.
  profileImage: "/profile.jpg",

  // ─── HERO ───────────────────────────────────────────────────
  // Two-part headline. The second part gets the neon accent.
  headline: {
    lead: "I build web apps",
    accent: "and teach people how to build them.",
  },
  tagline:
    "Computer Science undergrad at BINUS University. I work across the stack with Next.js, TypeScript, and Postgres, and I spend my off-hours teaching kids how to code. Based in Jakarta and open to internships and freelance work.",

  // ─── ABOUT ──────────────────────────────────────────────────
  about: [
    "I'm a Computer Science student at Bina Nusantara University, building full-stack web software and teaching younger students how to code. Most of my work sits at the intersection of engineering and education.",
    "My recent focus has been LearnZet — a school e-learning platform I co-built in a 3-person Scrum team, covering learning materials, assignments, attendance, and a discussion forum. Alongside that, I taught programming fundamentals for a year at KodeKiddo Cirebon.",
    "Outside coursework I explore blockchain through BINUS's crypto club and stay active in HIMTI, our CS student association. Always looking for interesting problems to work on.",
  ],

  meta: [
    { label: "Focus", value: "Full-stack web, ed-tech" },
    { label: "Stack", value: "Next.js, TS, Postgres" },
    { label: "Based", value: "Jakarta" },
    { label: "Education", value: "BINUS · CS · GPA 3.18" },
  ],

  // ─── SELECTED WORK ──────────────────────────────────────────
  // Add more projects here as you ship them — copy any block below.
  projects: [
    {
      year: "2026",
      client: "Team project · Scrum",
      title: "LearnZet — internal e-learning platform for schools",
      description:
        "Full-stack platform I co-built with two teammates in Scrum for internal school use. Covers learning material management, assignment submission and grading, attendance tracking, and a discussion forum, with role-based access for four user types (Super Admin, School Admin, Teacher, Student). Usability tested with 45 admins, teachers, and students.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      link: "https://github.com/naiseerohan-cmd/LEARNZET",
    },
    {
      year: "2025–26",
      client: "KodeKiddo Cirebon · Internship",
      title: "Coding instructor for school-age students",
      description:
        "Taught programming fundamentals to school-age students through structured, hands-on classes for a year. Guided them through their own coding projects and adapted explanations to different age groups and skill levels.",
      stack: ["Teaching", "Curriculum", "Mentoring"],
      link: "#",
    },
  ],

  // ─── STACK ──────────────────────────────────────────────────
  // Grouped so it reads like a real toolkit, not a keyword dump.
  stack: [
    {
      group: "Building with",
      items: ["TypeScript", "Next.js", "React", "JavaScript"],
    },
    {
      group: "Data & tools",
      items: ["PostgreSQL", "Prisma ORM", "Git", "GitHub"],
    },
    {
      group: "Also code in",
      items: ["Java", "Python", "C++"],
    },
    {
      group: "Curious about",
      items: ["Blockchain", "Web3", "Ed-tech"],
    },
  ],

  // ─── CONTACT ────────────────────────────────────────────────
  email: "rohan.singh@binus.ac.id",
  socials: [
    { label: "GitHub", url: "https://github.com/naiseerohan-cmd" },
    { label: "LinkedIn", url: "https://linkedin.com/in/rohan-singh26" },
  ],
};
