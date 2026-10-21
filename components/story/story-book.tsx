"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
  type TransitionEvent,
} from "react";
import { cn } from "@/lib/utils";
import {
  chapters,
  closingQuote,
  storyIntro,
  storyTitle,
} from "@/content/story";
import s from "./story-book.module.css";

const TURN_MS = 900;
const STAGGER_MS = 90;

/*
  Leaves, in order. A leaf is one sheet: its front is a right-hand page,
  its back a left-hand page. With `page` = k, the open spread shows the
  back of leaf k-1 on the left and the front of leaf k on the right.

    leaf 0      cover            | contents (inside cover)
    leaf 1      foreword         | chapter I opener
    leaf 2..6   chapter body     | next opener (last one: closing quote)
    leaf 7      end page         | —
*/
const LEAF_COUNT = chapters.length + 3;
const LAST = LEAF_COUNT - 1;
const QUOTE_FOLIO = chapters.length * 2 + 1;

const spreadLabels = [
  "Cover",
  "Contents",
  ...chapters.map((c) => `${c.numeral} · ${c.title}`),
  "Afterword",
];

function Page({
  head,
  folio,
  className,
  children,
}: {
  head?: string;
  folio?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn(s.page, className)}>
      {head ? (
        <p className={s.runningHead} aria-hidden>
          {head}
        </p>
      ) : null}
      {children}
      {folio != null ? (
        <p className={s.folio} aria-hidden>
          {folio}
        </p>
      ) : null}
    </div>
  );
}

