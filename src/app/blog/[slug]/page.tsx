/* ──────────────────────────────────────────────────────────
   BLOG POST PAGE — dynamic route /blog/[slug]
   Server component. Dynamically imports the matching MDX file
   from /content/blog/<slug>.mdx, reads its frontmatter via
   gray-matter, and renders the body through the global MDX
   component map (mdx-components.tsx).

   ⚠️ Next.js 16: `params` is a Promise — must be awaited.
   ────────────────────────────────────────────────────────── */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostMeta } from "@/lib/blog";
import { breadcrumbSchema } from "@/components/StructuredData";
import { BOOKING_URL } from "@/lib/constants";

type Params = Promise<{ slug: string }>;

/** Pre-render every published post at build time. */
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

/** Per-post <head> metadata: title, description, OG, canonical. */
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};

  const url = `https://ocdowntownadventures.com/blog/${slug}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      type: "article",
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt ?? meta.publishedAt,
      authors: [meta.author],
      images: [meta.cover],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.cover],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) notFound();

  /* Dynamic import resolves the actual MDX content as a React component.
     The frontmatter block is stripped by remark-frontmatter during compile,
     so what we render here is just the body. */
  const { default: PostBody } = await import(`@/../content/blog/${slug}.mdx`);

  const url = `https://ocdowntownadventures.com/blog/${slug}`;

  /* BlogPosting JSON-LD — gives Google an explicit structured signal.
     Article rich results require headline + datePublished + author. */
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    image: meta.cover,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    author: {
      "@type": "Organization",
      name: meta.author,
      url: "https://ocdowntownadventures.com",
    },
    publisher: {
      "@type": "Organization",
      name: "OC Downtown Adventures",
      logo: {
        "@type": "ImageObject",
        url: "https://ocdowntownadventures.com/og-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: meta.tags?.join(", "),
  };

  const crumbs = breadcrumbSchema([
    { name: "Home", url: "https://ocdowntownadventures.com" },
    { name: "Blog", url: "https://ocdowntownadventures.com/blog" },
    { name: meta.title, url },
  ]);

  /* Surface the next 2 most recent posts (excluding this one) as
     "Keep reading" recs at the bottom. Cheap retention boost. */
  const otherPosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      {/* Hero with cover image */}
      <article>
        <header className="relative pt-28 md:pt-36 pb-12 bg-gradient-to-br from-blue-dark to-blue-brand text-white">
          <div className="max-w-3xl mx-auto px-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-yellow-brand text-sm font-semibold mb-6 hover:text-yellow-hover transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to all posts
            </Link>
            <div className="flex items-center gap-3 text-xs font-semibold text-yellow-brand mb-4 uppercase tracking-widest">
              <span>{meta.category}</span>
              <span aria-hidden>•</span>
              <span className="text-white/70">{meta.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              {meta.title}
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-6 leading-relaxed">
              {meta.description}
            </p>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <span className="font-semibold">{meta.author}</span>
              <span aria-hidden>•</span>
              <time dateTime={meta.publishedAt}>
                {new Date(meta.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </header>

        {/* Cover image */}
        <div className="bg-gray-light pb-12">
          <div className="max-w-4xl mx-auto px-4 -mt-12 md:-mt-16">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
              <Image
                src={meta.cover}
                alt={meta.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <PostBody />
          </div>
        </div>
      </article>

      {/* Booking CTA */}
      <section className="bg-blue-dark text-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Ready to get on the water?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book your jet ski tour or pontoon cruise on Assateague Bay.
            Brand-new equipment, free parking, family-owned since day one.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-yellow-brand text-dark font-bold rounded-full hover:bg-yellow-hover transition-colors shadow-lg"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="bg-gray-light py-14 md:py-20 border-t border-gray-border">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">
              Keep Reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((post) => (
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
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold text-blue-brand uppercase tracking-widest mb-2">
                      {post.category}
                    </div>
                    <h3 className="text-lg font-bold text-dark leading-snug group-hover:text-blue-brand transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
