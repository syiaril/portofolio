import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

// Add remark/rehype plugins if necessary
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.meta.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.meta.title} | Syaril`,
    description: post.meta.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Safe date parsing
  let formattedDate = post.meta.date;
  try {
    formattedDate = format(new Date(post.meta.date), "MMMM d, yyyy");
  } catch (e) {
    // Keep original
  }

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-32">
      <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
        <Link href="/blog" className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>
      </Button>

      <header className="mb-12 border-b border-border pb-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.meta.tags.map(tag => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground leading-tight">
          {post.meta.title}
        </h1>
        
        <div className="flex items-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.meta.date}>{formattedDate}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.meta.readingTime}</span>
          </div>
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-3xl">
        <MDXRemote 
          source={post.content} 
          components={MDXComponents} 
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug, rehypeHighlight],
            }
          }}
        />
      </div>
    </article>
  );
}
