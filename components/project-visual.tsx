import { cn } from "@/lib/utils";

/*
  Interface studies: abstract, CSS-only representations of each product.
  Deliberately not fake screenshots — replace with real product imagery
  by dropping images into /public and swapping these out per project.
*/

function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-hairline bg-surface shadow-[0_1px_2px_rgba(28,25,20,0.05),0_12px_32px_rgba(28,25,20,0.07)]",
        className
      )}
    >
      <div className="flex h-8 items-center gap-1.5 border-b border-hairline px-3.5">
        <span className="h-2 w-2 rounded-full bg-hairline" />
        <span className="h-2 w-2 rounded-full bg-hairline" />
        <span className="h-2 w-2 rounded-full bg-hairline" />
      </div>
      {children}
    </div>
  );
}

const bar = "rounded-sm bg-ink/8";
const barStrong = "rounded-sm bg-ink/15";

function ListingForgeStudy() {
  return (
    <Frame>
      <div className="grid grid-cols-5 gap-4 p-5">
        <div className="col-span-2 space-y-2.5">
          <div className={cn(barStrong, "h-2.5 w-3/4")} />
          <div className={cn(bar, "h-8")} />
          <div className={cn(bar, "h-8")} />
          <div className={cn(bar, "h-8 w-4/5")} />
          <div className="h-8 rounded-sm bg-accent/80" />
        </div>
        <div className="col-span-3 space-y-3 rounded-lg border border-hairline bg-paper p-4">
          <div className={cn(barStrong, "h-3 w-1/2")} />
          <div className={cn(bar, "h-2 w-full")} />
          <div className={cn(bar, "h-2 w-11/12")} />
          <div className={cn(bar, "h-2 w-full")} />
          <div className={cn(bar, "h-2 w-3/5")} />
          <div className="flex gap-2 pt-1">
            <div className={cn(barStrong, "h-6 w-16 rounded-full")} />
            <div className={cn(bar, "h-6 w-16 rounded-full")} />
            <div className={cn(bar, "h-6 w-16 rounded-full")} />
          </div>
        </div>
      </div>
    </Frame>
  );
}

function JesseOsStudy() {
  return (
    <Frame>
      <div className="grid grid-cols-6 gap-4 p-5">
        <div className="col-span-2 space-y-2.5 border-r border-hairline pr-4">
          <div className={cn(barStrong, "h-2.5 w-2/3")} />
          <div className={cn(bar, "h-2 w-full")} />
          <div className={cn(bar, "h-2 w-4/5")} />
          <div className={cn(bar, "h-2 w-full")} />
        </div>
        <div className="col-span-4 grid grid-cols-3 gap-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="space-y-2 rounded-lg border border-hairline bg-paper p-3"
            >
              <div
                className={cn(
                  "h-4 w-4 rounded-full",
                  i === 1 ? "bg-accent/70" : "bg-ink/12"
                )}
              />
              <div className={cn(bar, "h-2 w-full")} />
              <div className={cn(bar, "h-2 w-2/3")} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function WebsitesStudy() {
  return (
    <div className="relative h-full min-h-[220px]">
      <Frame className="absolute left-0 top-6 w-3/5">
        <div className="space-y-2.5 p-4">
          <div className={cn(barStrong, "h-3 w-1/2")} />
          <div className={cn(bar, "h-2 w-full")} />
          <div className={cn(bar, "h-2 w-4/5")} />
          <div className="h-6 w-24 rounded-full bg-accent/80" />
        </div>
      </Frame>
      <Frame className="absolute right-0 top-0 w-3/5">
        <div className="space-y-2.5 p-4">
          <div className={cn(barStrong, "h-3 w-2/3")} />
          <div className="grid grid-cols-3 gap-2">
            <div className={cn(bar, "h-10")} />
            <div className={cn(bar, "h-10")} />
            <div className={cn(bar, "h-10")} />
          </div>
          <div className={cn(bar, "h-2 w-1/2")} />
        </div>
      </Frame>
    </div>
  );
}

function AutomationStudy() {
  return (
    <Frame>
      <div className="flex items-center justify-between gap-3 p-6">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-1 items-center gap-3 last:flex-none">
            <div
              className={cn(
                "flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-hairline bg-paper",
                i === 3 && "border-accent/40"
              )}
            >
              <div
                className={cn(
                  "h-4 w-4 rounded-sm",
                  i === 3 ? "bg-accent/70" : "bg-ink/12"
                )}
              />
            </div>
            {i < 3 && <div className="h-px flex-1 bg-hairline" />}
          </div>
        ))}
      </div>
      <div className="border-t border-hairline px-6 py-3">
        <div className={cn(bar, "h-2 w-1/3")} />
      </div>
    </Frame>
  );
}

export function ProjectVisual({
  variant,
  name,
}: {
  variant: "listingforge" | "jesse-os" | "websites" | "automation";
  name: string;
}) {
  return (
    <figure>
      <div className="rounded-2xl bg-[#f1ece1] p-6 sm:p-10">
        {variant === "listingforge" && <ListingForgeStudy />}
        {variant === "jesse-os" && <JesseOsStudy />}
        {variant === "websites" && <WebsitesStudy />}
        {variant === "automation" && <AutomationStudy />}
      </div>
      <figcaption className="mt-3 text-xs text-faint">
        {variant === "listingforge" ? "Product preview" : "Interface study"} —{" "}
        {name}
      </figcaption>
    </figure>
  );
}
