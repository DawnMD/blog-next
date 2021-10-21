import BlogDetail from '../../components/BlogDetail/BlogDetail';
import {
  createPathParams,
  filterCacheBySlug,
  getAllArticles,
  readCache,
  writeCache,
} from '../../utils/blogUtils';
import { NextSeo } from 'next-seo';
import AnimateLayout from '../../components/Layout/AnimateLayout';
import { Blog } from '../../types/blogType';
import { GetStaticPaths, GetStaticProps } from 'next';

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
      <BlogDetail blog={blog} />
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
