import { GetStaticProps, NextPage } from 'next';
import FeaturedBlogs from '../components/FeaturedBlogs';
import AnimateLayout from '../components/Layout/AnimateLayout';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import { Blog } from '../types/blogType';
import { IIntro, CurrentRole } from '../types/cmsTypes';
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
  currentRole: CurrentRole;
  portfolioPicture: { porfilePicture: { url: string }; pictureAlt: string };
}

const Home: NextPage<HomeProps> = ({
  featured,
  about,
  currentRole,
  portfolioPicture,
}) => {
  return (
    <AnimateLayout title={title} description={description}>
      <section className='flex flex-col max-w-2xl gap-16 mx-auto mb-16'>
        <Portfolio
          about={about.content}
          role={currentRole}
          displayPicture={portfolioPicture}
        />
        <Skills />
        <FeaturedBlogs featured={featured} />
      </section>
    </AnimateLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllArticles();
  const mostLiked = getMaxLikedBlog(data);
  const mostRecent = getRecentBlog(data);
  const mostViewed = getMostViewed(data);

  const { aboutMes, currentRoles, portfolioPictures } =
    await graphCMS.request<IIntro>(`{
    portfolioPictures{
    porfilePicture {
      url
    }
    pictureAlt
  }
  aboutMes {
    content
  }
  currentRoles {
    roleIntro
    comapnyName
    comapnyColor {
      hex
    }
    companyUrl
  }
}`);

  return {
    props: {
      featured: { mostRecent, mostLiked, mostViewed },
      about: aboutMes[0],
      currentRole: currentRoles[0],
      portfolioPicture: portfolioPictures[0],
    },
  };
};
