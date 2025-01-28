"use client"; // Error components must be Client Components

import type { Metadata } from "next";
import { useEffect } from "react";
export const metadata: Metadata = {
  title: "Internal Error | Mainak Das",
  description: " Something went wrong",
};

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold">500</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Something went wrong!
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={reset}
            className="bg-brand hover:bg-brand focus-visible:outline-brand rounded-md px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Try again!
          </button>
        </div>
      </div>
    </main>
  );
}
