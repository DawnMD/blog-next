import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post not found",
  description: "Sorry, we couldn't find the post you're looking for.",
};

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-5xl place-items-center px-5 py-28 text-center sm:px-8">
      <p className="font-calSans text-brand text-sm tracking-[0.2em] uppercase">
        404
      </p>
      <h1 className="font-calSans mt-4 text-4xl tracking-tight text-neutral-50 sm:text-5xl">
        Post not found
      </h1>
      <p className="mt-5 max-w-md leading-relaxed text-neutral-400">
        This article may have been unpublished, or the link is wrong.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/blogs" className={buttonVariants({ size: "md" })}>
          See all posts
        </Link>
        <Link
          href="/"
          className={buttonVariants({ variant: "secondary", size: "md" })}
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
