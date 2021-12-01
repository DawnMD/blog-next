import NoScrollLink from '../NoScrollLink/NoScrollLink';
import ThemeSwitch from '../Icons/ThemeSwitch';
import { motion, useCycle, AnimatePresence } from 'framer-motion';

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

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const Navbar = (): JSX.Element => {
  const [open, cycleOpen] = useCycle(false, true);

  const toggleNav = (): void => {
    if (open) {
      cycleOpen();
      document.body.style.overflow = '';
    } else {
      cycleOpen();
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <header className='relative w-full px-8'>
        <div className='flex items-center justify-between max-w-2xl py-8 mx-auto'>
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
          <nav className='invisible hidden md:visible md:block'>
            <ul className='flex gap-2'>
              <li>
                <NoScrollLink href='/'>
                  <a>Home</a>
                </NoScrollLink>
              </li>
              <li>
                <NoScrollLink href='/blogs'>
                  <a>Blogs</a>
                </NoScrollLink>
              </li>
            </ul>
          </nav>
          <ThemeSwitch />
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{
                width: 0,
                transition: { delay: 0.25, duration: 0.25 },
              }}
              transition={{ type: 'keyframes' }}
              className='absolute left-0 w-full min-h-screen px-8 pb-16 transition-opacity bg-gray-100 dark:bg-gray-900'>
              <motion.ul
                initial='closed'
                animate='open'
                exit='closed'
                variants={sideVariants}
                className='flex flex-col gap-5'>
                <motion.li
                  variants={itemVariants}
                  id='1'
                  className='text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100'>
                  <NoScrollLink href='/'>
                    <a onClick={() => cycleOpen()} className='flex w-auto pb-4'>
                      Home
                    </a>
                  </NoScrollLink>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  id='2'
                  className='text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100'>
                  <NoScrollLink href='/blogs'>
                    <a onClick={() => cycleOpen()} className='flex w-auto pb-4'>
                      Blogs
                    </a>
                  </NoScrollLink>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  id='3'
                  className='text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100'>
                  <NoScrollLink href='/top-tracks'>
                    <a onClick={() => cycleOpen()} className='flex w-auto pb-4'>
                      Top Tracks
                    </a>
                  </NoScrollLink>
                </motion.li>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
export default Navbar;
