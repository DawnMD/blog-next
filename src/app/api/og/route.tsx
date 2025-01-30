/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import dayjs from "dayjs";
import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";
export const dynamic = "force-static";

type BlogPost = {
  title: string;
  description: string;
  published_at: Date;
  reading_time_minutes: number;
  body_markdown: string;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const blogDetailResponse = await fetch(`https://dev.to/api/articles/${id}`);

  if (!blogDetailResponse.ok) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }

  const blogDetailData = (await blogDetailResponse.json()) as BlogPost;

  return new ImageResponse(
    (
      <div tw="bg-black p-8 flex h-full w-full flex-col items-center justify-center text-white font-sans">
        <div
          tw="bg-neutral-900 grow rounded-lg flex flex-col w-full p-8"
          style={{ gap: "32px" }}
        >
          <div tw="text-neutral-200 text-xl font-semibold">
            mainakdevelop.com
          </div>
          <div
            tw="flex flex-col"
            style={{
              gap: "8px",
            }}
          >
            <p tw="text-neutral-50 text-4xl" style={{ fontWeight: "bold" }}>
              {blogDetailData.title}
            </p>
            <div tw="flex items-center" style={{ gap: "8px" }}>
              <p tw="text-neutral-400 text-sm">
                {dayjs(blogDetailData.published_at).format("MMMM D, YYYY")}
              </p>
              <div tw="w-1 h-1 bg-neutral-400 rounded-full"></div>
              <p tw="text-neutral-400 text-sm">
                {blogDetailData.reading_time_minutes} min read
              </p>
            </div>
          </div>
          <div tw="flex flex-row items-center" style={{ gap: "8px" }}>
            <img
              width="45"
              height="45"
              src={`https://github.com/dawnmd.png`}
              style={{
                borderRadius: 128,
              }}
            />
            <p tw="text-white font-semibold text-lg">Mainak Das</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
