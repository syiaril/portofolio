import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TechStackPreview } from "@/components/home/TechStackPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <TechStackPreview />
      <Suspense fallback={<div className="py-24 max-w-7xl mx-auto px-4 min-h-[400px]" />}>
        <BlogPreview />
      </Suspense>
    </>
  );
}
