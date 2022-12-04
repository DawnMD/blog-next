'use client';
import NextLink from 'next/link';
import { useState, Fragment, PropsWithChildren } from 'react';
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/24/solid';
import { Dialog, Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const MobileNavItem = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => {
  const pathname = usePathname();
  return (
    <NextLink
      href={href}
      className={clsx(
        'flex items-center justify-center py-4 font-semibold text-sm',
        {
          'text-zinc-400': pathname !== href,
          'text-zinc-50': pathname === href,
        }
      )}>
      {children}
    </NextLink>
  );
};

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Timeline', href: '/timeline' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Testimonials', href: '/testimonials' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(
    navigation.find(({ href }) => href === pathname)
  );

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <>
      <header className='flex items-center justify-between px-4 py-8 sm:px-8 lg:px-16 lg:max-w-7xl lg:mx-auto'>
        <NextLink
          href='/'
          className='text-2xl font-semibold font-heading text-zinc-50 lg:text-4xl'
          onClick={() => setSelectedTab(navigation[0])}>
          MD.
        </NextLink>
        <button
          className='flex items-center gap-4 px-4 py-2 transition-all rounded-lg shadow bg-zinc-800 lg:hidden'
          onClick={openNav}>
          <span>Menu</span>
          <span>
            {isOpen ? (
              <ChevronDoubleUpIcon className='w-4 h-4' />
            ) : (
              <ChevronDoubleDownIcon className='w-4 h-4' />
            )}
          </span>
        </button>
        <nav className='hidden lg:block'>
          <ul className='flex items-center gap-4'>
            {navigation.map((nav) => (
              <li
                key={nav.href}
                className='relative px-4 py-2 font-semibold'
                onClick={() => setSelectedTab(nav)}>
                <NextLink
                  href={nav.href}
                  className={clsx(
                    'relative z-10 hover:text-zinc-50 transition-all duration-200',
                    {
                      'text-zinc-50': nav.href === selectedTab?.href,
                    }
                  )}>
                  {nav.name}
                </NextLink>
                {nav.href === selectedTab?.href && (
                  <motion.div
                    className='absolute inset-0 rounded shadow bg-zinc-800'
                    layoutId='navLayout'
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10 lg:hidden' onClose={closeNav}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-full p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-zinc-800 rounded-2xl'>
                  <nav>
                    <ul className='divide-y divide-zinc-600'>
                      {navigation.map((nav) => (
                        <li key={nav.href} onClick={closeNav}>
                          <MobileNavItem href={nav.href}>
                            {nav.name}
                          </MobileNavItem>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
