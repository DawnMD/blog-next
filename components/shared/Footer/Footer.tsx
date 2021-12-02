const Footer = (): JSX.Element => {
  return (
    <footer className='flex flex-col gap-6 pb-8 md:w-[42rem] md:mx-auto text-sm mw-full'>
      <hr className='w-full mb-2 border-gray-200 border-1 dark:border-gray-800' />
      {/* Spotify */}
      <div className='text-sm text-gray-400'>
        <ul className='flex flex-col gap-3'>
          <li>
            <a
              href='https://github.com/DawnMD'
              target='_blank'
              className='tracking-wide transition dark:hover:text-gray-300 hover:text-gray-500'>
              Github
            </a>
          </li>
          <li>
            <a
              href='https://dev.to/dawnind'
              target='_blank'
              className='tracking-wide transition dark:hover:text-gray-300 hover:text-gray-500'>
              Dev.to
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/mainak1147/'
              target='_blank'
              className='tracking-wide transition dark:hover:text-gray-300 hover:text-gray-500'>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-between text-xs text-gray-400'>
        <p>
          Made with love by{' '}
          <a
            className='font-semibold transition dark:hover:text-gray-300 hover:text-gray-500'
            href='mailto:mainakdas104@gmail.com?subject=Hello'>
            Mainak Das
          </a>
        </p>
        <p>
          Powered by{' '}
          <a
            className='font-semibold transition dark:hover:text-gray-300 hover:text-gray-500'
            href='https://dev.to'
            target='_blank'>
            Dev.to
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
