import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='preload'
						href='/fonts/barlow-v5-latin-regular.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='/fonts/barlow-v5-latin-italic.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/static/favicons/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/static/favicons/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/static/favicons/favicon-16x16.png'
					/>
					<link rel='manifest' href='/static/favicons/site.webmanifest' />
				</Head>
				<body className='text-gray-900 bg-gray-50 dark:bg-gray-800 dark:text-gray-50'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
