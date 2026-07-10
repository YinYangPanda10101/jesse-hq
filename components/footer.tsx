import Link from "next/link";
import { navLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="rule mt-32">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg tracking-tight">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Technology should make people more human. Not less.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="kicker mb-1">Pages</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="kicker mb-1">Elsewhere</p>
            <a
              href={`mailto:${site.email}`}
              className="w-fit text-sm text-muted transition-colors hover:text-ink"
            >
              Email
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm text-muted transition-colors hover:text-ink"
            >
              WhatsApp
            </a>
            {site.linkedin && (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-muted transition-colors hover:text-ink"
              >
                LinkedIn
              </a>
            )}
            {site.booking && (
              <a
                href={site.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-muted transition-colors hover:text-ink"
              >
                Book a call
              </a>
            )}
          </div>
        </div>

        <div className="rule mt-14 flex flex-col gap-2 pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Jesse Schulman · South Africa</p>
          <p>Designed and built by hand. Typeset in Fraunces &amp; Inter.</p>
        </div>
      </div>
    </footer>
  );
}
