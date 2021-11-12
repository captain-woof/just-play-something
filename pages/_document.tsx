import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name='application-name' content="Just Play Somethin'" />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content="Just Play Somethin'" />
                    <meta name='description' content="Just Play Somethin' is a site that brings you music created by independent artists. Find tracks you haven't heard before." />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-TileColor' content='#ff4330' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#242424' />

                    <link rel='apple-touch-icon' sizes='192x192' href='/icons/icon-192x192.png' />
                    <link rel='apple-touch-icon' sizes='512x512' href='/icons/icon-512x512.png' />

                    <link rel='icon' type='image/png' sizes='192x192' href='/icons/icon-192x192.png' />
                    <link rel='icon' type='image/png' sizes='512x512' href='/icons/icon-512x512.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='shortcut icon' href='/favicon.ico' />

                    <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument