import Head from 'next/head'
import { useEffect } from 'react';

const Pwa = () => {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js").then(
                function (registration) {
                    console.log("Service Worker registration successful with scope: ", registration.scope);
                },
                function (err) {
                    console.log("Service Worker registration failed: ", err);
                }
            );
        }
    }, [])

    return (
        <Head>
            <link rel="manifest" href="/manifest.json" />
        </Head>
    )
}

export default Pwa