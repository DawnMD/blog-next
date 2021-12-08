import { GetStaticPaths, GetStaticProps } from 'next';
import {
  createPathParams,
  filterCacheBySlug,
  getAllArticles,
  readCache,
  writeCache,
} from '../../utils/blogUtils';
import AnimateLayout from '../../components/Layout/AnimateLayout';
import { formatDate } from '../../utils/helpers';
import NextImage from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { sanitizeDevToMarkdown } from '../../utils/markdown';
import remarkGfm from 'remark-gfm';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

interface PostProps {
  markdown: MDXRemoteSerializeResult;
  url: string;
  published: string;
  title: string;
  description: string;
  pageView: number;
}

export default function Post({
  markdown,
  title,
  description,
  published,
  url,
  pageView,
}: PostProps): JSX.Element {
  return (
    <AnimateLayout title={title} description={description}>
      <section className='flex flex-col w-full max-w-2xl gap-4 mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight md:text-5xl '>
          {title}
        </h1>
        <div className='flex flex-col text-sm text-gray-700 md:gap-2 md:flex-row md:items-center md:justify-between dark:text-gray-300'>
          <div className='flex items-center gap-2'>
            <span className='invisible hidden md:visible md:flex md:items-center'>
              <NextImage
                width={36}
                height={36}
                className='rounded-full'
                loading='eager'
                src='/images/home/potrait.JPG'
              />
            </span>
            <span>Mainak Das / {formatDate(published)}</span>
          </div>
          <span>{pageView.toLocaleString('en')} views</span>
        </div>
        <div className='w-full mt-4 prose md:prose-lg dark:prose-light'>
          <MDXRemote {...markdown} />
        </div>
        <a
          href={url}
          className='mt-2 text-center transition-all dark:hover:text-gray-500 hover:text-gray-600'>
          Read on Dev.to
        </a>
      </section>
    </AnimateLayout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  if (slug) {
    const cacheContents = readCache();
    const blog = filterCacheBySlug(cacheContents, slug);
    if (blog) {
      const markdown = await serialize(
        sanitizeDevToMarkdown(blog.body_markdown),
        {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeCodeTitles, rehypePrism],
          },
        }
      );
      return {
        props: {
          markdown,
          url: blog.url,
          published: blog.published_at,
          title: blog.title,
          description: blog.description,
          pageView: blog.page_views_count,
        },
      };
    }
    return {
      notFound: true,
    };
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllArticles();
  writeCache(data);
  const blogPath = createPathParams(data);
  return {
    paths: blogPath,
    fallback: false,
  };
};
