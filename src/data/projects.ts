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
    meta: "Flying Bisons · 2024",
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
    category: "AI / Tooling",
    meta: "Flying Bisons · 2024",
    title: "Can you replace the entire team with one button?",
    description: "I build the workflow. I tested it. Here is my conclusion.",
    stats: [
      { value: "40+" },
      { label: "hours saved / month" },
      { label: "minutes vs. multi-day cycle" },
    ],
  },
  {
    href: "/case-study-constellr",
    category: "Deep Tech",
    meta: "Constellr · 2024",
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
    category: "Deep Tech",
    meta: "Personal project · 2025",
    title: "I built the house I live in",
    description:
      "A UX writer who builds his own portfolio from scratch — no templates, no no-code tools. Just HTML, CSS, JavaScript, Git, Netlify, and Cloudflare.",
    stats: [
      { value: "1 solo owner" },
      { label: "0 templates" },
      { label: "100% decisions documented" },
    ],
  },
];
