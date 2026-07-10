import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Products, systems and businesses built to give people their time back — ListingForge, Jesse OS, website systems and AI automation.",
};

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

      <div>
        {projects.map((project, i) => (
          <article
            key={project.slug}
            className="rule grid gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16"
          >
            {/* Text column */}
            <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="kicker">{project.kicker}</p>
              </div>
              <h2 className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
                {project.name}
              </h2>
              <span
                className={cn(
                  "mt-4 inline-flex h-6 items-center rounded-full border px-2.5 text-[11px] font-medium tracking-wide",
                  project.status === "Live"
                    ? "border-accent/30 bg-accent/8 text-accent"
                    : "border-hairline text-muted"
                )}
              >
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
            </Reveal>

            {/* Visual column */}
            <Reveal
              delay={0.12}
              className={cn(
                "lg:self-center",
                i % 2 === 1 && "lg:order-1"
              )}
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
