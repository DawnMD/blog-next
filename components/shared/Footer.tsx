import NextLink from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center px-4 py-8 border-t border-zinc-600'>
      <p className='text-xs font-light'>
        Handcrafted with love by{' '}
        <NextLink
          href='http://'
          target='_blank'
          rel='noopener noreferrer'
          className='font-semibold transition-all hover:text-zinc-50'>
          Mainak Das
        </NextLink>
      </p>
    </footer>
  );
};
