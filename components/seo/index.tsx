import Head from 'next/head'

interface ISeo {
    title: string
    description: string
    keywords: string
    image?: string
    imageAlt?: string
    urlRelative: string
}

const Seo = ({ title, description, keywords, image, imageAlt, urlRelative }: ISeo) => {
    const origin = process.env.NEXT_PUBLIC_APP_ORIGIN
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Sohail Saha (captain-woof)" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {!!image &&
                <>
                    <meta property="og:image" content={image} />
                    <meta name="twitter:image" content={image} />
                    <meta name="twitter:image:alt" content={imageAlt} />
                </>
            }
            <meta property="og:url" content={`${origin}${urlRelative}`} />
            <meta property="og:site_name" content="Sohail Saha's Portfolio & Blog" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content="@realCaptainWoof" />
            <meta name="twitter:creator" content="@realCaptainWoof" />
            <meta name="theme-color" content="#242424" />
        </Head>
    )
}

export default Seo