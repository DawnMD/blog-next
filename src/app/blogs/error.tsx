"use client"; // Error components must be Client Components

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto grid max-w-5xl place-items-center px-5 py-28 text-center sm:px-8">
      <p className="font-calSans text-brand text-sm tracking-[0.2em] uppercase">
        Error
      </p>
      <h1 className="font-calSans mt-4 text-4xl tracking-tight text-neutral-50 sm:text-5xl">
        Couldn&apos;t load the posts
      </h1>
      <p className="mt-5 max-w-md leading-relaxed text-neutral-400">
        Something went wrong while fetching articles. It&apos;s probably
        temporary — give it another go.
      </p>
      {error.digest ? (
        <p className="mt-3 font-mono text-xs text-neutral-600">
          Reference: {error.digest}
        </p>
      ) : null}
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Button onClick={reset}>Try again</Button>
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
