import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ProjectVisual } from "@/components/project-visual";
import { ScreenshotSlot } from "@/components/screenshot-slot";
import { flagship, projects } from "@/content/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "ListingForge — live SaaS for South African estate agencies — plus Jesse OS, website systems and AI automation. Problem, solution, outcome for each.",
};

function LiveChip() {
  return (
    <span className="inline-flex h-6 items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 text-[11px] font-medium tracking-wide text-accent">
      Live
    </span>
  );
}

function FlagshipCaseStudy() {
  return (
    <article id="listingforge" className="rule scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-serif text-sm text-faint">01</span>
          <p className="kicker">Flagship · {flagship.kicker}</p>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
            {flagship.name}
          </h2>
          <LiveChip />
        </div>
        <p className="mt-5 text-sm text-muted">
          {flagship.proofPoints.join("  ·  ")}
        </p>
      </Reveal>

      {/* What it solves / who it helps / why it matters */}
      <Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div>
            <p className="kicker">What it solves</p>
            <p className="mt-3 leading-relaxed text-muted">
              {flagship.whatItSolves}
            </p>
          </div>
          <div>
            <p className="kicker">Who it helps</p>
            <p className="mt-3 leading-relaxed text-muted">
              {flagship.whoItHelps}
            </p>
          </div>
          <div>
            <p className="kicker">Why it matters</p>
            <p className="mt-3 leading-relaxed text-muted">
              {flagship.whyItMatters}
            </p>
          </div>
        </div>
      </Reveal>

      {/* What it produces */}
      <Reveal>
        <div className="mt-14">
          <p className="kicker">What it produces</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {flagship.produces.map((item) => (
              <li
                key={item}
                className="rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Current status + next milestone */}
      <Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-hairline bg-surface p-7">
            <p className="kicker">Current status</p>
            <ul className="mt-4 space-y-3">
              {flagship.currentStatus.map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-ink">
                  <span aria-hidden className="text-sm text-accent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-xl border border-hairline bg-surface p-7">
            <p className="kicker">Next milestone</p>
            <p className="mt-3 font-serif text-2xl tracking-tight sm:text-3xl">
              {flagship.nextMilestone}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Stated plainly so this page stays honest — it moves to the
              timeline the day it lands.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Screenshot slots */}
      <Reveal>
        <div className="mt-14">
          <p className="kicker">The product</p>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {flagship.screenshotSlots.map((label) => (
              <ScreenshotSlot key={label} label={label} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Links */}
      <Reveal>
        <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
          {flagship.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink"
            >
              <span className="border-b border-hairline pb-0.5 transition-colors duration-300 group-hover/link:border-ink">
                {link.label}
              </span>
              <span
                aria-hidden
                className="text-faint transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:text-ink"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="py-24 sm:py-32">
        <Reveal>
          <p className="kicker">Projects</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
            Work, hung like exhibits.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Every project answers the same three questions: what was broken,
            what was built, and what changed. There is deliberate room on this
            wall for what comes next.
          </p>
        </Reveal>
      </header>

      <FlagshipCaseStudy />

      <div>
        {projects.map((project, i) => (
          <article
            key={project.slug}
            id={project.slug}
            className="rule grid scroll-mt-24 gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16"
          >
            {/* Text column */}
            <Reveal className={cn(i % 2 === 0 && "lg:order-2")}>
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm text-faint">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <p className="kicker">{project.kicker}</p>
              </div>
              <h2 className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
                {project.name}
              </h2>
              <span className="mt-4 inline-flex h-6 items-center rounded-full border border-hairline px-2.5 text-[11px] font-medium tracking-wide text-muted">
                {project.status}
              </span>

              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="kicker">Problem</dt>
                  <dd className="mt-3 leading-relaxed text-muted">
                    {project.problem}
                  </dd>
                </div>
                <div>
                  <dt className="kicker">Solution</dt>
                  <dd className="mt-3 leading-relaxed text-muted">
                    {project.solution}
                  </dd>
                </div>
                <div>
                  <dt className="kicker">Outcome</dt>
                  <dd className="mt-3 leading-relaxed text-ink">
                    {project.outcome}
                  </dd>
                </div>
              </dl>

              {project.links && (
                <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink"
                    >
                      <span className="border-b border-hairline pb-0.5 transition-colors duration-300 group-hover/link:border-ink">
                        {link.label}
                      </span>
                      <span
                        aria-hidden
                        className="text-faint transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:text-ink"
                      >
                        →
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </Reveal>

            {/* Visual column */}
            <Reveal
              delay={0.12}
              className={cn("lg:self-center", i % 2 === 0 && "lg:order-1")}
            >
              <ProjectVisual variant={project.visual} name={project.name} />
            </Reveal>
          </article>
        ))}

        {/* Room for the future */}
        <Reveal>
          <div className="rule flex min-h-[220px] items-center justify-center py-20">
            <p className="font-serif text-xl italic text-faint">
              Space reserved for the next venture.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
