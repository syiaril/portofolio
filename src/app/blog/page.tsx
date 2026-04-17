import { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/mdx";
import { BlogCard } from "@/components/BlogCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog | Syaril",
  description: "Writing about system design, performance, and software engineering.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return (
    <div className="pt-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeader 
          title="Notes & Writing" 
          subtitle="Thoughts on software engineering, system design, and building web products." 
        />
      </ScrollReveal>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post, index) => (
            <ScrollReveal key={post.meta.slug} delay={0.1 + (index * 0.1)}>
              <div className="relative h-full">
                <BlogCard post={post.meta} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-muted-foreground bg-secondary/20 rounded-2xl border border-border/50">
          <p>No blog posts published yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
