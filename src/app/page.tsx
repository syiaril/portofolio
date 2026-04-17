import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TechStackPreview } from "@/components/home/TechStackPreview";
import { BlogPreview } from "@/components/home/BlogPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <TechStackPreview />
      <BlogPreview />
    </>
  );
}
