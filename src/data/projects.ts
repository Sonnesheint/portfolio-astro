export interface Project {
  href: string;
  category: string;
  meta: string;
  title: string;
  description: string;
  stats: { value?: string; label: string }[];
}

export const PROJECTS: Project[] = [
  {
    href: "/case-study-figma",
    category: "AI / Tooling",
    meta: "Flying Bisons · 2025",
    title: "Devs hate him. He built a Figma plugin alone",
    description:
      "Built a Figma plugin from scratch — no prior JS experience — that lets designers produce review-ready microcopy independently. 86 iterations in 60 days.",
    stats: [
      { value: "86 iterations" },
      { label: "10–15 daily users" },
      { label: "60 days" },
    ],
  },
  {
    href: "/case-study-ai",
    category: "AI / Content Automation",
    meta: "Flying Bisons · 2025",
    title: "Can you replace the entire team with one button?",
    description: "I build the workflow. I tested it. Here is my conclusion.",
    stats: [
      { value: "40+" },
      { label: "hours saved / month" },
      { label: "minutes vs. multi-day cycle" },
    ],
  },
  {
    href: "/case-study-fmcg-plugin",
    category: "FMCG / Content Ops",
    meta: "NDA · 2025",
    title: "I used AI to build a plugin that saved 67 hours of manual work.",
    description:
      "Legal flagged a word used across 9 Figma files. I built a plugin to find, review, replace, and document every instance — with a full audit trail for compliance.",
    stats: [
      { value: "Weeks → hours" },
      { label: "9 files processed" },
      { label: "Full audit trail" },
    ],
  },
  {
    href: "/case-study-constellr",
    category: "Deep Tech",
    meta: "Constellr · 2025",
    title: "Even rocket science can be written simply",
    description:
      "Interface copy for a B2B Earth observation platform. Plain language as precision — not simplification.",
    stats: [
      { label: "Interface copy" },
      { label: "Onboarding" },
      { label: "Error states" },
    ],
  },
  {
    href: "/case-study-portfolio",
    category: "Personal project",
    meta: "Personal project · 2026",
    title: "Can you build a portfolio website in 5 minutes?",
    description:
      "One UX Writer. Two AI tools. Zero Figma. A full production stack — and a 10-year procrastination problem finally solved.",
    stats: [
      { value: "59%" },
      { label: "codebase reduction after Astro migration" },
      { label: "0 templates used" },
    ],
  },
];
