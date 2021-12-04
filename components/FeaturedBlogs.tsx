import { Blog } from '../types/blogType';
import { formatDate } from '../utils/helpers';
import HeartIcon from './shared/Icons/HeartIcon';
import WatchIcon from './shared/Icons/WatchIcon';

interface FeaturedBlogProps {
  featured: {
    mostLiked: Blog;
    mostRecent: Blog;
    mostViewed: Blog;
  };
}

const FeaturedBlogs = ({ featured }: FeaturedBlogProps): JSX.Element => {
  return (
    <section className='flex flex-col gap-4'>
      <h3 className='text-2xl font-bold tracking-tight md:text-4xl'>
        Featured Blogs
      </h3>
      <div className='flex flex-col gap-4 md:flex-row md:gap-5'>
        <div className='flex flex-col flex-1 gap-4'>
          <p className='text-gray-400'>Most recent</p>
          <div className='h-full p-1 rounded-lg bg-gradient-to-br from-amber via-yellow-400 to-orange'>
            <div className='relative flex flex-col h-full gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-900'>
              <h4 className='text-lg font-medium tracking-tight md:text-lg '>
                {featured.mostRecent.title}
              </h4>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                {formatDate(featured.mostRecent.published_at)}
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col flex-1 w-full gap-4'>
          <p className='text-gray-400'>Most Viewed</p>
          <div className='h-full p-1 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600'>
            <div className='relative flex flex-col h-full gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-900'>
              <h4 className='text-lg font-medium tracking-tight md:text-lg '>
                {featured.mostViewed.title}
              </h4>
              <p className='flex items-center gap-2 text-sm'>
                <WatchIcon className='w-4 h-4 text-blue-700 dark:text-blue-400' />
                <span className='font-medium text-gray-500 dark:text-gray-400'>
                  {featured.mostViewed.page_views_count}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col flex-1 gap-4'>
          <p className='text-gray-400'>Most liked</p>
          <div className='h-full p-1 rounded-lg bg-gradient-to-br from-red-600 via-pink to-rose'>
            <div className='relative flex flex-col h-full gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-900'>
              <h4 className='text-lg font-medium tracking-tight md:text-lg '>
                {featured.mostLiked.title}
              </h4>
              <p className='flex items-center gap-2 text-sm'>
                <HeartIcon className='w-4 h-4 text-red-700 dark:text-red-400' />
                <span className='font-medium text-gray-500 dark:text-gray-400'>
                  {featured.mostLiked.public_reactions_count}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
