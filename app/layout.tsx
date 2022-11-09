import './globals.css';
import { Space_Grotesk, Inter } from '@next/font/google';
import { Navbar } from '../components/shared/Navbar';
import axios from 'axios';
import { writeCache } from 'utils/blogHelpers';
import { blogSchema, blogSchemaType } from 'schema/blogSchema';

const grotesk = Space_Grotesk({
  weight: 'variable',
  variable: '--font-grotesk',
});

const inter = Inter();
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = (await axios.get(
    'https://dev.to/api/articles/me/published',
    {
      headers: {
        'api-key': process.env.DEV_TO_API_KEY,
      },
    }
  )) as { data: blogSchemaType };

  process.env.NODE_ENV === 'development'
    ? writeCache(blogSchema.parse(data))
    : writeCache(blogSchema.safeParse(data));

  return (
    <html lang='en' className={`${inter.className} ${grotesk.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <head />
      <body className='antialiased bg-black'>
        <div className='min-h-screen bg-zinc-900 text-zinc-400'>
          <Navbar />
          <main className='px-4 pb-4 lg:max-w-7xl lg:mx-auto'>{children}</main>
          {/* footer */}
        </div>
      </body>
    </html>
  );
}
