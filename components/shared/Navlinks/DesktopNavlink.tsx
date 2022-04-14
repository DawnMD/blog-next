import { useRouter } from 'next/dist/client/router';
import { ReactNode } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';

interface DesktopNavlinkProps {
  children: ReactNode;
  key?: string | number | undefined;
  href: string;
}

export const DesktopNavlink = ({
  key,
  href,
  children,
}: DesktopNavlinkProps): JSX.Element => {
  const { asPath } = useRouter();

  const selected = href === asPath;

  return (
    <NextLink key={key} href={href}>
      <a
        className={cn(
          'px-3 py-1 transition-all rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800',
          {
            'font-semibold text-neutral-800 dark:text-neutral-200': selected,
          }
        )}>
        {children}
      </a>
    </NextLink>
  );
};
