import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

const interVariable = Inter();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={interVariable.className}>
      <Component {...pageProps} />
    </main>
  );
}
