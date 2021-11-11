import Script from 'next/script'

export const Pwa = () => {
    return (
        <Script id="register-service-worker" dangerouslySetInnerHTML={{
            __html: `
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/service-worker.js')
                    .then(function (registration) {
                        console.log('Registration successful, scope is:', registration.scope);
                    })
                    .catch(function (error) {
                        console.log('Service worker registration failed, error:', error);
                    });
            }
            `
        }} />
    )
}