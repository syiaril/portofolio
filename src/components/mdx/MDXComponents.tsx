import { MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";

// For syntax highlighting via standard highlight.js styling
// We need to import the CSS in layout or globally. Let's rely on globals.css or pre-styled tags.

export const MDXComponents: MDXRemoteProps["components"] = {
  h1: (props) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 tracking-tight" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-semibold mt-10 mb-4 tracking-tight border-b border-border pb-2" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-medium mt-8 mb-3" {...props} />
  ),
  p: (props) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground" {...props} />
  ),
  ul: (props) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground" {...props} />
  ),
  ol: (props) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground" {...props} />
  ),
  li: (props) => (
    <li className="leading-7" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground bg-secondary/20 py-2 pr-4 rounded-r-lg" {...props} />
  ),
  a: ({ href, children, ...props }) => {
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
      return (
        <a href={href} className="font-medium underline underline-offset-4 text-primary hover:text-primary/80 transition-colors" {...props}>
          {children}
        </a>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline underline-offset-4 text-primary hover:text-primary/80 transition-colors"
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, className, ...props }: any) => {
    // Handling inline code vs code block
    if (className) {
      return (
        <code className={`block bg-[#1e1e24] text-gray-100 p-4 rounded-xl overflow-x-auto text-sm my-6 font-mono border border-border/50 ${className}`} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className="relative rounded bg-secondary px-[0.3rem] py-[0.2rem] font-mono text-sm text-primary font-semibold" {...props}>
        {children}
      </code>
    );
  },
  pre: (props) => (
    <pre className="mb-4 mt-6 overflow-x-auto" {...props} />
  ),
};
