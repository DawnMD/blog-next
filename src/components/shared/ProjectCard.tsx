import { Badge } from "@/components/ui/badge";
import type { Project } from "@/config/site";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border-line-soft bg-surface hover:border-brand/30 group relative overflow-hidden rounded-2xl border p-6 transition-colors duration-300 sm:p-8">
      {/* Soft brand wash that only appears on hover. */}
      <div className="from-brand/6 pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-calSans text-2xl text-neutral-50">
              {project.name}
            </h3>
            <p className="text-brand mt-1 text-sm">{project.tagline}</p>
          </div>
          <Badge>{project.year}</Badge>
        </div>

        <p className="mt-5 leading-relaxed text-neutral-400">
          {project.description}
        </p>

        <ul className="mt-6 space-y-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-relaxed text-neutral-400"
            >
              <span
                className="bg-brand/60 mt-2 size-1.5 shrink-0 rounded-full"
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        {(project.href ?? project.repo) && (
          <div className="border-line-soft mt-7 flex flex-wrap items-center gap-5 border-t pt-6">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-soft inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              >
                <ExternalLinkIcon className="size-4" aria-hidden="true" />
                Live site
                <span className="sr-only"> for {project.name}</span>
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 transition-colors hover:text-neutral-50"
              >
                <GitHubLogoIcon className="size-4" aria-hidden="true" />
                Source
                <span className="sr-only"> for {project.name}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
