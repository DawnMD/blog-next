import SpotifyNowPlaying from './SpotifyNowPlaying';

const Footer = (): JSX.Element => {
  return (
    <footer className='flex flex-col w-full gap-6 pb-8 text-sm md:max-w-2xl md:mx-auto'>
      <hr className='w-full mb-2 border-gray-200 border-1 dark:border-gray-800' />
      <SpotifyNowPlaying />
      <div className='text-sm text-gray-600 dark:text-gray-400'>
        <ul className='flex flex-col gap-3'>
          <li>
            <a
              href='https://github.com/DawnMD'
              target='_blank'
              rel='noreferrer'
              className='tracking-wide transition-all dark:hover:text-gray-500 hover:text-gray-600'>
              Github
            </a>
          </li>
          <li>
            <a
              href='https://dev.to/dawnind'
              target='_blank'
              rel='noreferrer'
              className='tracking-wide transition-all dark:hover:text-gray-500 hover:text-gray-600'>
              Dev.to
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/mainak1147/'
              target='_blank'
              rel='noreferrer'
              className='tracking-wide transition-all dark:hover:text-gray-500 hover:text-gray-600'>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-between text-xs text-gray-400'>
        <p>
          Made with love by{' '}
          <a
            className='font-semibold transition-all dark:hover:text-gray-300 hover:text-gray-500'
            href='mailto:mainakdas104@gmail.com?subject=Hello'
            rel='noreferrer'>
            Mainak Das
          </a>
        </p>
        <p>
          Powered by{' '}
          <a
            className='font-semibold transition-all dark:hover:text-gray-300 hover:text-gray-500'
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
export default Footer;
