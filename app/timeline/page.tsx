import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { TimelineView } from "@/components/timeline-view";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "The founder timeline — what's been shipped, what's in motion, and what's ahead.",
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="py-24 sm:py-32">
        <Reveal>
          <p className="kicker">Timeline</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
            Receipts, in order.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            What&rsquo;s been shipped, what&rsquo;s in motion, and what&rsquo;s
            deliberately still ahead. Updated as milestones land.
          </p>
        </Reveal>
      </header>

      <div className="mx-auto max-w-3xl pb-32">
        <TimelineView />
      </div>
    </div>
  );
}
