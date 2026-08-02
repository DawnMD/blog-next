import { cacheLife, cacheTag } from "next/cache";

export type BlogsResponseParsed = {
  id: number;
  title: string;
  description: string;
  published_at: Date;
  slug: string;
  reading_time_minutes: number;
  tag_list?: string[];
};

export type BlogPost = {
  title: string;
  description: string;
  published_at: Date;
  reading_time_minutes: number;
  body_markdown: string;
  tags?: string;
};

/** dev.to slugs end in the numeric article id, e.g. `my-post-title-1234567`. */
export function articleIdFromSlug(slug: string) {
  return slug.split("-").at(-1) ?? slug;
}

export function blogHref(blog: Pick<BlogsResponseParsed, "slug" | "id">) {
  return `/blogs/${blog.slug}-${blog.id}`;
}

/** Newest first. */
export async function getPublishedBlogs(): Promise<BlogsResponseParsed[]> {
  "use cache";
  cacheLife("days");
  cacheTag("blog-list");

  const apiKey = process.env.DEVTO_API_KEY;
  if (!apiKey) {
    throw new Error("Missing DEVTO_API_KEY environment variable");
  }

  const res = await fetch("https://dev.to/api/articles/me/published", {
    headers: { "api-key": apiKey },
  });

  if (!res.ok) {
    throw new Error(`dev.to responded with ${res.status}`);
  }

  const blogs = (await res.json()) as BlogsResponseParsed[];

  return [...blogs].sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  );
}

export async function getBlogPost(articleId: string): Promise<BlogPost | null> {
  "use cache";
  cacheLife("days");
  cacheTag(`blog-${articleId}`);

  const res = await fetch(`https://dev.to/api/articles/${articleId}`);
  if (!res.ok) return null;
  return (await res.json()) as BlogPost;
}
