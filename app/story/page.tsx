import type { Metadata } from "next";
import { StoryExperience } from "@/components/story/story-experience";

export const metadata: Metadata = {
  title: "Why I Build",
  description:
    "Selling a home is never really about a home. The founder story behind ListingForge — told in chapters, not a CV.",
};

export default function StoryPage() {
  return <StoryExperience />;
}
