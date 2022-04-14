import { ReactNode } from 'react';
import NextLink from 'next/link';

interface MobileNavlinkProps {
  children: ReactNode;
  onClick: () => void;
  id: string | undefined;
  href: string;
}

export const MobileNavlink = ({
  children,
  onClick,
  id,
  href,
}: MobileNavlinkProps): JSX.Element => {
  return (
    <NextLink href={href}>
      <a
        onClick={onClick}
        className='flex w-auto pb-4 text-sm font-semibold border-b text-neutral-900 border-neutral-300 dark:border-neutral-700 dark:text-neutral-100'>
        {children}
      </a>
    </NextLink>
  );
};
