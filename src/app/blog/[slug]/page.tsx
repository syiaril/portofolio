import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import { BlogDetailHeader } from "./BlogDetailHeader";
import { BlogContentClient } from "./BlogContentClient";

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
    return { title: "Postingan Tidak Ditemukan" };
  }

  // Use ID as default for server-side SEO metadata, 
  // since server components don't know the client language context
  return {
    title: `${post.meta.title.id} | Syaril`,
    description: post.meta.excerpt.id,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const mdxOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    }
  };

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-32">
      <BlogDetailHeader meta={post.meta} />

      <div className="prose prose-lg dark:prose-invert max-w-3xl">
        <BlogContentClient 
          idContent={
            <MDXRemote 
              source={post.content.id} 
              components={MDXComponents} 
              options={mdxOptions}
            />
          }
          enContent={
            <MDXRemote 
              source={post.content.en} 
              components={MDXComponents} 
              options={mdxOptions}
            />
          }
        />
      </div>
    </article>
  );
}
