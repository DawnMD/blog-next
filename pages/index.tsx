import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import AnimateLayout from '../components/Layout/AnimateLayout';
import Portfolio from '../components/Portfolio';
import { Blog } from '../types/blogType';
import {
  getMaxLikedBlog,
  getRecentBlog,
  getAllArticles,
} from '../utils/blogUtils';

const title = `Hey, I'm Mainak Das. ✌️`;
const description = `I'm a self learned and self taught developer.`;

interface HomeProps {
  featured: {
    mostLiked: Blog;
    mostRecent: Blog;
  };
}

export default function Home({ featured }: HomeProps) {
  console.log(featured);
  return (
    <AnimateLayout>
      <NextSeo
        title='Home'
        description={description}
        openGraph={{ title, description }}
      />
      <Portfolio />
    </AnimateLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllArticles();
  const mostLiked = getMaxLikedBlog(data);
  const mostRecent = getRecentBlog(data);
  return {
    props: { featured: { mostRecent, mostLiked } },
  };
};
