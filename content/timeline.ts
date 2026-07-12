export type MilestoneStatus = "shipped" | "now" | "ahead";

export interface Milestone {
  date: string;
  title: string;
  body: string;
  status: MilestoneStatus;
}

/**
 * The founder timeline. To add a milestone, add an entry here —
 * keep chronological order; "ahead" entries render under "What's ahead".
 */
export const milestones: Milestone[] = [
  {
    date: "May 2026",
    title: "The building year begins",
    body: "Committed to shipping products instead of polishing plans. First ideas pressure-tested, first foundations laid.",
    status: "shipped",
  },
  {
    date: "Mid 2026",
    title: "Website concepts & systems for local businesses",
    body: "Built five launch-ready sites — STERIC Painters, Meera Beauty Hair Oasis, Sechaba Urban Nation Salon, Sam Plumbing Electrical & Handyman, Patcha Properties — as one repeatable build system.",
    status: "shipped",
  },
  {
    date: "June 2026",
    title: "Built ListingForge",
    body: "Designed and shipped the MVP in a sprint: a complete listing-pack SaaS for South African agencies, working end-to-end from day one.",
    status: "shipped",
  },
  {
    date: "8 July 2026",
    title: "Paystack approved — payments live",
    body: "ListingForge verified and live with real payments: plans, checkout, webhooks. The product became a business.",
    status: "shipped",
  },
  {
    date: "July 2026",
    title: "Free tier & public launch",
    body: "Opened a free tier for solo agents and began the public marketing launch.",
    status: "now",
  },
  {
    date: "July 2026",
    title: "Jesse OS begins",
    body: "Started building the founder operating layer — an AI executive board that returns decision briefs, and tooling that scaffolds repetitive work.",
    status: "now",
  },
  {
    date: "Ahead",
    title: "First paying agency",
    body: "The milestone that matters most: a business paying because the product genuinely gives them their time back.",
    status: "ahead",
  },
  {
    date: "Ahead",
    title: "Private Property integration",
    body: "Feed-provider integration carrying listings straight from ListingForge onto South Africa’s major property portals.",
    status: "ahead",
  },
  {
    date: "Ahead",
    title: "Jesse OS v1",
    body: "The operating layer for one-person companies, opened up beyond one person.",
    status: "ahead",
  },
  {
    date: "Ahead",
    title: "The next venture",
    body: "Room deliberately left on this wall.",
    status: "ahead",
  },
];
