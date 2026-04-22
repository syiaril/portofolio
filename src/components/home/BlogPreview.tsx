import { getAllPosts } from "@/lib/mdx";
import { BlogPreviewClient } from "./BlogPreviewClient";

export async function BlogPreview() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3).map(p => p.meta);

  return <BlogPreviewClient posts={recentPosts} />;
}
