import type { GetStaticProps, NextPage } from 'next';
import FeaturedBlogs from '../components/FeaturedBlogs';
import { Intro } from '../components/Intro';
import { Layout } from '../components/shared/Layout';
import { Blog } from '../types/blogData';
import { IntroBlock, Role } from '../types/graphcmsData';
import {
  getAllArticles,
  getMaxLikedBlog,
  getMostViewed,
  getRecentBlog,
} from '../utils/blogUtils';
import { graphcmsConnection } from '../utils/graphcmsConnection';

const title = `Hey, I'm Mainak Das. ✌️`;
const description = `I'm a self learned and self taught developer.`;

type HomeProps = {
  featured: {
    mostLiked: Blog;
    mostRecent: Blog;
    mostViewed: Blog;
  };
  about: { content: string };
  currentRole: Role;
  portfolioPicture: { porfilePicture: { url: string }; pictureAlt: string };
};

const Home: NextPage<HomeProps> = ({
  featured,
  about,
  currentRole,
  portfolioPicture,
}) => {
  return (
    <Layout title={title} description={description}>
      <section className='flex flex-col max-w-2xl gap-16 mx-auto mb-16'>
        <Intro
          about={about.content}
          role={currentRole}
          displayPicture={portfolioPicture}
        />
        <FeaturedBlogs featured={featured} />
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllArticles();
  const mostLiked = getMaxLikedBlog(data);
  const mostRecent = getRecentBlog(data);
  const mostViewed = getMostViewed(data);

  const { aboutMes, currentRoles, portfolioPictures } =
    await graphcmsConnection.request<IntroBlock>(`{
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
