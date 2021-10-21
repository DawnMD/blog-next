import Link from 'next/link';

interface NoScrollLinkProps {
  href: string;
  children: JSX.Element[] | JSX.Element | string;
}

const NoScrollLink = ({ children, href }: NoScrollLinkProps): JSX.Element => {
  return (
    <Link href={href} scroll={false} passHref>
      {children}
    </Link>
  );
};

export default NoScrollLink;
