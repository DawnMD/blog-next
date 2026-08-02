import { articleIdFromSlug, getBlogPost } from "@/lib/devto";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import rangeParser from "parse-numeric-range";
import { Suspense } from "react";
import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const id = articleIdFromSlug(slug);
  const post = await getBlogPost(id);

  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: dayjs(post.published_at).toISOString(),
      images: [`/api/og?id=${id}`],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?id=${id}`],
    },
  };
}

async function BlogArticleContent({ slug }: { slug: string }) {
  const id = articleIdFromSlug(slug);
  const post = await getBlogPost(id);

  if (!post) notFound();

  return (
    <article>
      <Link
        href="/blogs"
        className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-100"
      >
        <ArrowLeftIcon
          className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
          aria-hidden="true"
        />
        All posts
      </Link>

      <header className="border-line-soft mt-8 border-b pb-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
          <time dateTime={dayjs(post.published_at).format("YYYY-MM-DD")}>
            {dayjs(post.published_at).format("MMMM D, YYYY")}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.reading_time_minutes} min read</span>
        </div>
        <h1 className="font-calSans mt-4 text-3xl leading-tight tracking-tight text-neutral-50 sm:text-5xl">
          {post.title}
        </h1>
        {post.description ? (
          <p className="mt-5 text-lg leading-relaxed text-neutral-400">
            {post.description}
          </p>
        ) : null}
      </header>

      <div
        className="prose prose-neutral prose-invert mt-10 max-w-none
          prose-headings:font-calSans prose-headings:tracking-tight prose-headings:text-neutral-50
          prose-a:text-brand prose-a:decoration-brand/40 prose-a:underline-offset-4 hover:prose-a:decoration-brand
          prose-strong:text-neutral-100
          prose-code:rounded prose-code:bg-neutral-800/70 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
          prose-pre:border prose-pre:border-line-soft prose-pre:bg-surface prose-pre:p-0
          prose-blockquote:border-l-brand prose-blockquote:not-italic prose-blockquote:text-neutral-300
          prose-img:rounded-xl prose-hr:border-line-soft
          lg:prose-lg"
      >
        <Markdown
          components={{
            code: ({ node, className, ...props }) => {
              const hasLang = /language-(\w+)/.exec(className ?? "");
              const hasMeta = node?.data?.meta;

              const applyHighlights: object = (applyHighlights: number) => {
                if (hasMeta) {
                  const RE = /{([\d,-]+)}/;
                  const metadata = node.data?.meta?.replace(/\s/g, "");
                  const strlineNumbers = RE?.test(metadata ?? "")
                    ? RE?.exec(metadata ?? "")?.[1]
                    : "0";
                  const highlightLines = rangeParser(strlineNumbers ?? "");
                  const highlight = highlightLines;
                  const data: string = highlight.includes(applyHighlights)
                    ? "highlight"
                    : "";
                  return { data };
                } else {
                  return {};
                }
              };
              return hasLang ? (
                <SyntaxHighlighter
                  style={nightOwl}
                  language={hasLang[1]}
                  PreTag="div"
                  className="codeStyle"
                  showLineNumbers={true}
                  wrapLines={!!hasMeta}
                  useInlineStyles={true}
                  lineProps={applyHighlights}
                >
                  {Array.isArray(props.children)
                    ? props.children[0]
                    : props.children}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props} />
              );
            },
            img: (props) => {
              if (props.src && props.alt && typeof props.src === "string") {
                const { src, alt } = props;
                return (
                  <Image
                    src={src}
                    alt={alt}
                    width={720}
                    height={405}
                    className="mx-auto rounded-xl"
                  />
                );
              }
              // Without dimensions we fall back to a plain `img`.
              // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
              return <img {...props} />;
            },
          }}
          remarkPlugins={[remarkGfm]}
        >
          {post.body_markdown}
        </Markdown>
      </div>

      <footer className="border-line-soft mt-16 flex flex-wrap items-center justify-between gap-4 border-t pt-8">
        <p className="text-sm text-neutral-500">
          Thanks for reading. Found a mistake? Tell me about it.
        </p>
        <Link
          href="/blogs"
          className="text-brand hover:text-brand-soft text-sm font-semibold transition-colors"
        >
          Read more posts →
        </Link>
      </footer>
    </article>
  );
}

function ArticleFallback() {
  return (
    <div aria-busy="true" className="animate-pulse">
      <div className="h-4 w-24 rounded bg-neutral-800" />
      <div className="border-line-soft mt-8 border-b pb-8">
        <div className="h-4 w-40 rounded bg-neutral-800" />
        <div className="mt-4 h-10 w-4/5 rounded bg-neutral-700" />
        <div className="mt-5 h-5 w-2/3 rounded bg-neutral-800" />
      </div>
      <div className="mt-10 space-y-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-4 w-full rounded bg-neutral-800" />
        ))}
      </div>
    </div>
  );
}

async function BlogPageInner({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogArticleContent slug={slug} />;
}

export default function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-10 sm:px-8 sm:pt-16">
      <Suspense fallback={<ArticleFallback />}>
        <BlogPageInner params={params} />
      </Suspense>
    </div>
  );
}
