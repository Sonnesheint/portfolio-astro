export interface MiniCase {
  tag: string;
  companyYear: string;
  title: string;
  desc1: string;
  desc2?: string;
  skills: string[];
  industry: string;
  asideLabel?: string;
  asideValue?: string;
}

export const MINI_CASES: MiniCase[] = [
  {
    tag: "Fintech",
    companyYear: "Santander Bank Polska · 2014–2024",
    title: "10 years. 3M users. One plain language certificate.",
    desc1: "A decade of UX writing for a mobile banking app — from copywriter to content lead. Building editorial standards, a translation framework for five languages, and earning a Plain Language Certificate while navigating legal and compliance at every step.",
    desc2: "Led content for a mobile banking app with 3M active users. Managed 3,000+ translation keys across 5 languages (PL, EN, UA, RU, ES).",
    skills: ["UX writing", "Plain language", "Localization", "Content systems", "Tone of voice"],
    industry: "Digital banking",
    asideLabel: "Context",
    asideValue: "Mobile banking app · 3M active users · 5 languages",
  },
  {
    tag: "Retail",
    companyYear: "Hebe · 2023",
    title: "Poland's second-largest cosmetics retailer, end-to-end.",
    desc1: "End-to-end UX writing for a retail digital product — app and web flows, onboarding, checkout, and tone of voice alignment across touchpoints.",
    desc2: "The challenge: the digital experience had grown organically, and the copy reflected that — inconsistent tone, unclear flows, checkout friction that users felt but couldn't name.",
    skills: ["Tone of voice", "App copy", "Checkout flows", "Push notifications", "Loyalty copy"],
    industry: "Retail / Beauty E-commerce",
    asideLabel: "Context",
    asideValue: "Mobile app + web platform redesign",
  },
  {
    tag: "Leisure",
    companyYear: "Park of Poland · 2023",
    title: "Europe's biggest tropical water park. Every sign, flow, and ticket.",
    desc1: "Content design for one of Poland's largest entertainment destinations — ticketing flows, wayfinding microcopy, and visitor communication across the full digital journey.",
    desc2: "The copy had to work for a wide audience: families with small children, international visitors, group bookings, and season-pass holders. Clarity was the priority.",
    skills: ["Ticketing flows", "Wayfinding copy", "App microcopy", "Visitor comms"],
    industry: "Leisure / Hospitality",
    asideLabel: "Audience",
    asideValue: "Families, international visitors, groups",
  },
  {
    tag: "E-commerce",
    companyYear: "Allegro · [ROK]",
    title: "[TYTUŁ — maks. 8 słów]",
    desc1: "[OPIS — jeden akapit, co robiłeś i jaki był problem]",
    desc2: "[OPIS — drugi akapit, wynik lub kluczowa decyzja]",
    skills: ["UX writing", "Content systems", "Localization"],
    industry: "E-commerce",
    asideLabel: "Context",
    asideValue: "[np. Marketplace · 22M users · checkout redesign]",
  },
  {
    tag: "Media",
    companyYear: "Onet · [ROK]",
    title: "[TYTUŁ — maks. 8 słów]",
    desc1: "[OPIS — jeden akapit]",
    skills: ["Push notifications", "Paywall copy", "Editorial UX"],
    industry: "Media / Publishing",
    asideLabel: "Context",
    asideValue: "[np. Mobile app · 13M readers · paywall redesign]",
  },
  {
    tag: "FMCG",
    companyYear: "Śnieżka · [ROK]",
    title: "[TYTUŁ — maks. 8 słów]",
    desc1: "[OPIS — jeden akapit]",
    skills: ["Configurator copy", "Product descriptions", "Localization"],
    industry: "FMCG / Consumer goods",
    asideLabel: "Context",
    asideValue: "[np. Color configurator · 3 markets (PL/SK/UA)]",
  },
];
