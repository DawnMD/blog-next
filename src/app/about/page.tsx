import { PageHeader } from "@/components/shared/PageHeader";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { education, siteConfig, skillGroups, socials } from "@/config/site";
import { cn } from "@/lib/utils";
import { DownloadIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: `${siteConfig.name} — ${siteConfig.role} based in ${siteConfig.location}. ${siteConfig.summary}`,
};

const timeline = [
  {
    year: "2026",
    events: [
      {
        title: "Shipped Tutor OS 🚀",
        body: "Designed and built a multi-tenant SaaS for tuition and coaching centres on Next.js 16, oRPC and Prisma 7 — full type safety from Postgres all the way to the UI, with RBAC, on-the-fly fee computation and Razorpay payments.",
      },
      {
        title: "Wrapped up at Codemancers",
        body: "Closed out four and a half years at Codemancers, having led a small team and shipped everything from a Slack standup platform to AI-driven sales automation. Now looking for the next hard problem.",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        title: "Started leading 🧭",
        body: "Took on a team of three engineers — code reviews, mentoring, architecture calls and feature planning alongside product managers.",
      },
    ],
  },
  {
    year: "2021",
    events: [
      {
        title: "Joined Codemancers full time 🎉",
        body: "Converted my internship into a full-time offer, designing, building and deploying solutions for customers and for Codemancers itself.",
      },
      {
        title: "A short, sharp stint at CXDeployer ℹ️",
        body: "Built customer journey visualization and Kanban interfaces with React and Redux Toolkit, plus a JWT auth layer on Express and MongoDB.",
      },
      {
        title: "Graduated university 👨🏽‍🎓",
        body: "Finished my B.Tech in Computer Science Engineering at Adamas University, Kolkata.",
      },
      {
        title: "Frontend internship at APlus Topper 💡",
        body: "Learned how a web development company actually operates, and got real exposure to production frontend work.",
      },
    ],
  },
  {
    year: "2020",
    events: [
      {
        title: "First internship 💡",
        body: "A few months of self-teaching turned into my first internship at Next Generation Technocom Pvt. Ltd.",
      },
      {
        title: "Started learning frontend 🧑‍💻",
        body: "During the pandemic I fell into React videos on YouTube, went down the HTML/CSS/JavaScript rabbit hole, and never really came back out.",
      },
    ],
  },
  {
    year: "2017",
    events: [
      {
        title: "Started at Adamas University 🎓",
        body: "Began my undergraduate degree in Computer Science Engineering.",
      },
    ],
  },
  {
    year: "2016",
    events: [
      {
        title: "Wrote my first program 📝",
        body: "A friend's brother taught me the basics of C. From that moment I knew this was going to be an interesting uphill climb.",
      },
    ],
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-8 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div>
          <PageHeader
            eyebrow="About"
            title={`I'm ${siteConfig.name}, a ${siteConfig.role.toLowerCase()}.`}
          />

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-400">
            <p>{siteConfig.summary}</p>
            <p>
              For the last few years I&apos;ve worked mostly on the seams of a
              product — the place where the database schema, the API contract
              and the UI all have to agree. I like{" "}
              <strong className="font-semibold text-neutral-100">
                making that agreement impossible to break
              </strong>
              : typed RPC layers, generated clients, server-first rendering, and
              tests that fail loudly before a user ever sees a bug.
            </p>
            <p>
              I&apos;m largely{" "}
              <strong className="font-semibold text-neutral-100">
                self-taught
              </strong>
              , which is probably why I care so much about developer experience
              and about writing things down. I&apos;ve led a small team, run code
              reviews, mentored juniors, and spent a lot of time arguing
              constructively about architecture.
            </p>
            <p>
              Outside of work I&apos;m a{" "}
              <strong className="font-semibold text-neutral-100">
                music enthusiast
              </strong>{" "}
              and a{" "}
              <strong className="font-semibold text-neutral-100">gamer</strong>,
              and I write the occasional tutorial to save someone else the two
              hours I lost.
            </p>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Image
            src={siteConfig.avatar}
            alt={`Portrait of ${siteConfig.name}`}
            width={400}
            height={400}
            className="border-line aspect-square w-full rounded-3xl border object-cover object-top"
          />

          <ul className="mt-6 space-y-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-neutral-50"
                >
                  <SocialIcon
                    name={social.icon}
                    className="group-hover:text-brand size-4 text-neutral-500 transition-colors"
                  />
                  <span className="truncate">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={siteConfig.resumeUrl}
            download
            className={cn(buttonVariants({ size: "md" }), "mt-6 w-full")}
          >
            <DownloadIcon className="size-4" aria-hidden="true" />
            Download résumé
          </a>

          <dl className="border-line-soft mt-6 space-y-3 border-t pt-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">Based in</dt>
              <dd className="text-right text-neutral-300">
                {siteConfig.location}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">Status</dt>
              <dd className="text-brand text-right">
                {siteConfig.availability}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">Education</dt>
              <dd className="text-right text-neutral-300">
                {education.degree}
                <span className="block text-xs text-neutral-500">
                  {education.institution}, {education.year}
                </span>
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <section aria-labelledby="skills" className="mt-24">
        <h2
          id="skills"
          className="font-calSans text-2xl text-neutral-50 sm:text-3xl"
        >
          Toolbox
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Things I reach for regularly. The list is deliberately boring — most
          of these have earned their place in production.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-line-soft bg-surface rounded-2xl border p-6"
            >
              <h3 className="text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────── */}
      <section aria-labelledby="timeline" className="mt-24">
        <h2
          id="timeline"
          className="font-calSans text-2xl text-neutral-50 sm:text-3xl"
        >
          Timeline
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Chronological moments since I first learned what a compiler was.
        </p>

        <div className="mt-10 space-y-12">
          {timeline.map((entry) => (
            <div
              key={entry.year}
              className="grid gap-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
            >
              <h3 className="font-calSans text-brand text-3xl leading-none sm:sticky sm:top-28 sm:self-start">
                {entry.year}
              </h3>
              <ol className="border-line-soft space-y-8 border-l pl-6">
                {entry.events.map((event) => (
                  <li key={event.title} className="relative">
                    <span
                      aria-hidden="true"
                      className="bg-brand absolute top-2 -left-[28.5px] size-2 rounded-full"
                    />
                    <h4 className="font-semibold text-neutral-100">
                      {event.title}
                    </h4>
                    <p className="mt-2 leading-relaxed text-neutral-400">
                      {event.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
