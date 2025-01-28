import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found | Mainak Das",
  description: "Sorry, we couldn't find the page you're looking for.",
};

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-brand text-base font-semibold">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/blogs"
            className="bg-brand hover:bg-brand focus-visible:outline-brand rounded-md px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            See all blogs
          </Link>
        </div>
      </div>
    </main>
  );
}
