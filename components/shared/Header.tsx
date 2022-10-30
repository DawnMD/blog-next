import { useState, PropsWithChildren, useEffect } from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

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

const MobileNavItem = ({
  href,
  children,
}: PropsWithChildren<{ href: string; onClick: () => void }>) => {
  const { pathname } = useRouter();

  const selected = href === pathname;

  return (
    <motion.li variants={itemVariants} id={href}>
      <NextLink
        href={href}
        className={clsx(
          'flex py-4 font-semibold tracking-tight transition-all hover:text-zinc-200',
          {
            'text-white font-bold': selected,
            'text-zinc-400': !selected,
          }
        )}>
        {children}
      </NextLink>
    </motion.li>
  );
};

const DesktopNav = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => {
  const { pathname } = useRouter();

  const selected = href === pathname;

  return (
    <NextLink
      href={href}
      className={clsx(
        'px-4 py-2 transition-all rounded-lg hover:bg-zinc-700 font-semibold',
        {
          'text-white font-bold': selected,
          'text-zinc-400': !selected,
        }
      )}>
      {children}
    </NextLink>
  );
};

export const Header = () => {
  const [open, setOpen] = useState(false);

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
    <header className='fixed z-50 flex flex-col w-full gap-2 px-8 py-4 shadow-md bg-zinc-800'>
      <div className='flex items-center justify-between'>
        <NextLink
          className='text-lg font-bold tracking-tight text-white'
          href='/'>
          MD.
        </NextLink>
        <button
          className='relative w-8 h-8 md:invisible md:hidden'
          onClick={toggleNav}>
          <span className='sr-only'>
            Open navbar menu on mobile screen button
          </span>
          <div className='absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                open && 'rotate-45'
              } ${!open && '-translate-y-1.5'}`}></span>
            <span
              aria-hidden='true'
              className={`block absolute  h-0.5 w-5 bg-white transform transition duration-300 ease-in-out  ${
                open && '-rotate-45'
              } ${!open && 'translate-y-1.5'}`}></span>
          </div>
        </button>
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-2'>
            <li>
              <DesktopNav href='/'>Home</DesktopNav>
            </li>
            <li>
              <DesktopNav href='/timeline'>Timeline</DesktopNav>
            </li>
            <li>
              <DesktopNav href='/blogs'>Blogs</DesktopNav>
            </li>
            <li>
              <DesktopNav href='/testimonials'>Testimonials</DesktopNav>
            </li>
          </ul>
        </nav>
      </div>

      <AnimatePresence mode='wait'>
        {open && (
          <motion.nav
            id={`${open}`}
            key={`${open}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute left-0 right-0 w-full min-h-screen px-8 mt-10 transition-opacity bg-zinc-800'>
            <motion.ul
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
              className='flex flex-col divide-y divide-zinc-400'>
              <MobileNavItem onClick={toggleNav} href='/'>
                Home
              </MobileNavItem>
              <MobileNavItem onClick={toggleNav} href='/timeline'>
                Timeline
              </MobileNavItem>
              <MobileNavItem onClick={toggleNav} href='/blogs'>
                Blogs
              </MobileNavItem>
              <MobileNavItem onClick={toggleNav} href='/testimonials'>
                Testimonials
              </MobileNavItem>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
