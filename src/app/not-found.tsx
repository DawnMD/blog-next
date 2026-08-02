import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "Sorry, we couldn't find the page you're looking for.",
};

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-5xl place-items-center px-5 py-28 text-center sm:px-8">
      <p className="font-calSans text-brand text-sm tracking-[0.2em] uppercase">
        404
      </p>
      <h1 className="font-calSans mt-4 text-4xl tracking-tight text-neutral-50 sm:text-5xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-5 max-w-md leading-relaxed text-neutral-400">
        The link may be broken, or the page might have moved. Here are a couple
        of places that definitely do exist.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/" className={buttonVariants({ size: "md" })}>
          Back home
        </Link>
        <Link
          href="/blogs"
          className={buttonVariants({ variant: "secondary", size: "md" })}
        >
          Read the blog
        </Link>
      </div>
    </div>
  );
}
