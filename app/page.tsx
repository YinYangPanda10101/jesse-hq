import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

const nowItems = [
  "Launching ListingForge publicly",
  "Onboarding the first agencies",
  "Building Jesse OS",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-28 pt-24 sm:pb-36 sm:pt-36">
        <Reveal>
          <p className="kicker">{site.role}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-serif text-[2.65rem] leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            I build software that gives people their time back.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Building products, systems and businesses that help people spend
            less time on repetitive work and more time with people.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View Projects</ButtonLink>
            <ButtonLink href="/story" variant="ghost">
              Read My Story
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      {/* Philosophy */}
      <section className="rule">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <Reveal>
            <p className="kicker">The idea underneath everything</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-3xl font-serif text-3xl leading-snug tracking-tight sm:text-[2.6rem]">
              Technology should make people more human.
              <span className="text-muted"> Not less.</span>
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl leading-relaxed text-muted">
              Every product here exists for one reason: to remove repetitive
              work so people can focus on what actually matters. Not more
              dashboards, not more noise — hours, returned to the person who
              earned them. That philosophy quietly shapes every decision on
              every page of this site.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              href="/philosophy"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              The full philosophy
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Selected work */}
      <section className="rule">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <Reveal>
            <div className="flex items-end justify-between">
              <p className="kicker">Selected work</p>
              <Link
                href="/projects"
                className="hidden text-sm text-muted transition-colors hover:text-ink sm:block"
              >
                All projects →
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * i} className="h-full">
                <Link
                  href="/projects"
                  className="group flex h-full flex-col justify-between bg-surface p-8 transition-colors duration-300 hover:bg-paper"
                >
                  <div>
                    <p className="kicker">{project.kicker}</p>
                    <h2 className="mt-4 font-serif text-2xl tracking-tight">
                      {project.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.solution.split(". ")[0]}.
                    </p>
                  </div>
                  <p className="mt-8 text-sm font-medium text-ink">
                    <span className="border-b border-hairline pb-0.5 transition-colors duration-300 group-hover:border-ink">
                      {project.status}
                    </span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link
              href="/projects"
              className="mt-8 block text-sm text-muted sm:hidden"
            >
              All projects →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Now */}
      <section className="rule">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <p className="kicker">Now — July 2026</p>
              <h2 className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">
                What I&rsquo;m focused on
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-5">
                {nowItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-hairline pb-5 text-lg"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/timeline"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                The full timeline
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="rule">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:py-40">
          <Reveal>
            <p className="mx-auto max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-5xl">
              Let&rsquo;s build something worth remembering.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10 flex justify-center">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
