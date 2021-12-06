import Link from 'next/link';
import { ReactNode } from 'react';

interface NoScrollLinkProps {
  href: string;
  children: ReactNode;
}

const NoScrollLink = ({ children, href }: NoScrollLinkProps): JSX.Element => {
  return (
    <Link href={href} scroll={false} passHref>
      {children}
    </Link>
  );
};

export default NoScrollLink;
