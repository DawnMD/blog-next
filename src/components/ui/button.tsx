import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

/**
 * Shared button styling. Exported separately from `Button` so anchors and
 * `next/link` can opt into the same look without a Slot dependency.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-neutral-950 hover:bg-brand-soft hover:shadow-[0_0_28px_-6px_var(--color-brand)]",
        secondary:
          "border border-line bg-surface-raised text-neutral-200 hover:border-neutral-600 hover:text-neutral-50",
        ghost: "text-neutral-400 hover:bg-surface-raised hover:text-neutral-50",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
