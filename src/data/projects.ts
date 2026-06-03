export interface ResultItem {
  number: string;
  desc: string;
}

export interface Project {
  href: string;
  category: string;
  meta: string;
  year: number;
  title: string;
  description: string;
  featured?: boolean;
  image?: string;
  imagePosition?: string;
  stats: { value?: string; label: string }[];
  results?: [ResultItem, ResultItem, ResultItem];
}

export const PROJECTS: Project[] = [
  {
    href: "/case-study-figma",
    featured: true,
    category: "AI / Tooling",
    meta: "Flying Bisons · 2025",
    year: 2025,
    image: "/images/case_studies/figma-cs-1 (1).png",
    imagePosition: "center top",
    title: "UX writers hate him. He gave designers a writing tool and…",
    description:
      "I built a Figma plugin from scratch. It took me 60 days and 86 iterations. Literally zero JavaScript experience.  Designers can now produce review-ready microcopy independently.",
    stats: [
      { value: "86 iterations" },
      { label: "10–15 daily users" },
      { label: "60 days" },
    ],
    results: [
      { number: "86",   desc: "iterations over 60 days" },
      { number: "5–10", desc: "designers using it daily" },
      { number: "12",   desc: "languages in the translation module" },
    ],
  },
  {
    href: "/case-study-ai",
    category: "AI / Content Automation",
    meta: "Flying Bisons · 2025",
    year: 2025,
    image: "/images/case_studies/make_com_workflow.png",
    imagePosition: "center",
    title: "Can you replace the entire team with one button?",
    description: "I build the workflow. I tested it. Here is my conclusion.",
    stats: [
      { value: "40+" },
      { label: "hours saved / month" },
      { label: "minutes vs. multi-day cycle" },
    ],
    results: [
      { number: "40+",   desc: "hours saved per month" },
      { number: "2 min", desc: "vs. multi-day production cycle" },
      { number: "v1.0",  desc: "with clear roadmap for expansion" },
    ],
  },
  {
    href: "/case-study-fmcg-plugin",
    category: "FMCG / Content Ops",
    meta: "NDA · 2025",
    year: 2025,
    image: "/images/case_studies/fmcg-content-ops.png",
    imagePosition: "center",
    title: "I used AI to build a plugin that saved 67 hours of manual work.",
    description:
      "Legal flagged a word used across 9 Figma files. I built a plugin to find, review, replace, and document every instance — with a full audit trail for compliance.",
    stats: [
      { value: "Weeks → hours" },
      { label: "9 files processed" },
      { label: "Full audit trail" },
    ],
    results: [
      { number: "67 hours", desc: "saved vs original estimation" },
      { number: "9 files",  desc: "searched and processed simultaneously" },
      { number: "~96%",     desc: "faster vs manual job" },
    ],
  },
  {
    href: "/case-study-constellr",
    featured: true,
    category: "Deep Tech",
    meta: "Constellr · 2025",
    year: 2025,
    image: "/images/case_studies/constellr/constellr-main.png",
    imagePosition: "center",
    title: "Even rocket science can be explained simply.",
    description:
      "I delivered the complete copy for the redesigned constellr.com. Every page is now written as strategic content.",
    stats: [
      { label: "Interface copy" },
      { label: "Onboarding" },
      { label: "Error states" },
    ],
    results: [
      { number: "0 of 9",        desc: "direct competitors combined plain language with an institutional audience — Constellr was the first" },
      { number: "Content-first", desc: "workflow adopted from day one — copy drove design, not the other way around" },
      { number: "Extra mile",    desc: "client noted the team went beyond contract scope to deliver strategic quality" },
    ],
  },
  {
    href: "/case-study-portfolio",
    category: "Personal project",
    meta: "Personal project · 2026",
    year: 2026,
    image: "/images/case_studies/portfolio/wireframes-sketch.png",
    imagePosition: "center",
    title: "Can you build a portfolio website in 5 minutes?",
    description:
      "One UX Writer. Two AI tools. Level 10 Demon of Procrastination — final battle.",
    stats: [
      { value: "59%" },
      { label: "codebase reduction after Astro migration" },
      { label: "0 templates used" },
    ],
    results: [
      { number: "59%",  desc: "reduction in codebase size after migrating to Astro — no optimisation, just the right tool" },
      { number: "One",  desc: "solo owner — from discovery to maintenance" },
      { number: "Zero", desc: "templates, builders, or frameworks used in v1" },
    ],
  },
];
