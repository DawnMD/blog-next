import { getAllArticles } from '../utils/blogUtils';
import AnimateLayout from '../components/Layout/AnimateLayout';
import { Blog } from '../types/blogType';
import BlogLink from '../components/BlogLink';
import { NextPage } from 'next';

const title = `Blogs`;
const description = `Articles I write in my free time. 📝`;

interface PostsProps {
  blogs: Blog[];
}

const Posts: NextPage<PostsProps> = ({ blogs }) => {
  return (
    <AnimateLayout title={title} description={description}>
      <section className='flex flex-col max-w-2xl gap-4 mx-auto mb-16'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Blogs</h1>
        <p className='text-neutral-600 dark:text-neutral-400'>
          I&apos;ve been writing blogs starting 2021. In total I&apos;ve written{' '}
          {blogs.length} blogs.
        </p>
        <div className='flex flex-col gap-6 mt-2'>
          <h3 className='text-2xl font-bold tracking-tight md:text-4xl'>
            All Posts
          </h3>
          <div className='flex flex-col gap-6'>
            {blogs.map((blog) => (
              <BlogLink
                key={blog.id}
                title={blog.title}
                desc={blog.description}
                views={blog.page_views_count}
                slug={blog.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimateLayout>
  );
};

export default Posts;

export async function getStaticProps() {
  const data = await getAllArticles();
  return {
    props: {
      blogs: data,
    },
    revalidate: 86400,
  };
}
