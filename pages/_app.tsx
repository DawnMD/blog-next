import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

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
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
