export interface MiniCase {
  tag: string;
  companyYear: string;
  title: string;
  desc1: string;
  desc2?: string;
  desc3?: string;
  skills: string[];
  industry: string;
  asideLabel?: string;
  asideValue?: string;
  caseLink?: string;
}

export const MINI_CASES: MiniCase[] = [
  {
    tag: "Fintech",
    companyYear: "Santander Bank Polska · 2024",
    title: "Plain language certificate for Poland's second-largest bank.",
    desc1: "I pushed for this certification, ran the process from start to finish, and collected the certificate on behalf of the bank. That meant coordinating the teams gathering app strings, working directly with the certifying institution, and building a statistically valid 400-item sample from 6,000+ texts across the app.",
    desc2: "The certificate was issued by the Plain Polish Lab at the University of Wrocław — a team of linguists and communication researchers whose scoring system assesses 10 language features simultaneously, making it the most comprehensive plain language evaluation tool of its kind. Santander Bank Polska is now one of the few Polish banks with external proof they write clearly for their customers.",
    desc3: "This matters beyond language. Research consistently shows a direct link between plain language and NPS — clearer writing means users trust the product more, get stuck less, and recommend it more often.",
    skills: ["Plain language", "Content audit", "Cross-team coordination", "Total ownership"],
    industry: "Digital banking",
    asideLabel: "Context",
    asideValue: "Santander mobile app · 3M active users · external certification",
  },
  {
    tag: "Retail",
    companyYear: "Hebe · 2025",
    title: "Driven by intuition.",
    desc1: "Sometimes the brief simply isn't enough. Do you like it when someone you're paying does exactly what you asked — and nothing more? Neither does your client. And you're the expert. They hired you because they don't know what they don't know.",
    desc2: "A major Polish cosmetics retailer brought me in to review post-purchase surveys — online and in-store. I delivered what was asked. Then I kept going. The copy had inconsistencies the client hadn't noticed. I drafted a tone of voice framework on the spot and rewrote the survey's validation messages from scratch. Both landed. This client appreciated the thinking behind it — not just the output. Not all of them will. But when they do, they really do.",
    desc3: "The lesson: if you're the expert in the room, act like one. Question the brief. Take initiative.",
    skills: ["UX writing", "Survey copy", "Tone of voice", "Content audit"],
    industry: "Retail / Beauty",
    asideLabel: "Context",
    asideValue: "Post-purchase surveys · online and in-store",
  },
  {
    tag: "Leisure",
    companyYear: "Park of Poland · 2025",
    title: "Maintaining content infrastructure for Europe's biggest tropical water park.",
    desc1: "Some projects are about making sure nothing breaks. I had one job: make sure every visitor always knew where to go and what to do.",
    desc2: "I managed the full content design infrastructure for Park of Poland across three languages: Polish, English, and Ukrainian. That meant owning promotions, special offers, ticketing flows, and microcopy across the website and booking system.",
    desc3: "Real UX writing support means someone takes ownership. Keeps standards high and makes sure nothing quietly goes wrong.",
    skills: ["Content design", "Microcopy", "Copywriting", "TMS", "Content system maintenance"],
    industry: "Leisure / Entertainment",
    asideLabel: "Context",
    asideValue: "Website · ticketing system · 3 languages (PL, EN, UA)",
  },
  {
    tag: "FMCG",
    companyYear: "NDA · 2025",
    title: "I used AI to build a plugin that saved 67 hours of manual work.",
    desc1: "A compliance request landed on my desk: replace one word across an entire e-commerce app — hundreds of screens, 9 massive Figma files. Estimated manually: 67 hours. I built a custom Figma plugin instead and finished in 3.",
    desc2: "The game changer was intelligent grouping — the same word appearing 100 times became one input field. One decision, applied everywhere. The plugin also exported a full DOCX audit trail with direct links to every changed frame in Figma — exactly what legal and compliance needed.",
    desc3: "Delivered ahead of time. Total plugin development: 2 hours with AI assistance.",
    skills: ["Figma plugin development", "Content ops", "AI-assisted tooling", "Compliance documentation"],
    industry: "FMCG / E-commerce",
    asideLabel: "Context",
    asideValue: "9 Figma files · mass content change · full audit trail · NDA client",
    caseLink: "/case-study-fmcg-plugin",
  },
];
