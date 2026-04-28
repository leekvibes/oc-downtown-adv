/* ──────────────────────────────────────────────────────────
   MDX COMPONENTS
   Required by @next/mdx for App Router. Maps markdown
   elements (h1, h2, p, ul, etc.) to styled React components
   so blog posts inherit the OC Downtown brand without the
   author having to think about styling. Author writes plain
   markdown — these mappings make it look right.
   ────────────────────────────────────────────────────────── */

import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-extrabold text-dark mt-10 mb-5 leading-tight tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-12 mb-4 leading-tight tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl md:text-3xl font-bold text-dark mt-10 mb-3 leading-snug">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-bold text-dark mt-8 mb-2 leading-snug">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-text text-lg leading-relaxed mb-5">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-brand font-semibold underline underline-offset-4 hover:text-blue-brand/80"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className="text-blue-brand font-semibold underline underline-offset-4 hover:text-blue-brand/80"
      >
        {children}
      </Link>
    );
  },
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 mb-6 text-gray-text text-lg leading-relaxed space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 mb-6 text-gray-text text-lg leading-relaxed space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-yellow-brand bg-yellow-brand/5 pl-6 pr-4 py-3 my-6 italic text-gray-text">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 text-blue-brand px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  hr: () => <hr className="my-10 border-t border-gray-200" />,
  strong: ({ children }) => (
    <strong className="font-bold text-dark">{children}</strong>
  ),
  /* When a blog post uses ![alt](src) markdown for an image,
     route it through next/image. Width/height fall back to a
     sensible default so the layout doesn't shift. */
  img: (props) => (
    <Image
      width={1200}
      height={675}
      sizes="(max-width: 768px) 100vw, 768px"
      className="rounded-2xl my-8 w-full h-auto"
      {...(props as ImageProps)}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
