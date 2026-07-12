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

export const projects: Project[] = [
  {
    slug: "listingforge",
    name: "ListingForge",
    kicker: "2026 · SaaS — Real Estate",
    status: "Live",
    problem:
      "A property listing doesn’t sell on photos alone. It needs a description, social posts, brochure copy, portal text — and agents write all of it by hand, for every mandate, week after week. The hours go to admin. The people — sellers mid-move, buyers mid-decision — get whatever attention is left over.",
    solution:
      "ListingForge turns a property’s details into a complete, ready-to-publish listing pack in minutes. Built for South African agencies and priced for them, with payments through Paystack. It ships with a pact, not just a feature list: never spammy, never manipulative, never bloated.",
    outcome:
      "Live and taking payments, with a free tier for solo agents and agencies onboarding now. The measure of success isn’t listings generated — it’s the afternoon an agent gets back.",
    visual: "listingforge",
    links: [
      { label: "www.listingforge.co.za", href: "https://www.listingforge.co.za" },
      { label: "hello@listingforge.co.za", href: "mailto:hello@listingforge.co.za" },
    ],
  },
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
    name: "Website Systems",
    kicker: "2026 · Local Business Web",
    status: "Shipped",
    problem:
      "Painters, salons, plumbers — the businesses that hold neighbourhoods together — are either invisible online or trapped in outdated sites nobody can update. Traditional agencies quote them out of reach.",
    solution:
      "Fast, handsome, single-purpose websites built as a repeatable system: STERIC Painters, Meera Beauty Hair Oasis, Sechaba Urban Nation Salon, Sam Plumbing Electrical & Handyman, Patcha Properties. WhatsApp-first booking, because that’s where their customers already are.",
    outcome:
      "Five businesses with a real front door on the internet — and a build system that gets faster and sharper with every site it produces.",
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
