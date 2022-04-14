import { SpotifyWidget } from './SpotifyWidget';

export const Footer = (): JSX.Element => {
  return (
    <footer className='flex flex-col w-full gap-6 pb-8 text-sm md:max-w-2xl md:mx-auto'>
      <hr className='w-full mb-2 border-neutral-200 border-1 dark:border-neutral-800' />
      <SpotifyWidget />
      <div className='text-sm text-neutral-600 dark:text-neutral-400'>
        <ul className='flex flex-col gap-3'>
          <li>
            <a
              href='https://github.com/DawnMD'
              target='_blank'
              rel='noreferrer'
              className='tracking-wide transition-all dark:hover:text-neutral-300 hover:text-neutral-500'>
              Github
            </a>
          </li>
          <li>
            <a
              href='https://dev.to/dawnind'
              target='_blank'
              rel='noreferrer'
              className='tracking-wide transition-all dark:hover:text-neutral-300 hover:text-neutral-500'>
              Dev.to
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/mainak1147/'
              target='_blank'
              rel='noreferrer'
              className='tracking-wide transition-all dark:hover:text-neutral-300 hover:text-neutral-500'>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-between text-xs text-neutral-400'>
        <p>
          Made with love by{' '}
          <a
            className='font-semibold transition-all dark:hover:text-neutral-300 hover:text-neutral-500'
            href='mailto:mainakdas104@gmail.com?subject=Hello'
            rel='noreferrer'>
            Mainak Das
          </a>
        </p>
        <p>
          Powered by{' '}
          <a
            className='font-semibold transition-all dark:hover:text-neutral-300 hover:text-neutral-500'
            href='https://dev.to'
            target='_blank'
            rel='noreferrer'>
            Dev.to
          </a>
        </p>
      </div>
    </footer>
  );
};
