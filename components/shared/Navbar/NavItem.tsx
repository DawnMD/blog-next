import { useRouter } from 'next/dist/client/router';
import { ReactNode } from 'react';
import NoScrollLink from '../NoScrollLink/NoScrollLink';
import classnames from 'classnames';

interface NavItemProps {
  children: ReactNode;
  key?: string | number | undefined;
  href: string;
}

const NavItem = ({ key, href, children }: NavItemProps): JSX.Element => {
  const { asPath } = useRouter();

  const selected = href === asPath;

  return (
    <li
      className={classnames(
        'px-3 py-1 transition-all rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800',
        {
          'font-semibold text-neutral-800 dark:text-neutral-200': selected,
        }
      )}>
      <NoScrollLink key={key} href={href}>
        <a>{children}</a>
      </NoScrollLink>
    </li>
  );
};

export default NavItem;
