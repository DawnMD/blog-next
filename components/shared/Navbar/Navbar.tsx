import ThemeSwitch from '../Icons/ThemeSwitch';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import MobileNavItem from './MobileNavItem';
import NavItem from './NavItem';

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleNav = (): void => {
    if (open) {
      setOpen(!open);
      document.body.style.overflow = '';
    } else {
      setOpen(!open);
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <header className='relative w-full '>
        <div className='flex items-center justify-between max-w-[43.5rem] py-8 mx-auto'>
          <button
            className='relative w-8 h-8 md:invisible md:hidden'
            onClick={toggleNav}>
            <span className='sr-only'>
              Open navbar menu on mobile screen button
            </span>
            <div className='absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
              <span
                aria-hidden='true'
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open && 'rotate-45'
                } ${!open && '-translate-y-1.5'}`}></span>
              <span
                aria-hidden='true'
                className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out  ${
                  open && '-rotate-45'
                } ${!open && 'translate-y-1.5'}`}></span>
            </div>
          </button>
          <nav className='invisible hidden text-gray-600 dark:text-gray-400 md:visible md:block'>
            <ul className='flex gap-2'>
              <NavItem href='/'>Home</NavItem>
              <NavItem href='/timeline'>Timeline</NavItem>
              <NavItem href='/blogs'>Blogs</NavItem>
              <NavItem href='/top'>Top Tracks</NavItem>
            </ul>
          </nav>
          <ThemeSwitch />
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ display: 'hidden', opacity: 0 }}
              animate={{
                display: 'block',
                opacity: 1,
              }}
              exit={{ transition: { duration: 0.1 }, opacity: 0 }}
              transition={{ type: 'keyframes', duration: 0.1 }}
              className='absolute left-0 right-0 z-10 w-full min-h-screen pb-16 pl-2 pr-8 transition-opacity bg-gray-100 dark:bg-gray-900'>
              <motion.ul
                initial='closed'
                animate='open'
                exit='closed'
                variants={sideVariants}
                className='flex flex-col gap-5'>
                <MobileNavItem id='1' onClick={toggleNav} href='/'>
                  Home
                </MobileNavItem>
                <MobileNavItem id='2' onClick={toggleNav} href='/timeline'>
                  Timeline
                </MobileNavItem>
                <MobileNavItem id='3' onClick={toggleNav} href='/blogs'>
                  Blogs
                </MobileNavItem>
                <MobileNavItem id='4' onClick={toggleNav} href='/top'>
                  Top Tracks
                </MobileNavItem>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
export default Navbar;
