import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/BlogCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export async function BlogPreview() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3); // Take latest 3

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader 
              title="Latest from the Blog" 
              subtitle="Thoughts and tutorials on system design, performance, and best practices."
              className="mb-0"
            />
            <Button variant="ghost" asChild className="hidden md:flex gap-2 text-primary group font-medium">
              <Link href="/blog">
                View all articles 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <ScrollReveal key={post.meta.slug} delay={index * 0.1}>
              <BlogCard post={post.meta} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Button variant="outline" asChild className="gap-2">
            <Link href="/blog">
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
