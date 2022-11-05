import './globals.css';
import { Space_Grotesk, Inter } from '@next/font/google';
import { Navbar } from '../components/shared/Navbar';

const grotesk = Space_Grotesk({
  weight: 'variable',
  variable: '--font-grotesk',
});

const inter = Inter();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.className} ${grotesk.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <head />
      <body className='bg-black'>
        <div className='bg-zinc-900 min-h-screen text-zinc-400'>
          <Navbar />
          <main className='lg:max-w-7xl lg:mx-auto px-8'>{children}</main>
          {/* footer */}
        </div>
      </body>
    </html>
  );
}
