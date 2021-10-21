import SocialIcons from '../Icons/SocialIcons';

const Footer = (): JSX.Element => {
  return (
    <footer className='flex flex-col items-center w-full gap-2 pb-6'>
      <div className='my-3'>
        <SocialIcons />
      </div>
      <div className='text-sm text-gray-500 dark:text-gray-300'>
        Say hello at{' '}
        <a
          href='mailto:mainakdas104@gmail.com?subject=Hello'
          className='font-semibold tracking-wider hover:text-black dark:hover:text-white'>
          mainakdas104@gmail.com
        </a>
      </div>
      <div className='flex flex-col items-center text-sm text-gray-500 dark:text-gray-300'>
        <p>
          Made with ❤️ by{' '}
          <span className='font-bold tracking-wide'>Mainak Das</span>
        </p>
        <p>
          Powered by{' '}
          <a
            href='https://docs.forem.com/api/'
            className='font-semibold hover:text-black dark:hover:text-white'>
            Dev.to API
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
