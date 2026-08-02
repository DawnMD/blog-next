import { BlogMeta } from "@/components/shared/BlogCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { blogHref, getPublishedBlogs } from "@/lib/devto";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Long-form writing on software design, building for the web, and the technology industry.",
};

async function BlogList() {
  const blogs = await getPublishedBlogs();

  if (blogs.length === 0) {
    return (
      <p className="text-neutral-400">
        Nothing published yet — check back soon.
      </p>
    );
  }

  return (
    <div className="flex flex-col">
      {blogs.map((blog) => (
        <article key={blog.id} className="group relative">
          <Link
            href={blogHref(blog)}
            className="border-line-soft flex flex-col gap-2 border-b py-8 transition-colors md:grid md:grid-cols-[10rem_1fr] md:gap-8"
          >
            <BlogMeta
              blog={blog}
              className="flex items-center gap-2 text-sm text-neutral-500 md:mt-1 md:flex-col md:items-start md:gap-1"
            />

            <div>
              <h2 className="font-calSans group-hover:text-brand text-xl leading-snug text-neutral-100 transition-colors">
                {blog.title}
              </h2>
              <p className="mt-2 leading-relaxed text-neutral-400">
                {blog.description}
              </p>
              <span
                aria-hidden="true"
                className="text-brand mt-4 inline-flex items-center gap-1 text-sm font-medium"
              >
                Read article
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="size-4 stroke-current transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

function BlogListFallback() {
  return (
    <div className="flex flex-col" aria-busy="true">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="border-line-soft animate-pulse border-b py-8 md:grid md:grid-cols-[10rem_1fr] md:gap-8"
        >
          <div className="h-4 w-32 rounded bg-neutral-800" />
          <div className="mt-3 md:mt-0">
            <div className="h-6 w-3/4 rounded bg-neutral-700" />
            <div className="mt-3 h-4 w-full rounded bg-neutral-800" />
            <div className="mt-2 h-4 w-2/3 rounded bg-neutral-800" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Blogs() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-8 sm:pt-16">
      <PageHeader
        eyebrow="Writing"
        title="Notes on building for the web"
        intro="Long-form thoughts on software design, frontend architecture, and the tools I use day to day — collected in chronological order."
      />

      <div className="mt-12">
        <Suspense fallback={<BlogListFallback />}>
          <BlogList />
        </Suspense>
      </div>
    </div>
  );
}
