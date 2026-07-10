import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { EssayBody } from "@/components/essay-body";
import { essays, readingTime } from "@/content/essays";
import { site } from "@/content/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);
  if (!essay) return {};
  return {
    title: essay.title,
    description: essay.dek,
    openGraph: {
      title: essay.title,
      description: essay.dek,
      type: "article",
      publishedTime: essay.date,
      authors: [site.name],
    },
  };
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);
  if (!essay) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6">
      <header className="pt-24 sm:pt-32">
        <Reveal>
          <Link
            href="/thinking"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            ← Thinking
          </Link>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-10 font-serif text-3xl leading-[1.15] tracking-tight sm:text-5xl">
            {essay.title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 font-serif text-lg italic leading-relaxed text-muted">
            {essay.dek}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="rule mt-10 flex items-center gap-3 pt-6 text-xs text-faint">
            <span>{site.name}</span>
            <span aria-hidden>·</span>
            <span>{essay.dateLabel}</span>
            <span aria-hidden>·</span>
            <span>{readingTime(essay)} min read</span>
          </div>
        </Reveal>
      </header>

      <Reveal delay={0.24}>
        <div className="pb-10 pt-12">
          <EssayBody body={essay.body} />
        </div>
      </Reveal>

      <footer className="rule py-12">
        <p className="text-sm text-muted">
          Disagree, or building something this applies to?{" "}
          <Link
            href="/contact"
            className="font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
          >
            Tell me
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
