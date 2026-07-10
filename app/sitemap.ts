import type { MetadataRoute } from "next";
import { essays } from "@/content/essays";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/projects",
    "/story",
    "/philosophy",
    "/thinking",
    "/timeline",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const essayPages = essays.map((essay) => ({
    url: `${site.url}/thinking/${essay.slug}`,
    lastModified: new Date(essay.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...essayPages];
}
