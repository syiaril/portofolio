import { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | Syaril",
  description: "Menulis tentang desain sistem, performa, dan rekayasa perangkat lunak.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const postMetas = posts.map(p => p.meta);
  
  return <BlogClient posts={postMetas} />;
}
