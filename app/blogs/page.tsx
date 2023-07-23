import dayjs from 'dayjs';
import Link from 'next/link';

export type BlogsResponseParsed = {
  type_of: 'string';
  id: number;
  title: 'string';
  description: 'string';
  cover_image: 'string';
  published: true;
  published_at: Date;
  tag_list: string[];
  slug: 'string';
  path: 'string';
  url: 'string';
  canonical_url: 'string';
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: Date;
  body_markdown: 'string';
  reading_time_minutes: number;
};

export default async function Blogs() {
  const data = await fetch('https://dev.to/api/articles/me/published', {
    method: 'GET',
    headers: { 'api-key': 'YGv3UXp8JSe52dxskhvhCfiF' },
    next: {
      revalidate: 604800,
    },
  });

  const blogsData = (await data.json()) as BlogsResponseParsed[];

  return (
    <div className='relative px-4 sm:px-8 lg:px-12 mb-12'>
      <div className='mx-auto max-w-2xl lg:max-w-5xl'>
        <header className='max-w-2xl'>
          <h4 className='text-6xl font-calSans text-brand'>Blogs</h4>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl'>
            Writing on software design, website building, and the technology
            industry.
          </h1>
          <p className='mt-6 text-base text-zinc-400'>
            All of my long-form thoughts on programming, leadership, product
            design, and more, collected in chronological order.
          </p>
        </header>
        <div className='mt-16 sm:mt-20'>
          <div className='md:border-l md:pl-6 md:border-brand/40'>
            <div className='flex max-w-3xl flex-col space-y-16'>
              {blogsData
                .sort((a, b) =>
                  dayjs(b.published_at).isAfter(a.published_at) ? 1 : -1
                )
                .map((blog) => (
                  <article
                    key={blog.id}
                    className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='md:col-span-3 group relative flex flex-col items-start'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-100'>
                        <div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
                        <Link href={`/blogs/${blog.id}`}>
                          <span className='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
                          <span className='relative z-10'>{blog.title}</span>
                        </Link>
                      </h2>
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5'
                        dateTime='2022-09-05'>
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'>
                          <span className='h-4 w-0.5 rounded-full bg-zinc-500'></span>
                        </span>
                        {dayjs(blog.published_at).format('MMMM D, YYYY')}
                      </time>
                      <p className='relative z-10 mt-2 text-sm text-zinc-400'>
                        {blog.description}
                      </p>
                      <div
                        aria-hidden='true'
                        className='relative z-10 mt-4 flex items-center text-sm font-medium text-brand'>
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='ml-1 h-4 w-4 stroke-current'>
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'></path>
                        </svg>
                      </div>
                    </div>
                    <time
                      className='mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-500'
                      dateTime='2022-09-05'>
                      {dayjs(blog.published_at).format('MMMM D, YYYY')}
                    </time>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
