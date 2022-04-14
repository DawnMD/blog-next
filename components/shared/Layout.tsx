import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export const Layout = ({
  title,
  description,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <main className='flex flex-col h-screen gap-4 px-8 '>
        <Header />
        <div className='flex-1'>{children}</div>
        <Footer />
      </main>
    </>
  );
};
