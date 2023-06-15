import './globals.css';
import localFont from 'next/font/local';

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
      <body className={`${CalSans.variable} ${Matter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
