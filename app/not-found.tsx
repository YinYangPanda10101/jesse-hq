import Link from "next/link";
import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="kicker">404</p>
      <h1 className="mt-6 max-w-xl font-serif text-3xl leading-snug tracking-tight sm:text-5xl">
        This page doesn&rsquo;t exist. Consider the minute saved.
      </h1>
      <div className="mt-10">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
      <Link
        href="/projects"
        className="mt-6 text-sm text-muted transition-colors hover:text-ink"
      >
        or see the work →
      </Link>
    </div>
  );
}
