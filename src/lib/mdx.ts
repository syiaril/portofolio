import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BilingualText } from "./i18n/translations";

const rootDirectory = path.join(process.cwd(), "src", "content", "blog");

export interface BlogPostMeta {
  title: BilingualText;
  date: string;
  excerpt: BilingualText;
  tags: string[];
  slug: string;
  readingTime: BilingualText;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: {
    id: string;
    en: string;
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\.(id|en)\.mdx$/, "");
    
    const idPath = path.join(rootDirectory, `${realSlug}.id.mdx`);
    const idContent = fs.existsSync(idPath) ? fs.readFileSync(idPath, "utf8") : "";
    const idParsed = matter(idContent);
    const idReadTime = readingTime(idParsed.content);

    const enPath = path.join(rootDirectory, `${realSlug}.en.mdx`);
    const enContent = fs.existsSync(enPath) ? fs.readFileSync(enPath, "utf8") : "";
    const enParsed = matter(enContent);
    const enReadTime = readingTime(enParsed.content);

    return {
      meta: {
        title: { 
          id: idParsed.data.title || "", 
          en: enParsed.data.title || idParsed.data.title || "" 
        },
        date: idParsed.data.date || enParsed.data.date || "",
        excerpt: { 
          id: idParsed.data.excerpt || "", 
          en: enParsed.data.excerpt || idParsed.data.excerpt || "" 
        },
        tags: idParsed.data.tags || enParsed.data.tags || [],
        slug: realSlug,
        readingTime: {
          id: idReadTime.text.replace('min read', 'mnt baca'),
          en: enReadTime.text
        }
      },
      content: {
        id: idParsed.content,
        en: enParsed.content || idParsed.content
      }
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
  const slugs = new Set<string>();
  
  for (const file of files) {
    if (file.endsWith(".mdx")) {
      slugs.add(file.replace(/\.(id|en)\.mdx$/, ""));
    }
  }

  const posts = [];
  for (const slug of slugs) {
    const post = await getPostBySlug(slug);
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
