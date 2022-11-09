import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import NextLink from 'next/link';

type BlogCardProps = {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
};

export const BlogCard = ({
  publishedAt,
  description,
  slug,
  title,
}: BlogCardProps) => {
  return (
    <NextLink
      className='flex flex-col gap-4 p-4 -mx-4 lg:mx-0 hover:bg-zinc-800'
      href={slug}>
      <time className='pl-4 text-sm font-light border-l-2 border-teal-400 text-zinc-500'>
        {new Date(publishedAt).toLocaleDateString('en-IN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      <h3 className='font-semibold text-zinc-50 font-heading'>{title}</h3>
      <p>{description}</p>
      <p className='flex items-center gap-2 text-sm text-teal-400'>
        <span>Read More</span>
        <ChevronDoubleRightIcon className='w-3 h-3' />
      </p>
    </NextLink>
  );
};
