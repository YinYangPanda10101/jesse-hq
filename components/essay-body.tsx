/*
  Minimal long-form renderer for essay bodies.
  Supports: paragraphs, "## " headings, "> " pull quotes.
*/
export function EssayBody({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);

  return (
    <div>
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-14 mb-5 font-serif text-2xl tracking-tight text-ink sm:text-[1.75rem]"
            >
              {block.slice(3)}
            </h2>
          );
        }
        if (block.startsWith("> ")) {
          return (
            <blockquote
              key={i}
              className="my-10 border-l-2 border-accent/60 pl-6 font-serif text-xl italic leading-relaxed text-ink sm:text-2xl"
            >
              {block.slice(2)}
            </blockquote>
          );
        }
        return (
          <p
            key={i}
            className="mb-6 font-serif text-[1.125rem] leading-[1.85] text-ink/90"
          >
            {block}
          </p>
        );
      })}
    </div>
  );
}
