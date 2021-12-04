import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import FeaturedBlogs from '../components/FeaturedBlogs';
import AnimateLayout from '../components/Layout/AnimateLayout';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import { Blog } from '../types/blogType';
import {
  getMaxLikedBlog,
  getRecentBlog,
  getAllArticles,
  getMostViewed,
} from '../utils/blogUtils';

const title = `Hey, I'm Mainak Das. ✌️`;
const description = `I'm a self learned and self taught developer.`;

interface HomeProps {
  featured: {
    mostLiked: Blog;
    mostRecent: Blog;
    mostViewed: Blog;
  };
}

export default function Home({ featured }: HomeProps) {
  return (
    <AnimateLayout>
      <NextSeo
        title='Home'
        description={description}
        openGraph={{ title, description }}
      />
      <div className='flex flex-col gap-16 mb-16'>
        <Portfolio />
        <Skills />
        <FeaturedBlogs featured={featured} />
      </div>
    </AnimateLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllArticles();
  const mostLiked = getMaxLikedBlog(data);
  const mostRecent = getRecentBlog(data);
  const mostViewed = getMostViewed(data);
  return {
    props: { featured: { mostRecent, mostLiked, mostViewed } },
  };
};
