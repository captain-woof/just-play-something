import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import { Provider } from 'react-redux'
import store from '../lib/redux/store'
import ProgressPending from '../components/progressPending'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ProgressPending />
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
