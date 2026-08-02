import { cn } from "@/lib/utils";
import type * as React from "react";

type BadgeProps = React.ComponentProps<"span"> & {
  tone?: "neutral" | "brand";
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        tone === "neutral" &&
          "border-line bg-surface-raised border text-neutral-300",
        tone === "brand" && "bg-brand/10 text-brand ring-brand/25 ring-1",
        className,
      )}
      {...props}
    />
  );
}
