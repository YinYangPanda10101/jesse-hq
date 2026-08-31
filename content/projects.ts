export type ProjectStatus = "Live" | "In development" | "Shipped" | "Ongoing";

export interface Project {
  slug: string;
  name: string;
  kicker: string;
  status: ProjectStatus;
  problem: string;
  solution: string;
  outcome: string;
  visual: "listingforge" | "jesse-os" | "websites" | "automation";
  /** Live links — only add once the destination is real and presentable. */
  links?: { label: string; href: string }[];
}

/**
 * Flagship case study. ListingForge gets a fuller treatment than the
 * other exhibits — it is the primary proof on the site.
 * Facts only: nothing here should imply revenue or paying customers
 * until they exist.
 */
export const flagship = {
  slug: "listingforge",
  name: "ListingForge",
  kicker: "2026 · SaaS — Real Estate",
  status: "Live" as const,
  proofPoints: [
    "Publishes direct to Property24 & Private Property",
    "Built with live payments",
    "Designed for South African estate agencies",
    "Free tier available",
  ],
  whatItSolves:
    "Every mandate demands a small mountain of writing — descriptions, portal text, social posts, brochures. ListingForge turns the property details an agent already has into a complete, ready-to-publish marketing pack in minutes.",
  whoItHelps:
    "South African estate agencies and the solo agents inside them. Priced in rand, paid through Paystack, and built around how listings actually get published here — straight onto Property24 and Private Property, plus WhatsApp and print.",
  whyItMatters:
    "The hours agents spend producing marketing are hours not spent with sellers and buyers mid-move. Every pack generated hands an afternoon back to the person guiding the transition.",
  produces: [
    "Listing descriptions",
    "Portal copy",
    "Social captions",
    "WhatsApp messages",
    "Client emails",
    "SEO copy",
    "Brochure copy",
  ],
  currentStatus: [
    "Live product",
    "Paystack approved",
    "Private Property integration live in production",
    "Property24 integration vetted and approved",
    "Onboarding first agencies",
  ],
  nextMilestone: "10 paying agencies",
  /** Real captures from Jesse's own ListingForge account. */
  screenshots: [
    {
      label: "Dashboard",
      src: "/screenshots/dashboard.png",
      width: 2490,
      height: 1402,
      alt: "ListingForge dashboard showing listings, pipeline, pack usage and portal distribution",
    },
    {
      label: "Listing creation wizard",
      src: "/screenshots/wizard.png",
      width: 2481,
      height: 1388,
      alt: "ListingForge listing creation wizard with property details and portal import",
    },
    {
      label: "Generated marketing pack",
      src: "/screenshots/marketing-pack.png",
      width: 2395,
      height: 1395,
      alt: "A generated ListingForge marketing pack: headlines, descriptions, feature bullets, social captions and WhatsApp message",
    },
    {
      label: "PDF brochure output",
      src: "/screenshots/brochure.png",
      width: 2476,
      height: 1407,
      alt: "ListingForge branded print-ready PDF brochure for a property listing",
    },
  ],
  links: [
    { label: "www.listingforge.co.za", href: "https://www.listingforge.co.za" },
    { label: "hello@listingforge.co.za", href: "mailto:hello@listingforge.co.za" },
  ],
};

export const projects: Project[] = [
  {
    slug: "jesse-os",
    name: "Jesse OS",
    kicker: "2026 · Personal Infrastructure",
    status: "In development",
    problem:
      "A solo founder is an entire company in one chair — strategy, engineering, marketing, finance, support. Every hat costs a context switch, and the switching is where the day quietly disappears.",
    solution:
      "Jesse OS is the operating layer for a one-person company: an AI executive board that argues a decision from six seats and returns a single brief, plus tooling that scaffolds the repetitive parts of new work. Software as staff.",
    outcome:
      "The agent board runs today; the rest of the OS comes online as each piece earns its place. Everything ListingForge teaches feeds back into it.",
    visual: "jesse-os",
  },
  {
    slug: "website-systems",
    name: "Website Concepts & Systems",
    kicker: "2026 · Company & Personal Websites",
    status: "Ongoing",
    problem:
      "Most companies are either invisible online or trapped in an outdated site nobody can update — the painters, salons and plumbers that hold neighbourhoods together, but established businesses too. Traditional agencies quote them out of reach and hand back something they can’t maintain.",
    solution:
      "Fast, focused websites built as one repeatable system — concept and production builds for STERIC Painters, Meera Beauty Hair Oasis, Sechaba Urban Nation Salon, Sam Plumbing Electrical & Handyman, and Patcha Properties. WhatsApp-first booking, because that’s where their customers already are.",
    outcome:
      "Five complete, launch-ready builds and a system that gets faster and sharper with each one — a repeatable production line, not a portfolio of one-offs. That system is now open: I build and rebuild sites for companies and founders who want something fast, considered, and theirs to keep.",
    visual: "websites",
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    kicker: "Ongoing · Systems & Workflows",
    status: "Ongoing",
    problem:
      "Most AI adoption adds noise: more drafts, more dashboards, more things to review. The repetitive work survives — it just gets a chat window bolted onto it.",
    solution:
      "Purpose-built automations that delete work instead of decorating it: prompt systems, content pipelines, and workflows judged by a single number — minutes given back.",
    outcome:
      "The quiet practice that powers everything else on this page. It’s how one person ships like a team.",
    visual: "automation",
  },
];
