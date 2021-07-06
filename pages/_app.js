import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { useEffect } from 'react';
function MyApp({ Component, pageProps, router }) {
	const url = `https://mainak.vercel.app${router.route}`;
	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
		}
	});
	return (
		<Layout>
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
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
