import { Blog } from '../types/blogType';
import { formatDate } from '../utils/helpers';
import ArrowRight from './shared/Icons/ArrowRight';
import HeartIcon from './shared/Icons/HeartIcon';
import WatchIcon from './shared/Icons/WatchIcon';
import NoScrollLink from './shared/NoScrollLink/NoScrollLink';

interface FeaturedBlogProps {
  featured: {
    mostLiked: Blog;
    mostRecent: Blog;
    mostViewed: Blog;
  };
}

const FeaturedBlogs = ({ featured }: FeaturedBlogProps): JSX.Element => {
  return (
    <section className='flex flex-col gap-6'>
      <h3 className='text-2xl font-bold tracking-tight md:text-4xl'>
        Featured Blogs
      </h3>
      <div className='flex flex-col gap-4 md:flex-row md:gap-5'>
        <div className='flex flex-col flex-1 gap-4'>
          <p className='text-gray-600 dark:text-gray-400'>Most recent</p>
          <NoScrollLink href={`/blog/${featured.mostRecent.slug}`}>
            <a className='h-full p-1 transition-all transform rounded-lg bg-gradient-to-br from-amber via-yellow-400 to-orange hover:scale-105'>
              <div className='relative flex flex-col justify-between h-full gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-900'>
                <h4 className='text-lg font-medium tracking-tight md:text-lg '>
                  {featured.mostRecent.title}
                </h4>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  {formatDate(featured.mostRecent.published_at)}
                </p>
              </div>
            </a>
          </NoScrollLink>
        </div>

        <div className='flex flex-col flex-1 w-full gap-4'>
          <p className='text-gray-600 dark:text-gray-400'>Most Viewed</p>
          <NoScrollLink href={`/blog/${featured.mostViewed.slug}`}>
            <a className='h-full p-1 transition-all transform rounded-lg hover:scale-105 bg-gradient-to-br from-blue-400 to-blue-600'>
              <div className='relative flex flex-col justify-between h-full gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-900'>
                <h4 className='text-lg font-medium tracking-tight md:text-lg '>
                  {featured.mostViewed.title}
                </h4>
                <p className='flex items-center gap-2 text-sm'>
                  <WatchIcon className='w-4 h-4 text-blue-700 dark:text-blue-400' />
                  <span className='font-medium text-gray-600 dark:text-gray-400'>
                    {featured.mostViewed.page_views_count}
                  </span>
                </p>
              </div>
            </a>
          </NoScrollLink>
        </div>

        <div className='flex flex-col flex-1 gap-4'>
          <p className='text-gray-600 dark:text-gray-400'>Most liked</p>
          <NoScrollLink href={`/blog/${featured.mostLiked.slug}`}>
            <a className='h-full p-1 transition-all transform rounded-lg bg-gradient-to-br from-red-600 via-pink to-rose hover:scale-105'>
              <div className='relative flex flex-col justify-between h-full gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-900'>
                <h4 className='text-lg font-medium tracking-tight md:text-lg '>
                  {featured.mostLiked.title}
                </h4>
                <p className='flex items-center gap-2 text-sm'>
                  <HeartIcon className='w-4 h-4 text-red-700 dark:text-red-400' />
                  <span className='font-medium text-gray-600 dark:text-gray-400'>
                    {featured.mostLiked.public_reactions_count}
                  </span>
                </p>
              </div>
            </a>
          </NoScrollLink>
        </div>
      </div>

      <NoScrollLink href='/blogs'>
        <a className='flex items-center gap-2 text-gray-600 transition-all dark:text-gray-400 group hover:text-gray-800 dark:hover:text-gray-200'>
          Read all blogs{' '}
          <ArrowRight className='w-5 h-5 text-gray-600 dark:text-gray-400 transition-all transform group-hover:translate-x-1.5 group-hover:text-gray-800 dark:group-hover:text-gray-200' />
        </a>
      </NoScrollLink>
    </section>
  );
};

export default FeaturedBlogs;
