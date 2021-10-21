import NoScrollLink from '../NoScrollLink/NoScrollLink';
import { useState } from 'react';
import ThemeSwitch from '../Icons/ThemeSwitch';

const Navbar = (): JSX.Element => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  const toggleMobileNav = (): void => {
    setMobileNav(!mobileNav);
  };

  const onLinkClick = (): void => {
    if (mobileNav) {
      setMobileNav(false);
    }
    return;
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 z-10 flex items-center justify-between w-full p-4 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96 text-lg font-medium bg-gray-100 ${
          !mobileNav &&
          'shadow-xl bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-md'
        }   md:text-xl dark:bg-gray-900`}>
        <span className='text-2xl font-bold text-transparent bg-purple-500 bg-gradient-to-r from-red-500 bg-clip-text animate-gradient-x md:text-3xl '>
          <NoScrollLink href='/'>
            <a onClick={onLinkClick}>
              <span className='lg:hidden lg:invisible'>MD</span>
              <span className='invisible hidden lg:visible lg:block'>
                Mainak Das
              </span>
            </a>
          </NoScrollLink>
        </span>
        <nav className='flex items-center md:gap-4'>
          <ul className='items-center invisible hidden space-x-4 md:flex md:visible'>
            <li>
              <NoScrollLink href='/blogs'>Blogs</NoScrollLink>
            </li>
          </ul>
          <ThemeSwitch />
          <button
            className='relative w-10 h-10 focus:outline-none md:invisible md:hidden'
            onClick={toggleMobileNav}>
            <span className='sr-only'>
              Open navbar menu on mobile screen button
            </span>
            <div className='absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
              <span
                aria-hidden='true'
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  mobileNav && 'rotate-45'
                } ${!mobileNav && '-translate-y-1.5'}`}></span>
              <span
                aria-hidden='true'
                className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out  ${
                  mobileNav && '-rotate-45'
                } ${!mobileNav && 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </nav>
      </header>
      {mobileNav && (
        <nav className='fixed z-10 w-full px-4 pb-4 text-xl font-medium tracking-wide bg-gray-100 shadow-md dark:bg-gray-900 md:hidden md:invisible'>
          <ul className='flex flex-col justify-center space-y-2'>
            <li>
              <NoScrollLink href='/blogs'>
                <a onClick={onLinkClick}>Blogs</a>
              </NoScrollLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
export default Navbar;
