import { PageHeader } from "@/components/shared/PageHeader";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { experiences, projects, siteConfig } from "@/config/site";
import { DownloadIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected projects and professional experience of ${siteConfig.name}, ${siteConfig.role}.`,
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-8 sm:pt-16">
      <PageHeader
        eyebrow="Work"
        title="Things I've built and shipped"
        intro="Products, platforms and the problems behind them — from multi-tenant SaaS to Slack automation and CRM-backed AI workflows."
      />

      <section aria-labelledby="projects" className="mt-16">
        <h2
          id="projects"
          className="font-calSans text-2xl text-neutral-50 sm:text-3xl"
        >
          Projects
        </h2>
        <div className="mt-8 grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section aria-labelledby="experience" className="mt-24">
        <h2
          id="experience"
          className="font-calSans text-2xl text-neutral-50 sm:text-3xl"
        >
          Professional experience
        </h2>

        <div className="mt-8 space-y-6">
          {experiences.map((job) => (
            <article
              key={job.company}
              className="border-line-soft bg-surface rounded-2xl border p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-calSans text-xl text-neutral-50">
                    {job.role}
                  </h3>
                  <p className="text-brand mt-1 text-sm">
                    {job.company} · {job.location}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {job.internship && <Badge tone="brand">Internship</Badge>}
                  <Badge>{job.period}</Badge>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-neutral-400">
                {job.summary}
              </p>

              <dl className="mt-6 space-y-5">
                {job.highlights.map((highlight) => (
                  <div key={highlight.title}>
                    <dt className="text-sm font-semibold text-neutral-100">
                      {highlight.title}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                      {highlight.body}
                    </dd>
                  </div>
                ))}
              </dl>

              <ul className="border-line-soft mt-7 flex flex-wrap gap-2 border-t pt-6">
                {job.stack.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="border-line-soft mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed p-6">
        <p className="text-sm text-neutral-400">
          Prefer the one-page version? Grab the PDF.
        </p>
        <a
          href={siteConfig.resumeUrl}
          download
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          <DownloadIcon className="size-4" aria-hidden="true" />
          Download résumé
        </a>
      </div>
    </div>
  );
}
