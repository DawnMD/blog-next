import dayjs from "dayjs";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 6400800;

export const metadata: Metadata = {
  title: "Blogs | Mainak Das",
  description: "Blogs of Mainak Das",
};

export type BlogsResponseParsed = {
  id: number;
  title: string;
  description: string;
  published_at: Date;
  slug: string;
  reading_time_minutes: number;
};

export default async function Blogs() {
  const data = await fetch("https://dev.to/api/articles/me/published", {
    headers: { "api-key": "YGv3UXp8JSe52dxskhvhCfiF" },
  });

  const blogsData = (await data.json()) as BlogsResponseParsed[];

  return (
    <div className="relative mb-12 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <header className="max-w-2xl">
          <h4 className="font-calSans text-brand text-6xl">Blogs</h4>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
            Writing on software design, website building, and the technology
            industry.
          </h1>
          <p className="mt-6 text-base text-neutral-400">
            All of my long-form thoughts on programming, leadership, product
            design, and more, collected in chronological order.
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <div className="md:border-brand/40 md:border-l md:pl-6">
            <div className="flex max-w-3xl flex-col space-y-16">
              {blogsData
                .sort((a, b) =>
                  dayjs(b.published_at).isAfter(a.published_at) ? 1 : -1,
                )
                .map((blog) => (
                  <article
                    key={blog.id}
                    className="md:grid md:grid-cols-4 md:items-baseline"
                  >
                    <div className="group relative flex flex-col items-start md:col-span-3">
                      <h2 className="text-base font-semibold tracking-tight text-neutral-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href={`/blogs/${blog.slug}-${blog.id}`}>
                          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span className="relative z-10">{blog.title}</span>
                        </Link>
                      </h2>
                      <div className="relative z-10 order-first mb-3 flex items-center gap-2 pl-3.5 text-neutral-500 md:hidden">
                        <time className="text-sm" dateTime="2022-09-05">
                          <span
                            className="absolute inset-y-0 left-0 flex items-center"
                            aria-hidden="true"
                          >
                            <span className="h-4 w-0.5 rounded-full bg-neutral-500"></span>
                          </span>
                          {dayjs(blog.published_at).format("MMMM D, YYYY")}
                        </time>
                        <span className="h-1 w-1 rounded-full bg-neutral-500"></span>
                        <p className="text-xs">
                          {blog.reading_time_minutes} mins read
                        </p>
                      </div>
                      <p className="relative z-10 mt-2 text-sm text-neutral-400">
                        {blog.description}
                      </p>
                      <div
                        aria-hidden="true"
                        className="text-brand relative z-10 mt-4 flex items-center text-sm font-medium"
                      >
                        Read article
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          className="ml-1 h-4 w-4 stroke-current"
                        >
                          <path
                            d="M6.75 5.75 9.25 8l-2.5 2.25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative z-10 order-first mb-3 mt-1 hidden items-center text-neutral-500 md:block">
                      <time className="text-sm" dateTime="2022-09-05">
                        {dayjs(blog.published_at).format("MMMM D, YYYY")}
                      </time>
                      <p className="text-xs">
                        {blog.reading_time_minutes} mins read
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
