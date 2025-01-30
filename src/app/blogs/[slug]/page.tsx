import dayjs from "dayjs";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import rangeParser from "parse-numeric-range";
import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

type BlogPost = {
  title: string;
  description: string;
  published_at: Date;
  reading_time_minutes: number;
  body_markdown: string;
};

export const dynamic = "force-static";
export const revalidate = 6400800;

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  //the id is the last part of the slug
  const id = slug.split("-")[slug.split("-").length - 1];

  const blogDetailResponse = await fetch(`https://dev.to/api/articles/${id}`);

  if (!blogDetailResponse.ok) {
    notFound();
  }

  const blogDetailData = (await blogDetailResponse.json()) as BlogPost;

  return {
    title: blogDetailData.title,
    description: blogDetailData.description,
    openGraph: {
      images: [`/api/og?id=${id}`],
    },
  } satisfies Metadata;
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = slug.split("-")[slug.split("-").length - 1];
  const blogDetailResponse = await fetch(`https://dev.to/api/articles/${id}`);

  const blogDetailData = (await blogDetailResponse.json()) as BlogPost;

  return (
    <article className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
          {blogDetailData.title}
        </h1>
        <div className="order-first flex items-center justify-between text-base text-neutral-400">
          <time
            dateTime={dayjs(blogDetailData.published_at).format("MMMM D, YYYY")}
          >
            <span className="ml-3">
              {dayjs(blogDetailData.published_at).format("MMMM D, YYYY")}
            </span>
          </time>
          <span className="text-sm">
            {blogDetailData.reading_time_minutes} mins read
          </span>
        </div>
      </div>
      <div className="prose prose-neutral prose-invert lg:text-lg">
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
              if (props.src && props.alt) {
                const { src, alt } = props;
                return (
                  <Image
                    src={src}
                    alt={alt}
                    width={720}
                    height={405}
                    className="mx-auto rounded-lg"
                  />
                );
              } else {
                // If we don’t have the image’s dimensions, let’s use a classic
                // `img` element.
                // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                return <img {...props} />;
              }
            },
          }}
          remarkPlugins={[remarkGfm]}
        >
          {blogDetailData.body_markdown}
        </Markdown>
      </div>
    </article>
  );
}
