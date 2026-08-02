import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("animate-rise max-w-2xl", className)}>
      {eyebrow ? (
        <p className="text-brand font-calSans text-sm tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-calSans mt-3 text-4xl tracking-tight text-neutral-50 sm:text-5xl">
        {title}
      </h1>
      {intro ? (
        <div className="mt-5 text-base leading-relaxed text-neutral-400">
          {intro}
        </div>
      ) : null}
    </header>
  );
}
