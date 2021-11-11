import Script from 'next/script'

const GoogleAnalytics = () => {
    return (
        <>
            <Script id="ga-script-1" async src="https://www.googletagmanager.com/gtag/js?id=G-0WM9SRTQBP" />
            <Script id="ga-script-2" dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());                            
                    gtag('config', 'G-0WM9SRTQBP');
                `
            }}/>
        </>
    )
}

export default GoogleAnalytics