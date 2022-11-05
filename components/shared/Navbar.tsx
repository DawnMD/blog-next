'use client';
import NextLink from 'next/link';
import { useState, Fragment } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import { Dialog, Transition } from '@headlessui/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <>
      <header className='p-8 flex justify-between items-center'>
        <NextLink href='/' className='font-heading text-2xl font-semibold'>
          MD.
        </NextLink>
        <button
          className='flex items-center gap-4 bg-zinc-800 px-4 py-2 rounded-lg'
          onClick={openNav}>
          <span>Menu</span>
          <span>
            <ChevronDoubleDownIcon className='h-4 w-4' />
          </span>
        </button>
      </header>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeNav}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                    Payment successful
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Your payment has been successfully submitted. Weve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
