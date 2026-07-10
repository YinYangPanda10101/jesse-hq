import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "The convictions behind the work: build things that matter, amplify humanity, give people their time back.",
};

const statements: { text: string; whisper: string }[] = [
  {
    text: "Build things that matter.",
    whisper: "Attention is finite. Spend it on problems that deserve it.",
  },
  {
    text: "Technology should amplify humanity.",
    whisper: "A tool succeeds when the person using it becomes more present, not less.",
  },
  {
    text: "Excellence compounds.",
    whisper: "Every careful decision makes the next one cheaper. Craft is an investment, not a cost.",
  },
  {
    text: "Time is life’s most valuable resource.",
    whisper: "It is the only thing that cannot be earned back, borrowed, or bought.",
  },
  {
    text: "Give people their time back.",
    whisper: "The measure of every product: hours returned to the person who earned them.",
  },
  {
    text: "Solve meaningful problems.",
    whisper: "Not the loudest problems. Not the easiest. The ones that change how someone lives.",
  },
];

export default function PhilosophyPage() {
  return (
    <div>
      <header className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
        <Reveal>
          <p className="kicker">Philosophy</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Six convictions. Everything else is implementation detail.
          </p>
        </Reveal>
      </header>

      {statements.map((statement, i) => (
        <section
          key={statement.text}
          className="flex min-h-[80vh] items-center justify-center px-6"
        >
          <Reveal className="text-center">
            <p className="kicker text-faint">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mx-auto mt-8 max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              {statement.text}
            </h2>
            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-muted">
              {statement.whisper}
            </p>
          </Reveal>
        </section>
      ))}

      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-8 px-6 text-center">
        <Reveal>
          <p className="max-w-md leading-relaxed text-muted">
            These aren’t slogans. They’re the acceptance criteria for
            everything on this site.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ButtonLink href="/projects" variant="ghost">
            See them applied
          </ButtonLink>
        </Reveal>
      </section>
    </div>
  );
}
