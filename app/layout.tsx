import { Footer } from '@/components/shared/Footer';
import './globals.css';
import localFont from 'next/font/local';
import { Header } from '@/components/shared/Header';

const CalSans = localFont({
  src: '../public/fonts/CalSans/CalSans-SemiBold.woff2',
  display: 'swap',
  style: 'normal',
  weight: '600',
  variable: '--font-calSans',
});

const Matter = localFont({
  src: [
    {
      path: '../public/fonts/Matter/Matter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Matter/Matter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Matter/Matter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-matter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${CalSans.variable} ${Matter.variable} font-sans antialiased bg-black`}>
        <div className='min-h-screen bg-zinc-900 text-zinc-400 sm:max-w-3xl lg:max-w-7xl sm:mx-auto flex flex-col'>
          <Header />
          <main className='lg:max-w-7xl lg:mx-auto px-4 pb-4 lg:px-16 sm:px-8 grow'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
