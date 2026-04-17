import Link from "next/link";
import { format } from "date-fns";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BlogPostMeta } from "@/lib/mdx";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  // Safe date parsing 
  let formattedDate = post.date;
  try {
    formattedDate = format(new Date(post.date), "MMMM d, yyyy");
  } catch (e) {
    // Keep original string if parsing fails
  }

  return (
    <Card className="flex flex-col h-full group border-border/50 hover:border-primary/50 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-4 mt-auto">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </div>
        </div>
        <div className="text-primary font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Read <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </CardFooter>
    </Card>
  );
}
