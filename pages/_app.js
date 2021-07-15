import Head from 'next/head';
import Navbar from '../components/shared/Navbar';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Footer from '../components/shared/Footer';
function MyApp({ Component, pageProps, router }) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;
	const url = `${window.location.origin}${router.route}`;
	return (
		<ThemeProvider attribute='class' disableTransitionOnChange>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest'></link>
			</Head>
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
