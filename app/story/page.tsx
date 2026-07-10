import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Why I Build",
  description:
    "Selling a home is never really about a home. The founder story behind ListingForge — told in chapters, not a CV.",
};

const chapters: { numeral: string; title: string; body: string[] }[] = [
  {
    numeral: "I",
    title: "The observation",
    body: [
      "A home changes hands because a life is changing shape. A family growing. A couple separating. A career pulling someone across the country. Behind every mandate is a person mid-transition, needing someone steady beside them.",
      "And the professional meant to be that steady presence? Buried. Listing copy, portal descriptions, social posts, brochures — a small media company’s worth of output, produced by hand, for every single property. The most human job in the industry had quietly become one of the most administrative.",
      "That gap — between what the work is for and what the work had become — is where everything I build begins.",
    ],
  },
  {
    numeral: "II",
    title: "Built from hunger, not privilege",
    body: [
      "No inherited network. No seed round waiting on a family friend. What I had was time, stubbornness, and an internet connection — so I taught myself to build, and treated shipping as the only credential that counts.",
      "Hunger turns out to be a design principle. When you can’t afford to build the wrong thing, you learn to listen harder, cut deeper, and ship sooner. Every product I make carries that discipline: no bloat, because bloat is a luxury; no vanity features, because vanity doesn’t pay for itself.",
    ],
  },
  {
    numeral: "III",
    title: "The pact",
    body: [
      "ListingForge exists to give agents their hours back — a complete listing pack in minutes instead of an evening. But before scaling it, I wrote down what it would never become: never spammy, never manipulative, never bloated.",
      "That document isn’t marketing. It’s a constraint I’ve asked to be held to. Products inherit the values of the person who builds them, so the values came first, in writing, while the product was still small enough to be shaped by them.",
    ],
  },
  {
    numeral: "IV",
    title: "Systems that compound",
    body: [
      "Alongside the product came the practice: websites for a painter, two salons, a plumber, a property outfit — businesses that hold neighbourhoods together, built into a system that gets faster with every site. Then Jesse OS, the operating layer that lets one person run like a team.",
      "None of these are side quests. Each build teaches the next one. Excellence compounds the same way interest does — quietly, and then suddenly.",
    ],
  },
  {
    numeral: "V",
    title: "The standard",
    body: [
      "Everything I ship has to pass one question: does this give someone their time back? Not engagement. Not output volume. Time — the only resource nobody can earn more of.",
      "That’s the standard, and it doesn’t bend for trends. If you’re building something that deserves that bar, or you want it applied to your business, I’d like to hear from you.",
    ],
  },
];

export default function StoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="py-24 sm:py-32">
        <Reveal>
          <p className="kicker">Why I build</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-6xl">
            Selling a home is never really about a home.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            This isn’t an about page, and it isn’t a CV. It’s the story of why
            ListingForge exists — told in chapters, the way it actually
            happened.
          </p>
        </Reveal>
      </header>

      <div className="mx-auto max-w-2xl pb-10">
        {chapters.map((chapter) => (
          <Reveal key={chapter.numeral}>
            <section className="rule py-16 sm:py-20">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-lg italic text-accent">
                  {chapter.numeral}
                </span>
                <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
                  {chapter.title}
                </h2>
              </div>
              <div className="mt-8 space-y-6">
                {chapter.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-serif text-[1.125rem] leading-[1.85] text-ink/90"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </Reveal>
        ))}

        <Reveal>
          <blockquote className="py-16 text-center">
            <p className="font-serif text-2xl italic leading-snug tracking-tight text-ink sm:text-3xl">
              “Technology should make people more human. Not less.”
            </p>
          </blockquote>
        </Reveal>

        <Reveal>
          <div className="flex justify-center pb-20">
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
