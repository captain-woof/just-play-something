import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import { Provider } from 'react-redux'
import store from '../lib/redux/store'
import ProgressPending from '../components/progressPending'
import GoogleAnalytics from '../components/google-analytics'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Provider store={store}>
        <ProgressPending />
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
