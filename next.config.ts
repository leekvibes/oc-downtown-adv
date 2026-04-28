import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* Allow .md and .mdx files to act as pages and as imports.
     Required so the blog under /content/blog/*.mdx can be dynamic-imported
     by /src/app/blog/[slug]/page.tsx. */
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "website-media.com",
      },
    ],
  },
};

const withMDX = createMDX({
  // Compile both .md and .mdx
  extension: /\.(md|mdx)$/,
  options: {
    /* Plugin names are passed as strings so they work with Turbopack
       (Next 16's default bundler). Function references can't cross the
       JS↔Rust boundary. */
    remarkPlugins: [
      ["remark-frontmatter", ["yaml"]], // strip --- YAML --- so MDX compiles
      "remark-gfm",                      // GitHub-flavored markdown (tables, strikethrough, task lists)
    ],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
