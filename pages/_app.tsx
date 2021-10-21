import Navbar from '../components/shared/Navbar/Navbar';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Footer from '../components/shared/Footer';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const url = `${window.location.origin}${router.route}`;

  return (
    <ThemeProvider attribute='class' disableTransitionOnChange>
      <DefaultSeo
        titleTemplate='%s | Mainak Das'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description: 'The personal website for Mainak Das.',
          site_name: 'Mainak Das | mainak.vercel.app',
          images: [],
        }}
        canonical={url}
      />
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={url} />
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
