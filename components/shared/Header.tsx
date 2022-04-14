import { useEffect, useState } from 'react';
import { DesktopNavlink } from './Navlinks/DesktopNavlink';
import { MobileNavlink } from './Navlinks/MobileNavlink';
import { ThemeToggle } from './ThemeToggle';

export const Header = (): JSX.Element => {
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
          <nav className='invisible hidden text-neutral-600 dark:text-neutral-400 md:visible md:block'>
            <ul className='flex gap-2'>
              <li>
                <DesktopNavlink href='/'>Home</DesktopNavlink>
              </li>
              <li>
                <DesktopNavlink href='/timeline'>Timeline</DesktopNavlink>
              </li>
              <li>
                <DesktopNavlink href='/blogs'>Blogs</DesktopNavlink>
              </li>
              <li>
                <DesktopNavlink href='/testimonials'>
                  Testimonials
                </DesktopNavlink>
              </li>
              <li>
                <DesktopNavlink href='/top'>Top Tracks</DesktopNavlink>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
        {open && (
          <nav className='absolute left-0 right-0 z-10 w-full min-h-screen pb-16 pl-2 pr-8 transition-opacity bg-neutral-100 dark:bg-neutral-900'>
            <ul className='flex flex-col gap-5'>
              <li>
                <MobileNavlink id='1' onClick={toggleNav} href='/'>
                  Home
                </MobileNavlink>
              </li>
              <li>
                <MobileNavlink id='2' onClick={toggleNav} href='/timeline'>
                  Timeline
                </MobileNavlink>
              </li>
              <li>
                <MobileNavlink id='3' onClick={toggleNav} href='/blogs'>
                  Blogs
                </MobileNavlink>
              </li>
              <li>
                <MobileNavlink id='4' onClick={toggleNav} href='/testimonials'>
                  Testimonials
                </MobileNavlink>
              </li>
              <li>
                <MobileNavlink id='5' onClick={toggleNav} href='/top'>
                  Top Tracks
                </MobileNavlink>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
