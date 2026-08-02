import { blogHref, type BlogsResponseParsed } from "@/lib/devto";
import dayjs from "dayjs";
import Link from "next/link";

export function BlogMeta({
  blog,
  className,
}: {
  blog: BlogsResponseParsed;
  className?: string;
}) {
  return (
    <div className={className}>
      <time dateTime={dayjs(blog.published_at).format("YYYY-MM-DD")}>
        {dayjs(blog.published_at).format("MMM D, YYYY")}
      </time>
      <span aria-hidden="true">·</span>
      <span>{blog.reading_time_minutes} min read</span>
    </div>
  );
}

/**
 * The whole card is clickable via a stretched overlay link, so the heading
 * stays the single accessible link target.
 */
export function BlogCard({ blog }: { blog: BlogsResponseParsed }) {
  return (
    <article className="border-line-soft bg-surface hover:border-brand/30 group relative flex flex-col rounded-2xl border p-6 transition-colors duration-300">
      <BlogMeta
        blog={blog}
        className="flex items-center gap-2 text-xs text-neutral-500"
      />

      <h3 className="font-calSans mt-3 text-lg leading-snug text-neutral-100 transition-colors group-hover:text-brand">
        <Link href={blogHref(blog)}>
          <span className="absolute inset-0 rounded-2xl" />
          {blog.title}
        </Link>
      </h3>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-400">
        {blog.description}
      </p>

      <span
        aria-hidden="true"
        className="text-brand mt-5 inline-flex items-center gap-1 text-sm font-medium"
      >
        Read article
        <svg viewBox="0 0 16 16" fill="none" className="size-4 stroke-current transition-transform duration-200 group-hover:translate-x-0.5">
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </article>
  );
}
