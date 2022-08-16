// #region Global Imports
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
// #endregion Global Imports

// #region Local Imports
import { store } from '../src/store/store';
import '../styles/globals.css';
// #endregion Local Imports

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
