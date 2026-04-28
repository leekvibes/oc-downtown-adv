/* ──────────────────────────────────────────────────────────
   BLOG DATA LAYER
   Reads /content/blog/*.mdx at build time, parses frontmatter
   with gray-matter, and returns a typed list of posts.
   Used by:
     - src/app/blog/page.tsx          (index — list of posts)
     - src/app/blog/[slug]/page.tsx   (post page — header + body)
     - src/app/sitemap.ts             (auto-include posts in sitemap)
   Server-only: uses Node fs. Do NOT import from a client component.
   ────────────────────────────────────────────────────────── */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date string e.g. "2026-04-27"
  updatedAt?: string;
  author: string;
  category: string;
  readTime: string; // e.g. "6 min read"
  cover: string; // image URL
  tags?: string[];
  draft?: boolean;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** List every published post, newest first. */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<BlogPostMeta, "slug">) };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));

  return posts;
}

/** Look up a single post's metadata by slug. */
export function getPostMeta(slug: string): BlogPostMeta | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  return { slug, ...(data as Omit<BlogPostMeta, "slug">) };
}
