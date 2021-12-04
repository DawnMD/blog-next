import { NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import {
  createPathParams,
  filterCacheBySlug,
  getAllArticles,
  readCache,
  writeCache,
} from '../../utils/blogUtils';
import AnimateLayout from '../../components/Layout/AnimateLayout';
import { Blog } from '../../types/blogType';
import { formatDate } from '../../utils/helpers';
import {
  customRenderMarkdown,
  sanitizeDevToMarkdown,
} from '../../utils/markdown';

interface PostProps {
  blog: Blog;
}

export default function Post({ blog }: PostProps): JSX.Element {
  return (
    <AnimateLayout>
      <NextSeo
        title={blog.title}
        description={blog.description}
        openGraph={{ title: blog.title, description: blog.description }}
      />
      <section className='flex flex-col w-full max-w-2xl gap-4 mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight md:text-5xl '>
          {blog.title}
        </h1>
        <p className='flex flex-col text-sm text-gray-700 md:gap-2 md:flex-row md:items-center md:justify-between dark:text-gray-300'>
          <span>Mainak Das / {formatDate(blog.published_at)}</span>
          <span>{blog.page_views_count} views</span>
        </p>
        <div className='w-full prose md:prose-lg dark:prose-light'>
          <ReactMarkdown
            components={customRenderMarkdown()}
            rehypePlugins={[rehypeSanitize]}
            remarkPlugins={[gfm]}>
            {sanitizeDevToMarkdown(blog.body_markdown)}
          </ReactMarkdown>
        </div>
        <a
          href={blog.url}
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
    return {
      props: {
        blog,
      },
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
