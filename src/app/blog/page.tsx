/* ──────────────────────────────────────────────────────────
   BLOG INDEX
   Lists all posts from /content/blog/*.mdx, newest first.
   Server component — reads MDX frontmatter at build time
   via src/lib/blog.ts.
   ────────────────────────────────────────────────────────── */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { breadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Blog | Ocean City Jet Ski & Pontoon Tips, Guides & Stories",
  description:
    "Local guides, tips, and stories from OC Downtown Adventures. How to choose between a jet ski tour and pontoon rental, where to find wild horses, the best sunset spots, and more.",
  keywords: [
    "ocean city jet ski blog",
    "pontoon rental tips ocean city",
    "assateague bay guide",
    "wild horses assateague",
    "ocean city water sports tips",
    "best time to jet ski ocean city",
  ],
  alternates: {
    canonical: "https://ocdowntownadventures.com/blog",
  },
  openGraph: {
    title: "Blog | OC Downtown Adventures",
    description:
      "Tips, guides, and stories from the dock. Plan your jet ski or pontoon adventure with insider info from a local family-owned operator.",
    url: "https://ocdowntownadventures.com/blog",
    images: ["/og-logo.png"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const crumbs = breadcrumbSchema([
    { name: "Home", url: "https://ocdowntownadventures.com" },
    { name: "Blog", url: "https://ocdowntownadventures.com/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-dark to-blue-brand pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-yellow-brand)_0%,_transparent_50%)] opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
          <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-5">
            From the Dock
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight leading-tight">
            Tips, Guides &amp; Stories
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
            Local insight from people who actually run the bay. Plan a better
            trip, find the wild horses, and pick the right ride for your group.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center text-gray-text">
              No posts yet. Check back soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-border"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs font-semibold text-blue-brand mb-3">
                      <span className="uppercase tracking-widest">
                        {post.category}
                      </span>
                      <span aria-hidden>•</span>
                      <span className="text-gray-text">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-extrabold text-dark mb-2 leading-snug group-hover:text-blue-brand transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-text text-sm leading-relaxed mb-5 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-text border-t border-gray-border pt-4">
                      <span className="font-medium">{post.author}</span>
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
