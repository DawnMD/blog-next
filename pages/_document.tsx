import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <link
            rel='preload'
            href='/fonts/inter-v7-latin-100.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-200.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-300.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-500.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-600.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-700.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-800.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-900.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-regular.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-100.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-200.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-300.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-500.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-600.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-700.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-800.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-900.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/inter-v7-latin-regular.woff2'
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
          /> */}
          <meta content='#111111' name='theme-color' />
          <meta content='#ffffff' name='msapplication-TileColor' />
          <link rel='manifest' href='/static/favicons/site.webmanifest' />
        </Head>
        <body className='text-neutral-900 bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
