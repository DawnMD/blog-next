/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { siteConfig } from "@/config/site";
import dayjs from "dayjs";
import { ImageResponse } from "next/og";
// App router includes @vercel/og — no need to install it.
// Note: runtime = "edge" is not used when cacheComponents is enabled.

type BlogPost = {
  title: string;
  description: string;
  published_at: Date;
  reading_time_minutes: number;
};

const BRAND = "#adfa1d";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const blogDetailResponse = await fetch(`https://dev.to/api/articles/${id}`, {
    next: { revalidate: 6400800 },
  });

  if (!blogDetailResponse.ok) {
    return new Response(`Failed to generate the image`, { status: 500 });
  }

  const post = (await blogDetailResponse.json()) as BlogPost;

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full flex-col p-14 text-white"
        style={{
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 88% 8%, rgba(173,250,29,0.16), transparent 45%)",
        }}
      >
        {/* Top bar: brand mark + host */}
        <div tw="flex items-center" style={{ gap: "14px" }}>
          <div
            tw="flex h-3 w-3 rounded-full"
            style={{ backgroundColor: BRAND }}
          />
          <div tw="text-lg text-neutral-400">
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>

        {/* Title */}
        <div tw="flex flex-1 flex-col justify-center" style={{ gap: "24px" }}>
          <div
            tw="text-6xl text-white"
            style={{ fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.02em" }}
          >
            {post.title.length > 90
              ? `${post.title.slice(0, 90)}…`
              : post.title}
          </div>
          <div tw="flex items-center text-xl text-neutral-400" style={{ gap: "12px" }}>
            <div>{dayjs(post.published_at).format("MMMM D, YYYY")}</div>
            <div tw="h-1.5 w-1.5 rounded-full bg-neutral-600" />
            <div>{post.reading_time_minutes} min read</div>
          </div>
        </div>

        {/* Author */}
        <div
          tw="flex items-center border-t pt-8"
          style={{ gap: "16px", borderColor: "#26262b" }}
        >
          <img
            width="56"
            height="56"
            src={siteConfig.avatar}
            style={{ borderRadius: 999, border: `2px solid ${BRAND}` }}
          />
          <div tw="flex flex-col">
            <div tw="text-xl text-white" style={{ fontWeight: 600 }}>
              {siteConfig.name}
            </div>
            <div tw="text-base text-neutral-500">{siteConfig.role}</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
