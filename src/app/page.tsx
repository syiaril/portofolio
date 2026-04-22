import { HeroSection } from "@/components/home/HeroSection";
import dynamic from "next/dynamic";

const FeaturedProjects = dynamic(() => import("@/components/home/FeaturedProjects").then(mod => mod.FeaturedProjects), {
  loading: () => <div className="py-24 max-w-7xl mx-auto px-4 min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 rounded-full border-t-2 border-primary animate-spin"></div></div>,
});

const TechStackPreview = dynamic(() => import("@/components/home/TechStackPreview").then(mod => mod.TechStackPreview), {
  loading: () => <div className="py-24 max-w-7xl mx-auto px-4 min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 rounded-full border-t-2 border-primary animate-spin"></div></div>,
});

const BlogPreview = dynamic(() => import("@/components/home/BlogPreview").then(mod => mod.BlogPreview), {
  loading: () => <div className="py-24 max-w-7xl mx-auto px-4 min-h-[400px]" />
});

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
