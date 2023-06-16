'use client';
import { cn } from '@/libs/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGroup, motion } from 'framer-motion';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Testimonials', href: '/testimonials' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className='flex items-center justify-between px-4 py-8 sm:px-8 lg:px-16 z-10'>
      <Link
        href='/'
        className='text-2xl font-semibold font-calSans text-zinc-50 lg:text-4xl'>
        MD.
      </Link>
      <LayoutGroup>
        <nav className='md:flex items-center gap-4 hidden' id='nav'>
          {navigation.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={cn('transition-all font-bold', {
                'text-zinc-400 hover:text-brand': href !== pathname,
                'text-zinc-800': href === pathname,
              })}>
              <span className='relative py-2 px-3'>
                {name}
                {href === pathname && (
                  <motion.div
                    className='absolute inset-0 bg-brand rounded-md -z-[1]'
                    layoutId='header'
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </span>
            </Link>
          ))}
        </nav>
      </LayoutGroup>
      <Sheet>
        <SheetTrigger asChild>
          <HamburgerMenuIcon className='w-4 h-4 md:hidden' />
        </SheetTrigger>
        <SheetContent position='right' size='full'>
          <SheetHeader>
            <SheetTitle className='text-xl'>Menu</SheetTitle>
          </SheetHeader>
          <motion.ul
            className='flex flex-col gap-4'
            initial='hidden'
            animate='show'
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}>
            {navigation.map(({ name, href }) => (
              <motion.li key={href} variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <SheetClose asChild>
                  <Link
                    href={href}
                    className={cn('text-lg border-b font-bold', {
                      'text-zinc-400': href !== pathname,
                      'text-brand border-brand': href === pathname,
                    })}>
                    {name}
                  </Link>
                </SheetClose>
              </motion.li>
            ))}
          </motion.ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};
