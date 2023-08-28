import { notFound } from 'next/navigation';
import { BlogsResponseParsed } from '../page';
import { MDXRemote } from 'next-mdx-remote/rsc';
import dayjs from 'dayjs';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const blogDetailResponse = await fetch(
    `https://dev.to/api/articles/${params.id}`,
    {
      method: 'GET',
      cache: 'no-cache',
    }
  );
  const blogDetailData = (await blogDetailResponse.json()) as BlogPost;
  return {
    title: blogDetailData.title,
    description: blogDetailData.description,
  } satisfies Metadata;
}

type BlogPost = {
  id: number;
  title: string;
  description: string;
  cover_image:
    | 'https://res.cloudinary.com/practicaldev/image/fetch/s--qgutBUrH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/88e62fzblbluz1dm7xjf.png'
    | null;
  url: 'https://dev.to/bytesized/byte-sized-episode-2-the-creation-of-graph-theory-34g1';
  comments_count: number;
  public_reactions_count: number;
  published_at: Date;
  reading_time_minutes: number;
  body_markdown: string;
};

export default async function BlogDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const data = await fetch('https://dev.to/api/articles/me/published', {
    method: 'GET',
    headers: { 'api-key': 'YGv3UXp8JSe52dxskhvhCfiF' },
    next: {
      revalidate: 604800,
    },
  });

  const blogsData = (await data.json()) as BlogsResponseParsed[];

  const isParamValid = blogsData.some((blog) => blog.id === Number(params.id));

  if (!isParamValid) notFound();

  const blogDetailResponse = await fetch(
    `https://dev.to/api/articles/${params.id}`,
    {
      method: 'GET',
      cache: 'no-cache',
    }
  );

  const blogDetailData = (await blogDetailResponse.json()) as BlogPost;

  return (
    <article>
      <header className='flex flex-col'>
        <div className='max-w-full mt-4 mx-auto'>
          {blogDetailData.cover_image && (
            <Image
              alt={blogDetailData.title}
              src={blogDetailData.cover_image}
              width={650}
              height={450}
              className='rounded-lg'
            />
          )}
        </div>
        <h1 className='mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
          {blogDetailData.title}
        </h1>
        <time
          dateTime={dayjs(blogDetailData.published_at).format('MMMM D, YYYY')}
          className='order-first flex items-center text-base text-zinc-400 dark:text-zinc-500'>
          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
          <span className='ml-3'>
            {dayjs(blogDetailData.published_at).format('MMMM D, YYYY')}
          </span>
        </time>
      </header>
      <div className='prose prose-p:text-zinc-400 prose-li:text-zinc-400 prose-strong:text-zinc-100 prose-h1:text-zinc-100 prose-h2:text-zinc-100 prose-h3:text-zinc-100 prose-h4:text-zinc-100 prose-h5:text-zinc-100 prose-h6 :text-zinc-100 prose-img:rounded-lg'>
        <MDXRemote source={blogDetailData.body_markdown} />
      </div>
    </article>
  );
}
