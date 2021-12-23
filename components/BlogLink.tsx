import NoScrollLink from './shared/NoScrollLink/NoScrollLink';

interface BlogLinkProps {
  title: string;
  desc: string;
  views: number;
  slug: string;
}

const BlogLink = ({ title, desc, views, slug }: BlogLinkProps): JSX.Element => {
  return (
    <NoScrollLink href={`/blog/${slug}`}>
      <a className='flex flex-col gap-4 transition-all transform md:gap-2 hover:scale-[1.015]'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <h4 className='text-lg font-medium md:text-xl'>{title}</h4>
          <p className='w-32 text-left text-neutral-600 dark:text-neutral-400 md:text-right md:mb-0'>
            {views.toLocaleString('en')} views
          </p>
        </div>
        <p className='text-neutral-600 dark:text-neutral-400'>{desc}</p>
      </a>
    </NoScrollLink>
  );
};

export default BlogLink;
