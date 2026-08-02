import { BlogCard } from "@/components/shared/BlogCard";
import { SkillsMarquee } from "@/components/shared/Marquee";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  experiences,
  projects,
  siteConfig,
  socials,
  stats,
} from "@/config/site";
import { getPublishedBlogs } from "@/lib/devto";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.tagline,
};

function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-24 sm:mt-32">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-calSans text-2xl text-neutral-50 sm:text-3xl">
          {title}
        </h2>
        {action}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function SectionLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50"
    >
      {children}
      <ArrowRightIcon
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

async function LatestPosts() {
  const blogs = await getPublishedBlogs();

  if (blogs.length === 0) return null;

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {blogs.slice(0, 4).map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

function LatestPostsFallback() {
  return (
    <div className="grid gap-5 sm:grid-cols-2" aria-busy="true">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="border-line-soft bg-surface animate-pulse rounded-2xl border p-6"
        >
          <div className="h-3 w-32 rounded bg-neutral-800" />
          <div className="mt-4 h-5 w-3/4 rounded bg-neutral-700" />
          <div className="mt-4 h-3 w-full rounded bg-neutral-800" />
          <div className="mt-2 h-3 w-5/6 rounded bg-neutral-800" />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-8 sm:pt-16">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative">
        <div
          aria-hidden="true"
          className="dot-grid animate-glow pointer-events-none absolute -top-24 -left-24 -z-1 hidden size-96 opacity-40 [mask-image:radial-gradient(circle,black,transparent_70%)] lg:block"
        />

        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="animate-rise">
            <Badge tone="brand">
              <span className="relative flex size-2">
                <span className="bg-brand absolute inline-flex size-full animate-ping rounded-full opacity-60" />
                <span className="bg-brand relative inline-flex size-2 rounded-full" />
              </span>
              {siteConfig.availability}
            </Badge>

            <h1 className="font-calSans mt-6 text-4xl leading-[1.05] tracking-tight text-neutral-50 sm:text-6xl">
              {siteConfig.name}
              <span className="text-brand block">{siteConfig.role}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
              {siteConfig.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className={buttonVariants({ size: "lg" })}
              >
                Get in touch
              </a>
              <a
                href={siteConfig.resumeUrl}
                download
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                <DownloadIcon className="size-4" aria-hidden="true" />
                Download résumé
              </a>
            </div>

            <ul className="mt-8 flex items-center gap-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target={social.icon === "mail" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={`${social.name} — ${social.handle}`}
                    title={social.handle}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "border-line-soft hover:border-brand/40 hover:text-brand border",
                    )}
                  >
                    <SocialIcon name={social.icon} className="size-4.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-rise relative mx-auto w-full max-w-xs lg:max-w-none">
            <div
              aria-hidden="true"
              className="bg-brand/10 absolute -inset-2 -z-1 rounded-full blur-3xl"
            />
            <Image
              src={siteConfig.avatar}
              alt={`Portrait of ${siteConfig.name}`}
              width={480}
              height={480}
              priority
              className="border-line aspect-square w-full rounded-3xl border object-cover object-top"
            />
          </div>
        </div>

        <div className="border-line-soft mt-14 border-y py-6">
          <SkillsMarquee />
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-line-soft bg-surface rounded-2xl border p-6"
            >
              <dt className="text-sm text-neutral-500">{stat.label}</dt>
              <dd className="font-calSans text-brand mt-2 text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── About preview ─────────────────────────────────────────────── */}
      <Section
        title="What I do"
        action={<SectionLink href="/about">More about me</SectionLink>}
      >
        <p className="max-w-3xl text-lg leading-relaxed text-neutral-400">
          {siteConfig.summary}
        </p>
      </Section>

      {/* ── Featured work ─────────────────────────────────────────────── */}
      <Section
        title="Featured work"
        action={<SectionLink href="/work">All work</SectionLink>}
      >
        <div className="grid gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      {/* ── Experience ────────────────────────────────────────────────── */}
      <Section
        title="Where I've worked"
        action={<SectionLink href="/about">Full timeline</SectionLink>}
      >
        <ol className="border-line-soft border-l">
          {experiences.map((job) => (
            <li key={job.company} className="relative pb-10 pl-6 last:pb-0">
              <span
                aria-hidden="true"
                className="bg-brand absolute top-1.5 -left-[4.5px] size-2 rounded-full"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-calSans text-lg text-neutral-100">
                  {job.role}{" "}
                  <span className="text-neutral-500">· {job.company}</span>
                </h3>
                <p className="text-sm text-neutral-500">{job.period}</p>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
                {job.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.stack.slice(0, 6).map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Writing ───────────────────────────────────────────────────── */}
      <Section
        title="Latest writing"
        action={<SectionLink href="/blogs">All posts</SectionLink>}
      >
        <Suspense fallback={<LatestPostsFallback />}>
          <LatestPosts />
        </Suspense>
      </Section>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <section className="border-line-soft from-surface relative mt-24 overflow-hidden rounded-3xl border bg-gradient-to-br to-transparent p-8 text-center sm:mt-32 sm:p-14">
        <div
          aria-hidden="true"
          className="bg-brand/10 pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full blur-3xl"
        />
        <div className="relative">
          <h2 className="font-calSans text-3xl text-neutral-50 sm:text-4xl">
            Have something in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-neutral-400">
            I&apos;m {siteConfig.availability.toLowerCase()} — full-time roles,
            contract work, or just a conversation about a hard frontend problem.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className={buttonVariants({ size: "lg" })}
            >
              {siteConfig.email}
            </a>
            <a
              href="https://www.linkedin.com/in/mainak1147/"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
