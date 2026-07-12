/*
  Intentional placeholder for a real product screenshot.

  To replace: drop the image into /public/screenshots (e.g. dashboard.png)
  and swap <ScreenshotSlot label="Dashboard" /> for:

    <figure>
      <div className="overflow-hidden rounded-xl border border-hairline shadow-[0_1px_2px_rgba(28,25,20,0.05),0_12px_32px_rgba(28,25,20,0.07)]">
        <Image src="/screenshots/dashboard.png" alt="ListingForge dashboard" width={1600} height={1000} />
      </div>
      <figcaption className="mt-3 text-xs text-faint">ListingForge — Dashboard</figcaption>
    </figure>
*/
export function ScreenshotSlot({ label }: { label: string }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-xl border border-hairline bg-[#f1ece1]">
        <div className="flex h-8 items-center gap-1.5 border-b border-hairline/70 bg-surface/60 px-3.5">
          <span className="h-2 w-2 rounded-full bg-hairline" />
          <span className="h-2 w-2 rounded-full bg-hairline" />
          <span className="h-2 w-2 rounded-full bg-hairline" />
        </div>
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2.5 px-6 text-center">
          <span className="kicker text-faint">Screenshot slot</span>
          <span className="font-serif text-xl tracking-tight text-muted">
            {label}
          </span>
          <span className="text-xs text-faint">
            Replace with a real product screenshot
          </span>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-faint">
        ListingForge — {label}
      </figcaption>
    </figure>
  );
}
