export interface Essay {
  slug: string;
  title: string;
  dek: string;
  date: string; // ISO
  dateLabel: string;
  body: string; // light markdown: ## headings, > pull quotes, paragraphs
}

export function readingTime(essay: Essay): number {
  const words = essay.body.split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}

export const essays: Essay[] = [
  {
    slug: "more-time-not-more-noise",
    title: "Why AI Should Give Us More Time, Not More Noise",
    dek: "The default output of AI is more. More drafts, more content, more things to review. The point was supposed to be less.",
    date: "2026-06-24",
    dateLabel: "June 2026",
    body: `Watch any AI demo and you’ll notice the same shape: something gets generated. Ten headlines. Five variations. A wall of text where there used to be a blank page. The room applauds the abundance.

But abundance was never the problem. Nobody running a real business has ever said, “what I need is more drafts to look at.” The blank page was rarely the bottleneck — the twenty other things demanding attention were.

## The inbox test

Here’s the only benchmark I use when I evaluate a tool, including my own: at the end of the day, did it remove something from your plate, or add something?

Most AI features fail this test. They produce material that still has to be reviewed, edited, approved, formatted, published. The work didn’t disappear — it changed costume. What used to be “write the thing” became “manage the thing that writes the thing.” That’s not leverage. That’s a new employee who needs supervision.

## Attention is the scarce resource now

Generation is now effectively free. Which means it isn’t valuable. When anyone can produce a hundred variations of anything in seconds, the scarce resource stops being production and becomes attention — yours, and the attention of the people you’re trying to reach.

Tools that spend your attention are expensive no matter what they cost. Tools that protect it are cheap at almost any price.

> An AI feature earns its place when it deletes a task — along with the notification, the review step, and the low-grade guilt attached to it.

## What subtraction looks like

When I built ListingForge, the tempting version was the abundant one: generate twenty listing descriptions, let the agent choose. It demos beautifully. It also hands the agent a new job — reading twenty descriptions.

The version I shipped does something quieter: it produces one complete, publishable listing pack, done well enough to trust. The agent’s job shrinks from “write everything” to “glance and approve.” Minutes, not hours. That difference doesn’t demo as loudly. It just matters more.

## The bet

I think the next decade of software belongs to builders who treat time as the product. Not engagement, not output volume, not tokens burned — time returned to the person using the tool.

AI is the most powerful subtraction machine ever built. Using it as an addition machine is the mistake of the era. The companies that understand this won’t feel like AI companies at all. They’ll feel like calm.`,
  },
  {
    slug: "admin-most-expensive-employee",
    title: "Admin Is the Most Expensive Employee You Never Hired",
    dek: "It doesn’t draw a salary. It draws something worse: your best hours.",
    date: "2026-07-01",
    dateLabel: "July 2026",
    body: `Every small business has one employee who never interviewed for the job, never shows up on the payroll, and never takes leave. Admin.

It answers to no one. It grows its own responsibilities. And it has a talent no human hire has: it always books the best hours of the day for itself.

## Prime hours, not spare hours

The painter doesn’t do quotes in dead time — he does them at ten at night, after the day on site, when he should be with his family. The salon owner answers booking messages between clients, which means she’s never fully with either. The agent formats a listing on Sunday morning because Monday belongs to viewings.

Admin doesn’t take your marginal hours. It takes your prime ones — the hours where care, judgement and presence live. That’s what makes it the most expensive employee in the building.

## The compounding cost

An hour of admin never costs an hour. It costs the follow-up call that didn’t happen, the referral that wasn’t asked for, the small act of attention that turns a customer into a regular. Businesses don’t usually die of one big mistake. They erode — one reclaimed-by-paperwork evening at a time.

I saw this up close building websites for five local businesses — a painter, two salons, a plumber, a property outfit. The website was never the hard part. The hard part was everything around it: the quoting, the reposting, the retyping of the same information into the same five places, forever.

> You can’t fire admin. But you can stop paying it in prime hours.

## Systems are decisions made once

A system is nothing mystical. It’s a decision you make once so you never have to make it again at ten at night. The quote template. The booking link. The listing pack that writes itself from the details you already typed.

Software is the only employee that happily works the night shift, never resents the repetition, and costs the same whether it does the task once or a thousand times. That’s the entire thesis behind what I build: hire software for the work that was stealing your evenings, and spend the surplus on the part of the business only you can do.

The businesses that figure this out don’t just get efficient. They get their founders back.`,
  },
  {
    slug: "future-of-real-estate-is-time",
    title: "The Future of Real Estate Isn’t AI. It’s Time.",
    dek: "Nobody wakes up wanting a language model. Agents want Tuesday afternoon back.",
    date: "2026-07-08",
    dateLabel: "July 2026",
    body: `Every real estate tech deck right now says the same word on every slide: AI. And every working agent I’ve spoken to responds to that word the same way — with a polite shrug.

They’re not wrong to shrug. They’ve seen tools come and go, each promising leverage, each quietly delivering more admin: another portal to update, another dashboard to check, another feed to feed. The technology kept arriving and the workday kept growing.

## What agents actually sell

An agent’s real product has never been property. It’s presence at a life transition. A family relocating, a couple separating, a first buyer terrified of the paperwork — selling a home is never really about a home. It’s about someone’s life changing shape, and a professional standing next to them while it does.

Presence can’t be automated. But it can be crowded out — and that’s exactly what two decades of “productivity” tools have done. The average agent now runs a small media company on the side: listing copy, social posts, brochures, portal descriptions. All of it necessary. None of it the job.

> The best AI in real estate won’t feel like AI. It will feel like leaving the office at four.

## Plumbing, not magic

That’s the thesis ListingForge is built on. Not “AI-powered” as a badge on the landing page — AI as plumbing, invisible and boring, doing the media-company work in minutes so the human can go do the human work.

The metric I care about isn’t tokens or generations. It’s time-to-published, and what the agent does with the hours that used to live there. A viewing. A follow-up. A school pickup. The tool succeeds precisely when nobody is thinking about the tool.

## The bet

The winning agent of the next decade won’t be the one with the most AI. It will be the one who is most present — most available, most attentive, most human — because their admin runs itself.

The future of real estate isn’t artificial intelligence. It’s reclaimed time, and what a good professional does with it.`,
  },
];
