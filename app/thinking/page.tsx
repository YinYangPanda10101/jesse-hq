import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { essays, readingTime } from "@/content/essays";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Essays on time, technology and building — why AI should give us more time, not more noise.",
};

export default function ThinkingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="py-24 sm:py-32">
        <Reveal>
          <p className="kicker">Thinking</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
            Essays, not posts.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Written slowly, published rarely. Each one is a position I&rsquo;m
            prepared to defend — about time, technology, and what software owes
            the people who use it.
          </p>
        </Reveal>
      </header>

      <div className="mx-auto max-w-3xl pb-24">
        {essays.map((essay, i) => (
          <Reveal key={essay.slug} delay={0.05 * i}>
            <Link
              href={`/thinking/${essay.slug}`}
              className="group rule block py-12 sm:py-14"
            >
              <div className="flex items-center gap-3 text-xs text-faint">
                <span className="kicker">{essay.dateLabel}</span>
                <span aria-hidden>·</span>
                <span>{readingTime(essay)} min read</span>
              </div>
              <h2 className="mt-4 max-w-2xl font-serif text-2xl leading-snug tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-[2rem]">
                {essay.title}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                {essay.dek}
              </p>
              <p className="mt-6 text-sm font-medium text-ink">
                <span className="border-b border-hairline pb-0.5 transition-colors duration-300 group-hover:border-ink">
                  Read the essay
                </span>
                <span
                  aria-hidden
                  className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
