import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Want to build something useful together? Email, WhatsApp and LinkedIn — no forms, no funnels.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "WhatsApp",
    value: site.whatsapp,
    href: site.whatsappUrl,
    external: true,
  },
  // Re-enable once the real URLs are set in content/site.ts:
  ...(site.linkedin
    ? [
        {
          label: "LinkedIn",
          value: "Jesse Schulman",
          href: site.linkedin,
          external: true,
        },
      ]
    : []),
  ...(site.booking
    ? [
        {
          label: "Book a call",
          value: "Pick a time",
          href: site.booking,
          external: true,
        },
      ]
    : []),
];

export default function ContactPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24">
      <Reveal>
        <p className="kicker">Contact</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-6xl">
          Want to build something useful together?
        </h1>
      </Reveal>

      <div className="mt-16 max-w-2xl">
        {channels.map((channel, i) => (
          <Reveal key={channel.label} delay={0.08 + 0.06 * i}>
            <a
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group rule flex items-baseline justify-between gap-6 py-7"
            >
              <span className="kicker">{channel.label}</span>
              <span className="flex items-baseline gap-3 text-right font-serif text-xl tracking-tight text-ink sm:text-2xl">
                {channel.value}
                <span
                  aria-hidden
                  className="text-base text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-ink"
                >
                  →
                </span>
              </span>
            </a>
          </Reveal>
        ))}
        <div className="rule" />
      </div>

      <Reveal delay={0.3}>
        <p className="mt-12 max-w-md text-sm leading-relaxed text-muted">
          No forms, no funnels. A message that says what you&rsquo;re building
          and why it matters is enough.
        </p>
      </Reveal>
    </div>
  );
}
