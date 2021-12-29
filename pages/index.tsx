import { GetStaticProps, NextPage } from 'next';
import FeaturedBlogs from '../components/FeaturedBlogs';
import AnimateLayout from '../components/Layout/AnimateLayout';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import { Blog } from '../types/blogType';
import { IAboutMe } from '../types/cmsTypes';
import {
  getMaxLikedBlog,
  getRecentBlog,
  getAllArticles,
  getMostViewed,
} from '../utils/blogUtils';
import graphCMS from '../utils/graphCMS';

const title = `Hey, I'm Mainak Das. ✌️`;
const description = `I'm a self learned and self taught developer.`;

interface HomeProps {
  featured: {
    mostLiked: Blog;
    mostRecent: Blog;
    mostViewed: Blog;
  };
  about: { content: string };
}

const Home: NextPage<HomeProps> = ({ featured, about }) => {
  return (
    <AnimateLayout title={title} description={description}>
      <div className='flex flex-col max-w-2xl gap-16 mx-auto mb-16'>
        <Portfolio about={about.content} />
        <Skills />
        <FeaturedBlogs featured={featured} />
      </div>
    </AnimateLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllArticles();
  const mostLiked = getMaxLikedBlog(data);
  const mostRecent = getRecentBlog(data);
  const mostViewed = getMostViewed(data);

  const { aboutMes } = await graphCMS.request<IAboutMe>(`{
  aboutMes {
    content
  }
}`);

  return {
    props: {
      featured: { mostRecent, mostLiked, mostViewed },
      about: aboutMes[0],
    },
  };
};
