import { HeartIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='border-t py-8 px-4 border-zinc-600'>
      <p className='flex gap-1 items-baseline justify-center text-xs'>
        <span>Made with</span>
        <HeartIcon className='w-4 h-4 hover:text-red-600 transition-colors' />
        <span>by</span>
        <Link
          href='https://github.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-calSans font-semibold inline-flex hover:text-zinc-100 transition-colors tracking-tight'>
          Mainak Das
        </Link>
      </p>
    </footer>
  );
};
