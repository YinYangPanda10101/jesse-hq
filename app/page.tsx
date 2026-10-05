import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";
import { ProjectVisual } from "@/components/project-visual";
import { flagship, projects } from "@/content/projects";
import { site } from "@/content/site";

const nowItems = [
  "Signing ListingForge’s first paying agency",
  "Building and rebuilding websites for companies and founders",
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
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/projects#listingforge">
              See ListingForge
            </ButtonLink>
            <ButtonLink href="/projects" variant="ghost">
              View Projects
            </ButtonLink>
            <Link
              href="/story"
              className="group inline-flex h-12 items-center gap-2 px-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              Read my story
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
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
          {/* Flagship: ListingForge */}
          <Reveal>
            <Link
              href="/projects#listingforge"
              className="group mt-12 block rounded-2xl border border-hairline bg-surface p-8 transition-colors duration-300 hover:bg-paper sm:p-10"
            >
              <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="kicker">Flagship · {flagship.kicker}</p>
                    <span className="inline-flex h-6 items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 text-[11px] font-medium tracking-wide text-accent">
                      Live
                    </span>
                  </div>
                  <h2 className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
                    {flagship.name}
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">
                    Complete, ready-to-publish listing packs for South African
                    estate agencies — in minutes, not evenings.
                  </p>
                  <p className="mt-5 text-sm text-muted">
                    {flagship.proofPoints.join("  ·  ")}
                  </p>
                  <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
                    See ListingForge
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </p>
                </div>
                <div className="hidden md:block">
                  <ProjectVisual variant="listingforge" name={flagship.name} />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Supporting projects */}
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
            {projects.slice(0, 2).map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * i} className="h-full">
                <Link
                  href={`/projects#${project.slug}`}
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
              <p className="kicker">Now — October 2026</p>
              <h2 className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">
                What I&rsquo;m focused on
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted">
                Current focus: turning shipped products into paying customers.
              </p>
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