export function StoryBook({ onReadAsPage }: { onReadAsPage: () => void }) {
  const [page, setPage] = useState(0);
  const [busy, setBusy] = useState(false);
  // Leaves mid-turn get a raised z-index until they land.
  const [flying, setFlying] = useState<Map<number, number>>(() => new Map());
  const [delays, setDelays] = useState<Record<number, number>>({});

  const rootRef = useRef<HTMLElement>(null);
  const pageRef = useRef(0);
  const busyRef = useRef(false);
  const flightRef = useRef(0);
  const reduceRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reduceRef.current = mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const goTo = useCallback((raw: number) => {
    const from = pageRef.current;
    const target = Math.max(0, Math.min(LAST, raw));
    if (busyRef.current || target === from) return;

    const forward = target > from;
    // Leaves that change side, in the order they should turn.
    const moving: number[] = [];
    if (forward) for (let i = from; i < target; i++) moving.push(i);
    else for (let i = from - 1; i >= target; i--) moving.push(i);

    const reduce = reduceRef.current;
    const nextDelays: Record<number, number> = {};
    const nextFlying = new Map<number, number>();
    moving.forEach((leaf, n) => {
      nextDelays[leaf] = reduce ? 0 : n * STAGGER_MS;
      // Forward: the first leaf to go sits on top of the ones still waiting.
      // Backward: same idea, mirrored.
      nextFlying.set(leaf, forward ? 200 + (LEAF_COUNT - leaf) : 200 + leaf);
    });

    const id = ++flightRef.current;
    busyRef.current = true;
    pageRef.current = target;
    setBusy(true);
    setDelays(nextDelays);
    setFlying(nextFlying);
    setPage(target);

    const total = reduce
      ? 0
      : (moving.length - 1) * STAGGER_MS + TURN_MS + 60;
    window.setTimeout(() => {
      if (flightRef.current !== id) return;
      busyRef.current = false;
      setBusy(false);
      setFlying(new Map());
      setDelays({});
    }, total);
  }, []);

  // Arrow keys turn pages, but only while the book is actually on screen
  // (it's hidden on phones and in "read as one page" mode).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const root = rootRef.current;
      if (!root || root.offsetParent === null) return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))
      )
        return;
      e.preventDefault();
      goTo(pageRef.current + (e.key === "ArrowRight" ? 1 : -1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  const onLeafClick = (i: number) => (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    const p = pageRef.current;
    if (i === p) goTo(p + 1);
    else if (i === p - 1) goTo(p - 1);
  };

  // A leaf that has landed drops its raised z-index straight away, so the
  // newest page on each pile is always the one on top.
  const onLeafLanded = (i: number) => (e: TransitionEvent) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    setFlying((prev) => {
      if (!prev.has(i)) return prev;
      const next = new Map(prev);
      next.delete(i);
      return next;
    });
  };

  const zFor = (i: number) =>
    flying.get(i) ?? (i < page ? i + 1 : LEAF_COUNT - i);

  // ---- page contents -------------------------------------------------

  const cover = (
    <div className={s.coverFrame} aria-hidden>
      <div>
        <p className={s.coverKicker}>Why I Build</p>
        <p className={s.coverTitle}>{storyTitle}</p>
        <div className={s.coverRule} />
      </div>
      <p className={s.coverAuthor}>Jesse Schulman</p>
    </div>
  );

  const contents = (
    <Page>
      <p className={s.label}>Inside</p>
      <h2 className={s.contentsTitle}>Contents</h2>
      <ol className={s.toc}>
        {chapters.map((c, i) => (
          <li key={c.numeral}>
            <button
              type="button"
              className={s.tocItem}
              onClick={() => goTo(i + 2)}
            >
              <span className={s.tocNum}>{c.numeral}</span>
              <span className={s.tocTitle}>{c.title}</span>
              <span className={s.tocLeader} aria-hidden />
              <span className={s.tocPage}>{i * 2 + 1}</span>
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            className={s.tocItem}
            onClick={() => goTo(LAST)}
          >
            <span className={s.tocNum} aria-hidden />
            <span className={s.tocTitle}>Afterword</span>
            <span className={s.tocLeader} aria-hidden />
            <span className={s.tocPage}>{QUOTE_FOLIO}</span>
          </button>
        </li>
      </ol>
    </Page>
  );

  const foreword = (
    <Page className={s.middle}>
      <p className={s.label}>Foreword</p>
      <p className={s.foreword}>{storyIntro}</p>
      <p className={s.signature}>Jesse Schulman</p>
      <p className={s.hint}>Click the page, or press →, to turn</p>
    </Page>
  );

  const opener = (i: number) => {
    const c = chapters[i];
    return (
      <Page head="Jesse Schulman" folio={i * 2 + 1}>
        <p className={s.numeral}>{c.numeral}</p>
        <h2 className={s.chapterTitle}>{c.title}</h2>
        <div className={s.rule} aria-hidden />
        <div className={s.prose}>
          <p className={s.dropCap}>{c.body[0]}</p>
        </div>
      </Page>
    );
  };

  const body = (i: number) => {
    const c = chapters[i];
    return (
      <Page head="Why I Build" folio={i * 2 + 2}>
        <div className={cn(s.prose, s.continued)}>
          {c.body.slice(1).map((para, n) => (
            <p key={n}>{para}</p>
          ))}
        </div>
        <div className={s.endMark} aria-hidden />
      </Page>
    );
  };

  const quote = (
    <Page head="Jesse Schulman" folio={QUOTE_FOLIO} className={s.middle}>
      <blockquote className={s.quote}>“{closingQuote}”</blockquote>
    </Page>
  );

  const end = (
    <Page head="Why I Build" folio={QUOTE_FOLIO + 1} className={s.middle}>
      <p className={s.label}>Afterword</p>
      <p className={s.closing}>Let’s build something worth remembering.</p>
      <Link href="/contact" className={s.cta}>
        Start a conversation <span aria-hidden>→</span>
      </Link>
      <button type="button" className={s.textButton} onClick={() => goTo(0)}>
        Close the book
      </button>
      <p className={s.colophon}>
        Set in Fraunces and Inter.
        <br />
        Johannesburg, 2026.
      </p>
    </Page>
  );

  // front / back of each leaf, plus extra face classes
  const leaves: {
    front: ReactNode;
    back: ReactNode;
    frontClass?: string;
    backClass?: string;
  }[] = [
    { front: cover, back: contents, frontClass: s.cover, backClass: s.endpaper },
    { front: foreword, back: opener(0) },
    ...chapters.map((_, i) => ({
      front: body(i),
      back: i < chapters.length - 1 ? opener(i + 1) : quote,
    })),
    { front: end, back: null },
  ];

  const label = spreadLabels[page];

  return (
    <section
      ref={rootRef}
      className={s.stage}
      aria-label="Why I Build, as a book"
    >
      <div
        className={cn(
          s.book,
          page === 0 ? s.closed : s.open,
          !busy && s.idle,
        )}
      >
        <div className={cn(s.base, s.baseLeft)} aria-hidden />
        <div className={cn(s.base, s.baseRight)} aria-hidden />

        {leaves.map((leaf, i) => (
          <div
            key={i}
            className={cn(
              s.leaf,
              i < page && s.turned,
              (i === page || i === page - 1) && s.top,
            )}
            style={{ zIndex: zFor(i), transitionDelay: `${delays[i] ?? 0}ms` }}
            onClick={onLeafClick(i)}
            onTransitionEnd={onLeafLanded(i)}
          >
            <div
              className={cn(s.face, s.front, leaf.frontClass)}
              inert={i !== page}
            >
              {leaf.front}
            </div>
            <div
              className={cn(s.face, s.back, leaf.backClass)}
              inert={i !== page - 1}
            >
              {leaf.back}
            </div>
          </div>
        ))}
      </div>

      <div className={s.controls}>
        <button
          type="button"
          className={s.navButton}
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
        >
          <span aria-hidden>← </span>Previous
        </button>
        <p className={s.status}>
          <span className={s.statusLabel}>{label}</span>
          <span className={s.statusCount}>
            {page + 1} / {LEAF_COUNT}
          </span>
        </p>
        <button
          type="button"
          className={s.navButton}
          onClick={() => goTo(page + 1)}
          disabled={page === LAST}
        >
          {page === 0 ? "Open the book" : "Next"}
          <span aria-hidden> →</span>
        </button>
      </div>

      <p className={s.meta}>
        <span>Use the ← → keys to turn</span>
        <span aria-hidden>·</span>
        <button type="button" className={s.metaButton} onClick={onReadAsPage}>
          Read it as one page
        </button>
      </p>

      <p className="sr-only" aria-live="polite">
        {`Page ${page + 1} of ${LEAF_COUNT}: ${label}`}
      </p>
    </section>
  );
}
