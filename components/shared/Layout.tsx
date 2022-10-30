import { PropsWithChildren } from 'react';
import { Header } from '@components/shared/Header';
import { Sora } from '@next/font/google';
import { Footer } from '@components/shared/Footer';

const soraVariable = Sora();

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex flex-col antialiased text-zinc-400 bg-zinc-800'>
      <Header />
      <main
        className={`${soraVariable.className} min-h-screen grow mt-20 relative px-4`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
