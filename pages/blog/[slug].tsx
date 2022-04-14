import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  createPathParams,
  filterCacheBySlug,
  getAllArticles,
  readCache,
  writeCache,
} from '../../utils/blogUtils';
import { formatDate } from '../../utils/helpers';
import NextImage from 'next/image';
import ReactMarkdown from 'react-markdown';
import { sanitizeDevToMarkdown } from '../../utils/markdown';
import remarkGfm from 'remark-gfm';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import { Layout } from '../../components/shared/Layout';
import { graphcmsConnection } from '../../utils/graphcmsConnection';

interface PostProps {
  markdown: string;
  author: { name: string; imageUrl: string };
  url: string;
  published: string;
  title: string;
  description: string;
  pageView: number;
}

const Post: NextPage<PostProps> = ({
  author,
  markdown,
  title,
  description,
  published,
  url,
  pageView,
}) => {
  return (
    <Layout title={title} description={description}>
      <section className='flex flex-col w-full max-w-2xl gap-4 mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight md:text-5xl '>
          {title}
        </h1>
        <div className='flex flex-col gap-2 text-sm text-neutral-700 md:flex-row md:items-center md:justify-between dark:text-neutral-300'>
          <div className='flex items-center gap-2'>
            <span className='invisible hidden md:visible md:flex md:items-center'>
              <NextImage
                width={36}
                height={36}
                className='rounded-full'
                loading='eager'
                alt={author.name}
                src={author.imageUrl}
              />
            </span>
            <span>Mainak Das / {formatDate(published)}</span>
          </div>
          <span>{pageView.toLocaleString('en')} views</span>
        </div>
        <div className='w-full mt-4 prose md:prose-lg dark:prose-invert prose-neutral prose-img:mx-auto prose-img:rounded-lg prose-a:text-cyan-600 hover:prose-a:text-cyan-500 prose-a:transition-all dark:prose-a:text-cyan-500 dark:hover:prose-a:text-cyan-400 hover:prose-a:no-underline prose-pre:border prose-pre:border-neutral-200 prose-pre:bg-neutral-100 dark:prose-pre:border-neutral-700 dark:prose-pre:bg-neutral-900 prose-code:text-neutral-800 dark:prose-code:text-neutral-200 prose-code:px-1 prose-code:py-0.5 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-900'>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeCodeTitles, rehypePrism]}>
            {markdown}
          </ReactMarkdown>
          <a href={url} className='flex justify-center mt-2'>
            Read on Dev.to
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  if (slug) {
    const cacheContents = readCache();
    const blog = filterCacheBySlug(cacheContents, slug);

    if (blog) {
      const { portfolioPictures } = await graphcmsConnection.request<{
        portfolioPictures: {
          porfilePicture: { url: string };
          pictureAlt: string;
        }[];
      }>(`{
  portfolioPictures {
    porfilePicture {
      url
    }
    pictureAlt
  }
}`);

      return {
        props: {
          author: {
            name: portfolioPictures[0].pictureAlt,
            imageUrl: portfolioPictures[0].porfilePicture.url,
          },
          markdown: sanitizeDevToMarkdown(blog.body_markdown),
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
