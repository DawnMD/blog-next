import Blogs from '../../components/Blogs/Blogs';
import { getAllArticles } from '../../utils/blogUtils';
import { NextSeo } from 'next-seo';
import AnimateLayout from '../../components/Layout/AnimateLayout';

const title = `Blogs`;
const description = `Articles I write in my free time. 📝`;

interface PostsProps {
  blog: any;
}

export default function Posts({ blog }: PostsProps) {
  return (
    <AnimateLayout>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <Blogs blogs={blog} />
    </AnimateLayout>
  );
}
export async function getStaticProps() {
  const data = await getAllArticles();
  return {
    props: {
      blog: data,
    },
    revalidate: 86400,
  };
}
