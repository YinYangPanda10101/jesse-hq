import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium tracking-tight transition-colors duration-300",
        variant === "primary" && "bg-ink text-paper hover:bg-ink/85",
        variant === "ghost" &&
          "border border-hairline text-ink hover:border-ink/40",
        className
      )}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
