import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';
function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider
			attribute='class'
			enableSystem={false}
			disableTransitionOnChange
			enableColorScheme>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
