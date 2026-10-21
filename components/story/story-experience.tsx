"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";
import { cn } from "@/lib/utils";
import {
  chapters,
  closingQuote,
  storyIntro,
  storyTitle,
} from "@/content/story";
import { StoryBook } from "./story-book";
import s from "./story-experience.module.css";

export function StoryExperience() {
  const [mode, setMode] = useState<"book" | "scroll">("book");

  const switchTo = (next: "book" | "scroll") => {
    setMode(next);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={cn(s.root, mode === "scroll" && s.scrollMode)}>
      <div className="mx-auto max-w-6xl px-6">
        <header className={cn("py-24 sm:py-32", s.header)}>
          <Reveal>
            <p className="kicker">Why I build</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-6xl">
              {storyTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              {storyIntro}
            </p>
          </Reveal>
          <button
            type="button"
            className={s.backToBook}
            onClick={() => switchTo("book")}
          >
            Read it as a book <span aria-hidden>→</span>
          </button>
        </header>
      </div>

      <div className={s.bookStage}>
        <StoryBook onReadAsPage={() => switchTo("scroll")} />
      </div>

      <div className={cn("mx-auto max-w-6xl px-6", s.vertical)}>
        <div className="mx-auto max-w-2xl pb-10">
          {chapters.map((chapter) => (
            <Reveal key={chapter.numeral}>
              <section className="rule py-16 sm:py-20">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-lg italic text-accent">
                    {chapter.numeral}
                  </span>
                  <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
                    {chapter.title}
                  </h2>
                </div>
                <div className="mt-8 space-y-6">
                  {chapter.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-serif text-[1.125rem] leading-[1.85] text-ink/90"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <blockquote className="py-16 text-center">
              <p className="font-serif text-2xl italic leading-snug tracking-tight text-ink sm:text-3xl">
                “{closingQuote}”
              </p>
            </blockquote>
          </Reveal>

          <Reveal>
            <div className="flex justify-center pb-20">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
