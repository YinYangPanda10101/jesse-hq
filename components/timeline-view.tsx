"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { milestones, type MilestoneStatus } from "@/content/timeline";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

const statusLabel: Record<MilestoneStatus, string> = {
  shipped: "Shipped",
  now: "In motion",
  ahead: "Ahead",
};

function StatusChip({ status }: { status: MilestoneStatus }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full border px-2.5 text-[11px] font-medium tracking-wide",
        status === "shipped" && "border-hairline bg-surface text-ink",
        status === "now" && "border-accent/30 bg-accent/8 text-accent",
        status === "ahead" && "border-dashed border-hairline text-faint"
      )}
    >
      {statusLabel[status]}
    </span>
  );
}

export function TimelineView() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.65"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  const firstAhead = milestones.findIndex((m) => m.status === "ahead");

  return (
    <div ref={ref} className="relative">
      {/* Track + scroll-linked progress line */}
      <div
        aria-hidden
        className="absolute bottom-2 left-[5px] top-2 w-px bg-hairline"
      />
      <motion.div
        aria-hidden
        className="absolute left-[5px] top-2 w-px origin-top bg-ink"
        style={{
          height: "calc(100% - 16px)",
          scaleY: reduce ? 1 : progress,
        }}
      />

      <ol className="space-y-14">
        {milestones.map((m, i) => (
          <li key={`${m.date}-${m.title}`} className="relative pl-12">
            {i === firstAhead && (
              <Reveal>
                <p className="kicker -mt-2 mb-12 text-accent">
                  What&rsquo;s ahead
                </p>
              </Reveal>
            )}
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 border-paper",
                m.status === "ahead" ? "bg-faint" : "bg-ink"
              )}
            />
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                {/* Ahead entries carry no date — showing "Ahead" twice reads
                    as a mistake, so the chip does the talking. */}
                {m.status !== "ahead" && <p className="kicker">{m.date}</p>}
                <StatusChip status={m.status} />
              </div>
              <h2 className="mt-3 font-serif text-2xl tracking-tight sm:text-3xl">
                {m.title}
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">
                {m.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
