import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const rootDirectory = path.join(process.cwd(), "src", "content", "blog");

export interface BlogPostMeta {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  slug: string;
  readingTime: string;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    
    const { data, content } = matter(fileContent);
    const readTime = readingTime(content);

    return {
      meta: {
        ...data,
        slug: realSlug,
        readingTime: readTime.text,
      } as BlogPostMeta,
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(rootDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(rootDirectory);
  const posts = [];

  for (const file of files) {
    const post = await getPostBySlug(file);
    if (post) {
      posts.push(post);
    }
  }

  return posts.sort((a, b) => (new Date(a.meta.date) > new Date(b.meta.date) ? -1 : 1));
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.meta.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}
